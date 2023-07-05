import React from 'react';
import UiButton from './ui';
import GoogleIcon from './assets/google';
import FacebookIcon from './assets/facebook';
import LikeIcon from './assets/like';
import LoginIcon from './assets/login';
import LogoutIcon from './assets/logout';
import { ButtonProps } from './types';

const ButtonIcons = {
  facebook: FacebookIcon,
  google: GoogleIcon,
  like: LikeIcon,
  login: LoginIcon,
  logout: LogoutIcon,
};

export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  viewType,
  onClick,
  ...props
}: ButtonProps) => {
  const Icon = viewType !== 'default' ? ButtonIcons[viewType] : null;

  return (
    <UiButton
      type="button"
      backgroundColor={backgroundColor}
      primary={primary}
      size={size}
      viewType={viewType}
      onClick={onClick}
      {...props}
    >
      {Icon && <Icon />}

      <span>{label}</span>
    </UiButton>
  );
};
