import React from 'react';
import { Col, Grid, Row } from 'react-styled-flexboxgrid';
import { Spacing } from 'src/constants';
import axios from 'axios';

import { H2 } from 'src/typography';
import { DiscoverItem } from './discover-item';
import { DISCOVER_ITEMS } from './discover-items';

type Props = {
  
};

type State = {
  discoverItems: CourseObject[];
  loaded: boolean;
};

type CourseObjectContainer = {
  data: CourseObject[];
}

type CourseObject = {
  title: string;
  quote: string;
  price: number;
  grade: number;
  userInfo: UserInfoObject;
};

type UserInfoObject = {
  name: string;
  university: string;
  degree: string;
  avatar: string;
};

export class Discover extends React.Component<Props, State> {
  state: State = {
    discoverItems: [],
    loaded: false
  };

  componentDidMount() {
    this.getExpenses();
  }


  async getExpenses() {
    const parameters = {};
    
    const coursesDataContainer: CourseObjectContainer = await axios.get('http://localhost:5000/api/courses/all',
      { 
        params: parameters
      }
    );

    const coursesData: CourseObject[] = coursesDataContainer.data;

    this.setState({
      discoverItems: coursesData,
      loaded: true
    });
  }

  render() {
    if(this.state.loaded) {
      return (
        <Grid fluid>
          <Row style={{ marginBottom: Spacing.Small }}>
            <Col xsOffset={3} xs={10} md={12}>
              <H2>Qual curso você procura?</H2>
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
        </Grid>
      );
    } else {
      return <div>loading</div>;
    }
  }
}
