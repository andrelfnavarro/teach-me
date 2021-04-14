import React from 'react';
import { Col, Row } from 'react-styled-flexboxgrid';
import { Button } from 'src/atomic/atm/button/button';
import { Frame } from 'src/atomic/atm/frame/frame';
import { TextInput } from 'src/atomic/atm/text-input/text-input';
import { Spacing } from 'src/constants';
import { H3, H4 } from 'src/typography';
import { LoginWrapper } from './create-course-styles';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import axios from 'axios';


type Props = {
  user?: any;
};

export const CreateCourse: React.FC<Props> = (props: Props) => {
  const [title, setTitle] = React.useState(null);
  const [quote, setQuote] = React.useState(null);
  const [price, setPrice] = React.useState(null);
  const history = useHistory();

  async function handleCreate() {
    const body = {
      title: title,
      quote: quote,
      price: price,
      userInfo: {
        name: props.user.name,
        email: props.user.email,
        university: props.user.university,
        degree: props.user.degree,
        avatar: props.user.avatar,
      }
    };
      
    await axios.post('http://localhost:5000/api/courses',
      body
    );

    history.push('my-courses');
  }

  return (
    <LoginWrapper>
      <Row center='xs'>
        <Col xs={10} md={12}>
          <Frame>
            <Row>
              <Col xs={12}>
                <H3>Coloque as informações do curso:</H3>
              </Col>
            </Row>

            <Row style={{ marginBottom: Spacing.Small }} center='xs'>
              <Col xs={12}>
                <TextInput
                  onChange={(event) => {
                    setTitle(event.target.value);
                  }}
                  placeholder='Matéria do seu curso'
                />
              </Col>
            </Row>
            <Row style={{ marginBottom: Spacing.Small }} center='xs'>
              <Col xs={12}>
                <TextInput
                  onChange={(event) => {
                    setQuote(event.target.value);
                  }}
                  placeholder='Seu curso em poucas palavras'
                />
              </Col>
            </Row>
            <Row style={{ marginBottom: Spacing.Small }} center='xs'>
              <Col xs={12}>
                <TextInput
                  onChange={(event) => {
                    setPrice(event.target.value);
                  }}
                  placeholder='Quanto seu curso custa?'
                />
              </Col>
            </Row>
          
            <Row style={{ marginBottom: Spacing.XSmall }} center='xs'>
              <Col xs={6}>
                <RouterLink to='my-courses'>
                  <Button theme='secondary' bold>
                    Voltar
                  </Button>
                </RouterLink>
              </Col>
              <Col xs={6} style={{display: 'flex', justifyContent: 'flex-end'}}>
                <Button theme='primary' bold onClick={() => {handleCreate();}}>
                  Criar Curso
                </Button>
              </Col>
            </Row>
          </Frame>
        </Col>
      </Row>
    </LoginWrapper>
  );
};
