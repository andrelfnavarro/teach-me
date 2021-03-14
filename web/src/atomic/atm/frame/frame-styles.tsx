import { BorderRadii, Colors, Spacing } from 'src/constants';
import styled from 'styled-components';

export const FrameStyled = styled.div`
  background-color: ${Colors.Secondary};
  border-radius: ${BorderRadii.Medium};
  padding: ${Spacing.Small} ${Spacing.Medium};
`;

export const FlatTopFrameStyled = styled.div`
  background-color: ${Colors.Secondary};
  border-bottom-left-radius: ${BorderRadii.Medium};
  border-bottom-right-radius: ${BorderRadii.Medium};
  padding: ${Spacing.Small} ${Spacing.Medium};
  margin-top: 2px;
`;

export const FlatBottomFrameStyled = styled.div`
  background-color: ${Colors.Secondary};
  border-top-left-radius: ${BorderRadii.Medium};
  border-top-right-radius: ${BorderRadii.Medium};
  padding: ${Spacing.Small} ${Spacing.Medium};
`;
