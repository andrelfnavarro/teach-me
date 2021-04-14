import React from 'react';
import { Col, Row } from 'react-styled-flexboxgrid';
import { Spacing } from 'src/constants';
import { Button } from 'src/atomic/atm/button/button';
import { Link as RouterLink, Redirect } from 'react-router-dom';
import axios from 'axios';

import { H2 } from 'src/typography';
import { DiscoverItem } from './history-item';

type Props = {
  user?: any;
};

type State = {
  discoverItems: CourseObject[];
  loaded: boolean;
};

type CourseObjectContainer = {
  data: CourseObject[];
}

type CourseObject = {
  _id: string;
  date: string;
  email: string;
  courseInfo: CourseInfoObject;
};

type CourseInfoObject = {
  title: string;
  quote: string;
  price: number;
  grade: number;
  userInfo: UserInfoObject ;
}

type UserInfoObject = {
  name: string;
  email: string;
  university: string;
  degree: string;
  avatar: string;
};

export class History extends React.Component<Props, State> {
  state: State = {
    discoverItems: [],
    loaded: false
  };

  componentDidMount() {
    this.getDiscoverItems();
  }

  async getDiscoverItems() {
    const parameters = {
      emails: [this.props.user.email]
    };
    
    const coursesDataContainer: CourseObjectContainer = await axios.get('http://localhost:5000/api/history',
      { 
        params: parameters
      }
    );

    const coursesData: CourseObject[] = coursesDataContainer.data;

    this.setState({
      discoverItems: coursesData,
      loaded: true,
    });
  }

  render() {
    if(this.state.loaded) {
      return (
        <div style={{ overflowX: 'hidden', overflowY: 'hidden' }}>
          <Row style={{ marginBottom: Spacing.Small }}>
            <Col xsOffset={3} xs={10} md={12} style={{ marginBottom: Spacing.Small }}>
              {this.props.user.email != '' ? 
                <H2>Os cursos que você já comprou:</H2> : 
                <H2></H2>
              }
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
