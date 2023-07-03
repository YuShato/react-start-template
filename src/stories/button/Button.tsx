import React from 'react';
import UiButton, { UiButtonProps } from './ui';
import GoogleIcon from './assets/google';
import FacebookIcon from './assets/facebook';
import LikeIcon from './assets/like';
import LoginIcon from './assets/login';
import LogoutIcon from './assets/logout';

interface ButtonProps extends UiButtonProps {
  primary?: boolean;
  size?: 'small' | 'medium' | 'large';
  label: string;
  viewType?: 'default' | 'facebook' | 'google' | 'like' | 'login' | 'logout';
  onClick?: () => void;
}

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
