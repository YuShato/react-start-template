import React from 'react';
import UiHeader from './ui';
import { PATHS } from './utils/constants/paths';
import { NavLinkItemProps } from './types';

const NavLinkItem = ({ path, active = false }: NavLinkItemProps) => {
  const { name, pathLink, icon: Icon } = path;

  return (
    <UiHeader.NavItem href={pathLink} active={active}>
      <Icon />

      <span>{name}</span>
    </UiHeader.NavItem>
  );
};

const NavList = () => {
  return (
    <UiHeader.Nav>
      {PATHS.map((path) => (
        <NavLinkItem key={path.id} path={path} active={path.id === 0} />
      ))}
    </UiHeader.Nav>
  );
};

export default NavList;
