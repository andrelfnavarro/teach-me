import React from 'react';
import { Col, Grid, Row } from 'react-styled-flexboxgrid';
import { Spacing } from 'src/constants';

import { H2 } from 'src/typography';
import { DiscoverItem } from './discover-item';
import { DISCOVER_ITEMS } from './discover-items';

export const Discover = () => {
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
            {DISCOVER_ITEMS.map((course, index) => (
              <Col key={index} xs={12} md={12}>
                <DiscoverItem course={course} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Grid>
  );
};
