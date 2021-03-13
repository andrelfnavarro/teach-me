import React from 'react';
import { H1 } from 'src/typography';
import { HomeHeaderIcon } from './home-header-icon';
import { HomeGreen, HomeIconWrapper } from './home-styles';

export const Home: React.FC = () => {
  return (
    <HomeGreen>
      <HomeIconWrapper>
        <HomeHeaderIcon />
        <H1>De estudantes para estudantes</H1>
      </HomeIconWrapper>
    </HomeGreen>
  );
};
