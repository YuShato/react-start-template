import React from 'react';

import UiHeader from './ui';
import Logo from '../logo/Logo';
import NavList from './NavList';
import { Button } from '../button/Button';

type User = {
  name: string;
};

interface HeaderProps {
  user?: User;
  onLogin: () => void;
  onLogout: () => void;
  onCreateAccount: () => void;
}

export const Header = ({ user, onLogin, onLogout, onCreateAccount }: HeaderProps) => {
  return (
    <UiHeader>
      <UiHeader.Logo href="/">
        <Logo viewType="default" />
      </UiHeader.Logo>

      <NavList />

      {user ? (
        <>
          <Button label="Logout" viewType="logout" onClick={onLogout} />
        </>
      ) : (
        <Button label="Login" viewType="login" onClick={onLogin} />
      )}
    </UiHeader>
  );
};
