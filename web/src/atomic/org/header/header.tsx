import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Button } from 'src/atomic/atm/button/button';
import { HomeHeaderIcon } from 'src/components/home/home-header-icon';
import { HeaderButtonWrapper, HeaderNavWrapper } from './header-styles';

export const Header: React.FC = (props) => {
  return (
    <HeaderNavWrapper>
      <RouterLink to='/'>
        <HomeHeaderIcon />
      </RouterLink>
      <HeaderButtonWrapper>
        <RouterLink to='/login'>
          <Button theme='primary' bold>
            Entrar
          </Button>
        </RouterLink>
        <RouterLink to='/signup'>
          <Button theme='secondary' bold>
            Cadastrar
          </Button>
        </RouterLink>
      </HeaderButtonWrapper>
    </HeaderNavWrapper>
  );
};
