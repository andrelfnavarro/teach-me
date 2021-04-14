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
  margin-right: ${Spacing.XXSmall};
  margin-left: ${Spacing.XXSmall};
  border-style: solid;
  padding: ${Spacing.XSmall} ${Spacing.Medium};
  transition: all .2s ease-in-out;
  &:hover  {
    cursor: pointer;
    transform: scale(1.05);
  };
  &:disabled {
    color: ${Colors.Secondary};
    border-color: ${Colors.HeavyGray};
    background-color: ${Colors.HeavyGray};
    cursor: auto;
    transform: scale(1);
  }
`;
