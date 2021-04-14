import React from 'react';
import { Col, Grid, Row } from 'react-styled-flexboxgrid';
import { Spacing } from 'src/constants';
import axios from 'axios';

import { H2 } from 'src/typography';
import { DiscoverItem } from './discover-item';
import { MultiSelect } from '../select/multi-select';
import { DISCOVER_ITEMS } from './discover-items';

type Props = {
  
};

type State = {
  discoverItems: CourseObject[];
  filteredItems: FilterObject[];
  filterItemsOptions: FilterObject[];
  loaded: boolean;
};

type FilterObject = {
  label?: string;
  value?: string;
}

type CourseObjectContainer = {
  data: CourseObject[];
}

type CourseObject = {
  _id: string;
  title: string;
  quote: string;
  price: number;
  grade: number;
  userInfo: UserInfoObject;
};

type UserInfoObject = {
  name: string;
  email: string;
  university: string;
  degree: string;
  avatar: string;
};

export class Discover extends React.Component<Props, State> {
  state: State = {
    discoverItems: [],
    filteredItems: [],
    filterItemsOptions: [],
    loaded: false
  };

  componentDidMount() {
    this.getDiscoverItems();
  }

  async getDiscoverItems(e: any = undefined) {
    let filtersToUse: any = e;
    if(e == undefined) {
      filtersToUse = this.state.filteredItems;
    }
    const parameters = {
      titles: this.getValues(filtersToUse)
    };
    console.log('new', parameters);
    
    const coursesDataContainer: CourseObjectContainer = await axios.get('http://localhost:5000/api/courses/title',
      { 
        params: parameters
      }
    );
    
    const ItemsOptionsContainer: CourseObjectContainer = await axios.get('http://localhost:5000/api/courses/all',
      { 
        params: parameters
      }
    );

    const coursesData: CourseObject[] = coursesDataContainer.data;
    const ItemsOptions: CourseObject[] = ItemsOptionsContainer.data;
      
    const seenFilteredItems = new Set();
    const undefinedIndexes: Array<any> = [];
    const filterItemsOptions: Array<any> = ItemsOptions.map((item, index) => {
      if(seenFilteredItems.has(item.title) === false) {
        seenFilteredItems.add(item.title);
        return {label: item.title, value: item.title};
      } else {
        undefinedIndexes.unshift(index);
      }
    });

    undefinedIndexes.forEach(index => {
      filterItemsOptions.splice(index, 1);
    });

    if(e == undefined) {
      this.setState({
        discoverItems: coursesData,
        filterItemsOptions: filterItemsOptions,
        loaded: true
      });
    } else {
      this.setState({
        discoverItems: coursesData,
        filterItemsOptions: filterItemsOptions,
        loaded: true,
        filteredItems: e
      });
    }
  }

  getValues(items: FilterObject[]) {
    const itemsValues: Array<any> = items.map(item => {
      return item.value;
    });

    return itemsValues;
  }

  render() {
    if(this.state.loaded) {
      return (
        <div style={{ overflowX: 'hidden', overflowY: 'hidden' }}>
          <Row style={{ marginBottom: Spacing.Small }}>
            <Col xsOffset={3} xs={10} md={12} style={{ marginBottom: Spacing.Small }}>
              <H2>Qual curso você procura?</H2>
            </Col>
            <Col xsOffset={3} xs={3} md={5}>
              <MultiSelect
                placeholder={'Filtre cursos por nome!'}
                value={this.state.filteredItems}
                options={this.state.filterItemsOptions}
                isMulti={true}
                isDisabled={false}
                onChange={(e: any) => {
                  this.getDiscoverItems(e);
                }
                }
              />
            </Col>
          </Row>
          <Row center='xs'>
            <Col xs={6}>
              <Row>
                {this.state.discoverItems.map((course, index) => (
                  <Col key={index} xs={12} md={12}>
                    <DiscoverItem course={course} />
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}
