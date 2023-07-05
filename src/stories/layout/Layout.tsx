import React from 'react';
import UiLayout from './ui';
import { Header } from '../header/Header';
import { LayoutProps } from './types';

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const onLogin = () => {
    console.log('Login');
  };

  const onLogout = () => {
    console.log('Logout');
  };

  const onCreateAccount = () => {
    console.log('Create account');
  };

  return (
    <UiLayout>
      <UiLayout.Container>
        <Header onCreateAccount={onCreateAccount} onLogin={onLogin} onLogout={onLogout} />
        {children}
      </UiLayout.Container>
    </UiLayout>
  );
};

export default Layout;
