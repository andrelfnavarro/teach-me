import React, { createContext, useState } from 'react';

export const UserContext = createContext<UserContextProviderProps | null>(null);

interface UserProviderProps {
  children: React.ReactNode;
}

export interface UserContextProviderProps {
  name: string;
  email: string;
  university: string;
  degree: string;
  avatar: string;
  setName: (e: string) => void;
  setEmail: (e: string) => void;
  setUniversity: (e: string) => void;
  setDegree: (e: string) => void;
  setAvatar: (e: string) => void;
  logout: () => void;
}

export const UserProvider: React.FC<UserProviderProps> = (props: UserProviderProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [university, setUniversity] = useState('');
  const [degree, setDegree] = useState('');
  const [avatar, setAvatar] = useState('');

  const logout = () => {
    setName('');
    setEmail('');
    setUniversity('');
    setDegree('');
    setAvatar('');
  };

  return (
    <UserContext.Provider value={{ name, email, university, degree, avatar, setName, setEmail, setUniversity, setDegree, setAvatar, logout }}>
      {props.children}
    </UserContext.Provider>
  );
};
