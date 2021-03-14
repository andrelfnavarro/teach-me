import { FrameStyled, FlatBottomFrameStyled, FlatTopFrameStyled } from './frame-styles';
import React from 'react';

export interface FrameProps {
  children: React.ReactNode;
  backgroundColor?: string;
  style?: any;
}

export const Frame: React.FC<FrameProps> = (props: FrameProps) => {
  return <FrameStyled>{props.children}</FrameStyled>;
};

export const FlatBottomFrame: React.FC<FrameProps> = (props: FrameProps) => {
  return <FlatBottomFrameStyled>{props.children}</FlatBottomFrameStyled>;
};
export const FlatTopFrame: React.FC<FrameProps> = (props: FrameProps) => {
  return <FlatTopFrameStyled style={props.style}>{props.children}</FlatTopFrameStyled>;
};
