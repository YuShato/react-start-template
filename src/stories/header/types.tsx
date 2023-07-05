import { UiNavListLinkProps } from './ui';

export type User = {
  name: string;
};

export interface HeaderProps {
  user?: User;
  onLogin: () => void;
  onLogout: () => void;
  onCreateAccount: () => void;
}

export interface NavLinkItemProps extends UiNavListLinkProps {
  path: {
    id: number;
    name: string;
    pathLink: string;
    icon?: () => React.JSX.Element;
  };
  isActive?: boolean;
}
