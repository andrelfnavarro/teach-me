import React, { JSXElementConstructor } from 'react';
import { Button } from 'src/atomic/atm/button/button';
import { FlatBottomFrame, FlatTopFrame } from 'src/atomic/atm/frame/frame';
import { Spacing } from 'src/constants';
import { H3, Body, DD, H4 } from 'src/typography';
import avatar1 from 'src/assets/avatar1.png';
import avatar2 from 'src/assets/avatar2.png';
import avatar3 from 'src/assets/avatar3.png';
import avatar4 from 'src/assets/avatar4.png';
import avatar5 from 'src/assets/avatar5.png';

interface DiscoverItemProps {
  course: CourseObject;
  user?: any;
  handleBuy: () => void;
}

type CourseObject = {
  _id: string;
  title: string;
  quote: string;
  price: number;
  grade: number;
  userInfo: UserInfoObject 
}

type UserInfoObject = {
  name: string;
  email: string;
  university: string;
  degree: string;
  avatar: string
}

type AvatarsMap = {
  [key: string]: any
}

export const DiscoverItem: React.FC<DiscoverItemProps> = (props: DiscoverItemProps) => {
  const { course, user, handleBuy } = props;
  
  const avatarsMap: AvatarsMap = {
    'avatar1': avatar1,
    'avatar2': avatar2,
    'avatar3': avatar3,
    'avatar4': avatar4,  
    'avatar5': avatar5  
  };
  
  return (
    <>
      <FlatBottomFrame>
        <H3>{course.title}</H3>
        <Body>&ldquo;{course.quote}&rdquo;</Body>
        <DD>
          <strong>Preço:</strong> R$ {course.price}
        </DD>
        <div style={{ width: '100%', justifyContent: 'flex-end', display: 'flex' }}>
          <Button theme='secondary'>Ver detalhes</Button>
          {(course.userInfo.email != user.email) ? 
            <Button theme='primary' onClick={handleBuy}>Contratar</Button> :
            <></>
          }
        </div>
      </FlatBottomFrame>
      <FlatTopFrame style={{ marginBottom: Spacing.XSmall }}>
        <div style={{ flexDirection: 'row', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <img src={avatarsMap[course.userInfo.avatar]} width={Spacing.XLarge} height={Spacing.XLarge} />
            <div style={{ marginLeft: Spacing.Small }}>
              <H4>{course.userInfo.name}</H4>
              <DD>
                {course.userInfo.university} - {course.userInfo.degree}
              </DD>
            </div>
          </div>
          <div style={{ marginLeft: Spacing.Small }}>
            <DD>
              <strong>Avaliação:</strong> {course.grade}/5
            </DD>
          </div>
        </div>
      </FlatTopFrame>
    </>
  );
};
