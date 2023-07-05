import React from 'react';

import UiHeader from './ui';
import Logo from '../logo/Logo';
import NavList from './NavList';
import { Button } from '../button/Button';
import { HeaderProps } from './types';

export const Header = ({ user, onLogin, onLogout }: HeaderProps) => {
  return (
    <UiHeader>
      <UiHeader.Logo href="/">
        <UiHeader.DesktopLogo>
          <Logo viewType="default" />
        </UiHeader.DesktopLogo>

        <UiHeader.MobileLogo>
          <Logo viewType="mobile" />
        </UiHeader.MobileLogo>
      </UiHeader.Logo>

      <NavList />

      {user ? (
        <>
          <Button label="Logout" viewType="logout" size="small" onClick={onLogout} />
        </>
      ) : (
        <Button label="Login" viewType="login" size="small" onClick={onLogin} />
      )}
    </UiHeader>
  );
};
