import React, { createContext, useState } from 'react';

export const UserContext = createContext<UserContextProviderProps | null>(null);

interface UserProviderProps {
  children: React.ReactNode;
}

export interface UserContextProviderProps {
  name: string;
  profession: string;
  setName: (e: string) => void;
  setProfession: (e: string) => void;
  logout: () => void;
}

export const UserProvider: React.FC<UserProviderProps> = (props: UserProviderProps) => {
  const [name, setName] = useState('');
  const [profession, setProfession] = useState('');

  const logout = () => {
    setName('');
    setProfession('');
  };

  return (
    <UserContext.Provider value={{ name, profession, setName, setProfession, logout }}>
      {props.children}
    </UserContext.Provider>
  );
};
