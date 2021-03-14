import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'src/atomic/atm/button/button';
import { HomeHeaderIcon } from 'src/components/home/home-header-icon';
import { HeaderButtonWrapper, HeaderNavWrapper } from './header-styles';

export const Header: React.FC = (props) => {
  return (
    <HeaderNavWrapper>
      <Link to='/'>
        <HomeHeaderIcon />
      </Link>
      <HeaderButtonWrapper>
        <Link to='/login'>
          <Button theme='primary' bold>
            Entrar
          </Button>
        </Link>
        <Button theme='secondary' bold>
          Cadastrar
        </Button>
      </HeaderButtonWrapper>
    </HeaderNavWrapper>
  );
};
