import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Button } from 'src/atomic/atm/button/button';
import { HomeHeaderIcon } from 'src/components/home/home-header-icon';
import { Breakpoint, useMedia } from 'src/utils/match-media';
import { HeaderButtonWrapper, HeaderNavWrapper } from './header-styles';
import { useLocation } from 'react-router-dom';
import userAvatar from 'src/assets/avatar-user.png';
import { Spacing } from 'src/constants';
import { H3, DD, Link } from 'src/typography';

export interface HeaderProps {
  logged?: boolean;
  user?: any;
}

export const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  const md = useMedia(`(max-width: ${Breakpoint.md})`);
  const location = useLocation();

  return (
    <HeaderNavWrapper logged={props.logged}>
      {props.logged ? (
        <div style={{ flexDirection: 'row', display: 'flex', alignItems: 'center' }}>
          <img src={userAvatar} width={72} height={72} />
          <div style={{ marginLeft: Spacing.XLarge }}>
            <H3 style={{ marginBottom: '-' + Spacing.Small }}>Olá, {props.user.name.split(' ')[0]}</H3>
            <DD>O que iremos aprender hoje?</DD>
          </div>
        </div>
      ) : (
        <RouterLink to='/'>
          <HomeHeaderIcon size={md ? 64 : undefined} />
        </RouterLink>
      )}

      {!props.logged ? (
        <HeaderButtonWrapper>
          {location.pathname !== '/login' && (
            <RouterLink to='/login'>
              <Button theme='primary' bold>
                Entrar
              </Button>
            </RouterLink>
          )}
          {location.pathname !== '/signup' && (
            <RouterLink to='/signup'>
              <Button theme='secondary' bold>
                Cadastrar{props.user.name}
              </Button>
            </RouterLink>
          )}
        </HeaderButtonWrapper>
      ) : (
        <HeaderButtonWrapper>
          <Link to='/discover'>Meus cursos</Link>
          <Link onClick={props.user.logout} to='/'>
            Sair
          </Link>
        </HeaderButtonWrapper>
      )}
    </HeaderNavWrapper>
  );
};
