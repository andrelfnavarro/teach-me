import { Colors, Spacing } from 'src/constants';
import styled from 'styled-components';
import studentImage from 'src/assets/estudante.png';

export const HomeGreen = styled.div`
  background-color: ${Colors.Primary};
  height: 50vh;
  background-image: url(${studentImage});
  background-repeat: no-repeat;
  background-position: right bottom;
`;

export const HomeIconWrapper = styled.div`
  position: absolute;
  left: ${Spacing.Medium};
  top: ${Spacing.Small};
`;
