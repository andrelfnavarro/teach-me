import React from 'react';
import { H1, H2, Body, DD } from 'src/typography';
import { ENGINEERING_COURSES, MEDICINE_COURSES, LAW_COURSES } from './home-courses';
import {
  HomeGreen,
  HomeWrapper,
  HomeTextWrapper,
  HomeWhite,
  HomeWhiteTextWrapper,
  HomeWhiteBodyWrapper,
  HomeRoot,
  HomeWhiteListWrapper,
  HomeWhiteListItemWrapper,
  HomeGray,
  HomeGrayLogoWrapper,
} from './home-styles';
import unespLogo from 'src/assets/unesp.png';
import uspLogo from 'src/assets/usp.png';
import unicampLogo from 'src/assets/unicamp.png';
import espmLogo from 'src/assets/espm.png';
import fgvLogo from 'src/assets/fgv.png';
import { Spacing } from 'src/constants';
import { Col, Row } from 'react-styled-flexboxgrid';
import { Header } from 'src/atomic/org/header/header';

export const Home: React.FC = () => {
  return (
    <HomeRoot>
      <HomeGreen>
        <HomeWrapper>
          <Header />
          <HomeTextWrapper>
            <H1>De estudantes para estudantes</H1>
          </HomeTextWrapper>
        </HomeWrapper>
      </HomeGreen>
      <HomeWhite>
        <HomeWhiteTextWrapper>
          <H2>Pesquise por temas</H2>
          <HomeWhiteBodyWrapper>
            <Body>Temos tutores que ensinam os mais diversos contéudos</Body>
          </HomeWhiteBodyWrapper>
        </HomeWhiteTextWrapper>
        <HomeWhiteListWrapper>
          <Row>
            <Col xs={4}>
              <HomeWhiteListItemWrapper>
                {ENGINEERING_COURSES.map((course, index) => (
                  <DD key={`ENGINEERING-${index}`}>{course}</DD>
                ))}
              </HomeWhiteListItemWrapper>
            </Col>

            <Col xs={4}>
              <HomeWhiteListItemWrapper>
                {MEDICINE_COURSES.map((course, index) => (
                  <DD key={`MEDICINE-${index}`}>{course}</DD>
                ))}
              </HomeWhiteListItemWrapper>
            </Col>
            <Col xs={4}>
              <HomeWhiteListItemWrapper>
                {LAW_COURSES.map((course, index) => (
                  <DD key={`LAW-${index}`}>{course}</DD>
                ))}
              </HomeWhiteListItemWrapper>
            </Col>
          </Row>
        </HomeWhiteListWrapper>
      </HomeWhite>
      <HomeGray>
        <Row>
          <Col style={{ padding: `${Spacing.XXLarge} 0px 0px 100px` }} xs={12}>
            <H2>Tutores das maiores universidades de São Paulo</H2>
            <HomeWhiteBodyWrapper>
              <Body>Procura matérias da sua universidade?</Body>
            </HomeWhiteBodyWrapper>
          </Col>
        </Row>
        <Row center='xs'>
          <HomeGrayLogoWrapper>
            <Col xs={12} md={2}>
              <img src={fgvLogo} />
            </Col>
            <Col xs={12} md={2}>
              <img src={unespLogo} />
            </Col>
            <Col xs={12} md={2}>
              <img src={uspLogo} />
            </Col>
            <Col xs={12} md={2}>
              <img src={unicampLogo} />
            </Col>
            <Col xs={12} md={2}>
              <img src={espmLogo} />
            </Col>
          </HomeGrayLogoWrapper>
        </Row>
      </HomeGray>
    </HomeRoot>
  );
};
