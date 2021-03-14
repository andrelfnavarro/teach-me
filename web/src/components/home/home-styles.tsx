import { Colors, Spacing } from 'src/constants';
import styled from 'styled-components';
import studentImage from 'src/assets/estudante.png';

export const HomeGreen = styled.div`
  background-color: ${Colors.Primary};
  height: 50vh;
  width: 100vw;
  align-items: center;
  @media all and (min-width: 1024px) {
    background-image: url(${studentImage});
    background-repeat: no-repeat;
    background-position: 82% 100%;
  }
`;

export const HomeWhite = styled.div`
  background-color: ${Colors.Secondary};
  height: 50vh;
  width: 100vw;
  flex-direction: row;
  display: flex;
  padding: ${Spacing.XXLarge} 0px 0px 100px;
`;

export const HomeGray = styled.div`
  background-color: rgba(215, 215, 215, 0.43);
  min-height: 50vh;
  width: 100vw;
`;

export const HomeWhiteTextWrapper = styled.div`
  justify-content: center;
  width: 35%;
`;

export const HomeGrayLogoWrapper = styled.div`
  height: 35vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HomeWhiteListWrapper = styled.div`
  height: 100%;
  width: 65%;
`;

export const HomeWhiteListItemWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const HomeWhiteCoursesWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const HomeWrapper = styled.div`
  padding: ${Spacing.Medium} ${Spacing.Large};
`;

export const HomeRoot = styled.div`
  overflow-x: hidden;
`;

export const HomeWhiteBodyWrapper = styled.div`
  width: 70%;
`;

export const HomeTextWrapper = styled.div`
  width: 500px;
  padding-left: 12%;
`;
