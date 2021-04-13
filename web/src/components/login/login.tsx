import React from 'react';
import { Col, Row } from 'react-styled-flexboxgrid';
import { Frame } from 'src/atomic/atm/frame/frame';
import { TextInput } from 'src/atomic/atm/text-input/text-input';
import { Spacing } from 'src/constants';
import { H3, Link } from 'src/typography';
import { LoginWrapper } from './login-styles';
import { ConditionalLink } from '../conditional-link/conditional-link';
export const Login: React.FC = () => {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <LoginWrapper>
      <Row center='xs'>
        <Col xs={10} md={12}>
          <Frame>
            <Row>
              <Col xs={12}>
                <H3>Faça login:</H3>
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
              <Col xs={12}>
                <TextInput
                  type='password'
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                  placeholder='Senha'
                />
              </Col>
            </Row>
            <Row style={{ marginBottom: Spacing.XSmall }} center='xs'>
              <ConditionalLink 
                placeholder="Entrar"
                userName={email}
                password={password}
              >
              </ConditionalLink>
            </Row>
            <Row center='xs'>
              <Link to='/'>Esqueceu sua senha?</Link>
            </Row>
          </Frame>
        </Col>
      </Row>
    </LoginWrapper>
  );
};
