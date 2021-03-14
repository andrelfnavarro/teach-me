import React from 'react';
import { Col, Row } from 'react-styled-flexboxgrid';
import { Button } from 'src/atomic/atm/button/button';
import { Frame } from 'src/atomic/atm/frame/frame';
import { TextInput } from 'src/atomic/atm/text-input/text-input';
import { Spacing } from 'src/constants';
import { H3 } from 'src/typography';
import { LoginWrapper } from './signup-styles';
import { Link as RouterLink } from 'react-router-dom';

export const Signup: React.FC = () => {
  const [email, setEmail] = React.useState(null);
  const [password, setPassword] = React.useState(null);

  return (
    <LoginWrapper>
      <Frame>
        <Row>
          <Col xs={12}>
            <H3>Cadastre-se:</H3>
          </Col>
        </Row>
        <Row style={{ marginBottom: Spacing.XSmall }} center='xs'>
          <Col xs={12}>
            <TextInput
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              placeholder='Email'
            />
          </Col>
        </Row>
        <Row style={{ marginBottom: Spacing.XSmall }} center='xs'>
          <Col xs={6}>
            <TextInput
              type='password'
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              placeholder='Senha'
            />
          </Col>
          <Col xs={6}>
            <TextInput
              type='password'
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              placeholder='Confirme a senha'
            />
          </Col>
        </Row>
        <Row style={{ marginBottom: Spacing.XSmall }} center='xs'>
          <RouterLink to='discover'>
            <Button theme='primary' bold>
              Criar conta
            </Button>
          </RouterLink>
        </Row>
      </Frame>
    </LoginWrapper>
  );
};
