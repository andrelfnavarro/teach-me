import { TextInputStyled } from './text-input-styles';
import React from 'react';

interface TextInputProps {
  children?: React.ReactNode;
  placeholder?: string;
  onChange?: (e: any) => void;
  type?: string;
}
export const TextInput: React.FC<TextInputProps> = (props: TextInputProps) => {
  return <TextInputStyled onChange={props.onChange} placeholder={props.placeholder} type={props.type ?? 'text'} />;
};
