import { FrameStyled } from './frame-styles';
import React from 'react';

interface FrameProps {
  children: React.ReactNode;
}
export const Frame: React.FC<FrameProps> = (props: FrameProps) => {
  return <FrameStyled>{props.children}</FrameStyled>;
};
