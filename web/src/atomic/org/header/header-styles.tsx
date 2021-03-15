import { Colors, FontSize, FontWeight, Spacing } from 'src/constants';
import styled from 'styled-components';
import { HeaderProps } from './header';

const HEADER_HEIGHT = '64px';

export const HeaderNavWrapper = styled.div<HeaderProps>`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  background-color: ${(props) => (props.logged ? Colors.Secondary : Colors.Primary)};
  padding: ${Spacing.Medium} ${Spacing.Large};
  height: ${HEADER_HEIGHT};
  box-shadow: ${(props) => (props.logged ? '0 4px 2px -2px gray' : 'none')};
`;

export const HeaderButtonWrapper = styled.div<HeaderProps>`
  max-width: 250px;
  display: flex;
  justify-content: space-between;
`;

export const HeaderLinksWrapper = styled.div<HeaderProps>`
  display: flex;
  justify-content: space-between;
  padding: 0 ${Spacing.XXLarge};
`;
