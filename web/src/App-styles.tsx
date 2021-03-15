import styled from 'styled-components';
import { Colors, Spacing } from './constants';

interface AppWrapperProps {
  logged?: boolean;
}
export const AppWrapper = styled.div<AppWrapperProps>`
  width: 100vw;
  min-height: calc(100vh - 64px - 48px);
  background-color: ${Colors.Primary};
  padding: ${(props) => (props.logged ? Spacing.Medium : '0px')};
`;
