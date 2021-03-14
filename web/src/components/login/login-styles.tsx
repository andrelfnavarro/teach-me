import { Colors, Spacing } from 'src/constants';
import styled from 'styled-components';

export const LoginWrapper = styled.div`
  height: 100vh;
  background-color: ${Colors.Primary};
  padding: ${Spacing.Medium} ${Spacing.Large};
  overflow-y: hidden;
  overflow-x: hidden;
`;
export const LoginFormWrapper = styled.div`
  height: auto;
`;
