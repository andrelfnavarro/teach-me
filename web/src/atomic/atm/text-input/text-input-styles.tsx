import { BorderRadii, Colors, FontFamily, FontSize, Spacing } from 'src/constants';
import styled from 'styled-components';

export const TextInputStyled = styled.input`
  height: ${Spacing.Large};
  border-radius: ${BorderRadii.Small};
  font-size: ${FontSize.Medium};
  font-family: ${FontFamily};
  background-color: ${Colors.Gray};
  box-sizing: border-box;
  width: 100%;
  border-color: ${Colors.Gray};
  padding: ${Spacing.Small} ${Spacing.Small};

  &: focus {
    outline-width: 0;
  }
`;
