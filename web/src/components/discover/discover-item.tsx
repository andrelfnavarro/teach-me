import React from 'react';
import { Button } from 'src/atomic/atm/button/button';
import { FlatBottomFrame, FlatTopFrame } from 'src/atomic/atm/frame/frame';
import { Spacing } from 'src/constants';
import { H3, Body, DD, H4 } from 'src/typography';

interface DiscoverItemProps {
  course: any;
}
export const DiscoverItem: React.FC<DiscoverItemProps> = (props: DiscoverItemProps) => {
  const { course } = props;
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
          <Button theme='primary'>Contratar</Button>
        </div>
      </FlatBottomFrame>
      <FlatTopFrame style={{ marginBottom: Spacing.XSmall }}>
        <div style={{ flexDirection: 'row', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <img src={course.userInfo.avatar} width={Spacing.XLarge} height={Spacing.XLarge} />
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
