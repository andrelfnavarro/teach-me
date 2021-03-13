import { Colors, FontFamily, FontSize, FontWeight, Spacing } from 'src/constants';
import styled from 'styled-components';
import { ButtonProps } from './button';

const BUTTON_HEIGHT = '44PX';

export const StyledButton = styled.button<ButtonProps>`
  height: ${BUTTON_HEIGHT};
  border-radius: ${Spacing.Large};
  color: ${(props) => (props.theme === 'primary' ? Colors.Secondary : Colors.Primary)};
  border-color: ${(props) => (props.theme === 'primary' ? Colors.Secondary : Colors.Primary)};
  background-color: ${(props) => (props.theme === 'primary' ? Colors.Primary : Colors.Secondary)};
  font-size: ${FontSize.Medium};
  font-weight: ${(props) => (props.bold ? FontWeight.Bold : FontWeight.Regular)};
  font-family: ${FontFamily}
  border-width: 2px;
  border-style: solid;
  padding: ${Spacing.XSmall} ${Spacing.Medium};

  &:hover  {
    cursor: pointer;
  }
`;
