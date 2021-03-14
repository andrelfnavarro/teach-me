import { BorderRadii, Colors, Spacing } from 'src/constants';
import styled from 'styled-components';

export const FrameStyled = styled.div`
  background-color: ${Colors.Secondary};
  border-radius: ${BorderRadii.Medium};
  padding: ${Spacing.Small} ${Spacing.Medium};
`;
