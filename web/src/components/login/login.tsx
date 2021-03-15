import React, { useContext } from 'react';
import { Col, Row } from 'react-styled-flexboxgrid';
import { Button } from 'src/atomic/atm/button/button';
import { Frame } from 'src/atomic/atm/frame/frame';
import { TextInput } from 'src/atomic/atm/text-input/text-input';
import { Spacing } from 'src/constants';
import { H3, Link } from 'src/typography';
import { LoginWrapper } from './login-styles';
import { Link as RouterLink } from 'react-router-dom';
import { UserContext } from 'src/userContext';
export const Login: React.FC = () => {
  const user = useContext(UserContext);

  const [email, setEmail] = React.useState(null);
  const [password, setPassword] = React.useState(null);

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
              <RouterLink to='discover'>
                <Button
                  onClick={() => {
                    user?.setName('Rafael Rahal');
                    user?.setProfession('Engenharia da Computação');
                  }}
                  theme='primary'
                  bold
                >
                  Entrar
                </Button>
              </RouterLink>
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
