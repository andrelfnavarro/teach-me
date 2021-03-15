import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';
import { Colors, FontFamily, FontSize, FontWeight, Spacing } from './constants';

export const H1 = styled.h1`
  font-family: ${FontFamily};
  color: ${Colors.Secondary};
  font-size: ${FontSize.XXLarge};
  font-weight: ${FontWeight.ExtraBold};
`;
export const H2 = styled.h2`
  font-family: ${FontFamily};
  color: ${Colors.XXDark};
  margin: 0px;
  font-size: ${FontSize.XLarge};
  font-weight: ${FontWeight.Bold};
`;

export const H3 = styled.h3`
  font-family: ${FontFamily};
  color: ${Colors.XXDark};
  font-size: ${FontSize.Large};
  font-weight: ${FontWeight.Bold};
`;

export const H4 = styled.h3`
  font-family: ${FontFamily};
  color: ${Colors.XXDark};
  font-size: ${FontSize.Small};
  font-weight: ${FontWeight.Regular};
`;

export const Body = styled.body`
  font-family: ${FontFamily};
  color: ${Colors.XXDark};
  font-size: ${FontSize.Medium};
  font-weight: ${FontWeight.Regular};
`;

export const DD = styled.p`
  font-family: ${FontFamily};
  color: ${Colors.XXDark};
  font-size: ${FontSize.XSmall};
  font-weight: ${FontWeight.Regular};
`;

export const Link = styled(RouterLink)`
  font-family: ${FontFamily};
  color: ${Colors.XXDark};
  font-size: ${FontSize.XSmall};
  font-weight: ${FontWeight.Regular};
  margin-left: ${Spacing.XXSmall};
  margin-right: ${Spacing.XXSmall};
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${Colors.Primary};
  }
`;
