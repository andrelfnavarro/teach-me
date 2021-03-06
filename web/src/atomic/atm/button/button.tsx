import React from 'react';
import { StyledButton } from './button-styles';

export interface ButtonProps {
  type?: string;
  theme?: 'primary' | 'secondary';
  bold?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  return (
    <StyledButton onClick={props.onClick} theme={props.theme} bold={props.bold} disabled={props.disabled}>
      {props.children}
    </StyledButton>
  );
};
