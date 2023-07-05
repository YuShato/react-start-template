import { UiButtonProps } from './ui';

export interface ButtonProps extends UiButtonProps {
  primary?: boolean;
  size?: 'small' | 'medium' | 'large';
  label: string;
  viewtype?: 'default' | 'facebook' | 'google' | 'like' | 'login' | 'logout';
  onClick?: () => void;
}
