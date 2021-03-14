import { Colors } from 'src/constants';
import styled from 'styled-components';

export const HeaderNavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  width: 100%;
  background-color: ${Colors.Primary};
`;

export const HeaderButtonWrapper = styled.div`
  width: 250px;
  display: flex;
  justify-content: space-between;
`;
