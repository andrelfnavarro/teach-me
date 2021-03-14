import { Colors, Spacing } from 'src/constants';
import styled from 'styled-components';

const HEADER_HEIGHT = '64px';

export const HeaderNavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  background-color: ${Colors.Primary};
  padding: ${Spacing.Medium} ${Spacing.Large};
  height: ${HEADER_HEIGHT};
`;

export const HeaderButtonWrapper = styled.div`
  max-width: 250px;
  display: flex;
  justify-content: space-between;
`;

export const HeaderLinksWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 ${Spacing.XXLarge};
`;
