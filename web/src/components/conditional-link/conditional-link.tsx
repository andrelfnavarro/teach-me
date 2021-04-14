import React, { useContext } from 'react';
import { Button } from 'src/atomic/atm/button/button';
import { Link as RouterLink } from 'react-router-dom';
import { UserContext } from 'src/userContext';


interface ConditionalLinkProps {
  placeholder: string,
  userName: string,
  password: string
}

export const ConditionalLink: React.FC<ConditionalLinkProps> = (props: ConditionalLinkProps) => {
  const { placeholder, userName, password } = props;
  const user = useContext(UserContext);
  
  
  if(userName === 'rafael.rahal@usp.br' && password === 'LabSoft2') {
    return (
      <RouterLink 
        to='/discover' 
      >
        <Button
          onClick={() => {
            user?.setName('Rafael Rahal');
            user?.setEmail('rafael.rahal@usp.br');
            user?.setUniversity('POLI USP');
            user?.setDegree('Engenharia da Computação');
            user?.setAvatar('avatar5');
          }}
          theme='primary'
          bold
        >
          {placeholder}
        </Button>
      </RouterLink>
    );
  }
  
  return (
    <RouterLink 
      to='/login'
    >
      <Button
        theme='primary'
        bold
      >
        {placeholder}
      </Button>
    </RouterLink>
  );
  
};