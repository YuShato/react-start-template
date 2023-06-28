import React from 'react';
import UiHeader, { UiNavListLinkProps } from './ui';
import { PATHS } from './utils/constants/paths';

interface NavLinkItemProps extends UiNavListLinkProps {
  path: {
    id: number;
    name: string;
    pathLink: string;
  };
  isActive?: boolean;
}

const NavLinkItem = ({ path, isActive = false }: NavLinkItemProps) => {
  const { name, pathLink } = path;

  return (
    <UiHeader.NavItem href={pathLink} isActive={isActive}>
      {name}
    </UiHeader.NavItem>
  );
};

const NavList = () => {
  return (
    <UiHeader.Nav>
      {PATHS.map((path) => (
        <NavLinkItem key={path.id} path={path} isActive={path.id === 0} />
      ))}
    </UiHeader.Nav>
  );
};

export default NavList;
