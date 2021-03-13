import styled from 'styled-components';
import { Colors, FontFamily, FontSize, FontWeight } from './constants';

export const H1 = styled.h1`
  font-family: ${FontFamily};
  color: ${Colors.Secondary};
  font-size: ${FontSize.XXLarge};
  font-weight: ${FontWeight.ExtraBold};
`;
export const H2 = styled.h2`
  font-family: ${FontFamily};
  color: ${Colors.XXDark};
  font-size: ${FontSize.XLarge};
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
