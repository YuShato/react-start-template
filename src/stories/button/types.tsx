import { UiButtonProps } from './ui';

export interface ButtonProps extends UiButtonProps {
  label: string;
  onClick?: () => void;
  primary?: boolean;
  size?: 'small' | 'medium' | 'large';
  viewtype?: 'default' | 'facebook' | 'google' | 'like' | 'login' | 'logout' | 'cart';
}
