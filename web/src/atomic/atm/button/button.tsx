import React from 'react';
import { StyledButton } from './button-styles';

export interface ButtonProps {
  type?: string;
  theme?: 'primary' | 'secondary';
  bold?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  return (
    <StyledButton onClick={props.onClick} theme={props.theme} bold={props.bold}>
      {props.children}
    </StyledButton>
  );
};
