import React, { useEffect } from 'react';
import { Button } from 'src/atomic/atm/button/button';
import { FlatBottomFrame, FlatTopFrame } from 'src/atomic/atm/frame/frame';
import { Spacing } from 'src/constants';
import { H3, Body, DD, H4 } from 'src/typography';
import axios from 'axios';
import avatar1 from 'src/assets/avatar1.png';
import avatar2 from 'src/assets/avatar2.png';
import avatar3 from 'src/assets/avatar3.png';
import avatar4 from 'src/assets/avatar4.png';
import avatar5 from 'src/assets/avatar5.png';

interface DiscoverItemProps {
  course: CourseObject;
}

type CourseObject = {
  _id: string;
  date: string;
  email: string;
  courseInfo: CourseInfoObject;
}

type CourseInfoObject = {
  title: string;
  quote: string;
  price: number;
  grade: number;
  userInfo: UserInfoObject ;
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
  const { course } = props;
  const [value, setValue] = React.useState(0);
  
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
        <H3>{course.courseInfo.title}</H3>
        <div style={{ width: '100%', justifyContent: 'space-between', display: 'flex' }}>
          <DD>
            <strong>Preço:</strong> R$ {course.courseInfo.price}
          </DD>
          <DD>
            <strong>Data de compra:</strong> {course.date}
          </DD>
        </div>
      </FlatBottomFrame>
      <FlatTopFrame style={{ marginBottom: Spacing.XSmall }}>
        <div style={{ flexDirection: 'row', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <img src={avatarsMap[course.courseInfo.userInfo.avatar]} width={Spacing.XLarge} height={Spacing.XLarge} />
            <div style={{ marginLeft: Spacing.Small }}>
              <H4>{course.courseInfo.userInfo.name}</H4>
              <DD>
                {course.courseInfo.userInfo.university} - {course.courseInfo.userInfo.degree}
              </DD>
            </div>
          </div>
          <div style={{ marginLeft: Spacing.Small }}>
            <DD>
              <strong>Avaliação:</strong> {course.courseInfo.grade}/5
            </DD>
          </div>
        </div>
      </FlatTopFrame>
    </>
  );
};
