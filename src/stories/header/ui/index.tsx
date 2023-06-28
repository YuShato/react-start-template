import { css, styled } from 'styled-components';
import { LinkHTMLAttributes } from 'react';

export interface UiNavListLinkProps extends LinkHTMLAttributes<HTMLAnchorElement> {
  isActive?: boolean;
}

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  border-bottom: 1px solid rgba(70, 163, 88, 0.5);
  font-family: Arial, Helvetica, sans-serif;
  margin-top: 33px;
  margin-inline: auto;
`;

const LogoLink = styled.a`
  &:hover,
  &:focus {
    svg path {
      fill: #72a57c;
    }
  }
`;

const NavList = styled.nav`
  display: flex;
  column-gap: 50px;
  color: #3d3d3d;
  font-size: 16px;
`;

const NavListLink = styled.a<UiNavListLinkProps>`
  text-decoration: none;
  color: #3d3d3d;
  text-decoration: none;
  padding-bottom: 25px;
  border-bottom: 3px solid transparent;
  text-transform: uppercase;

  &:hover,
  &:focus {
    color: #46a358;
    font-weight: 700;
  }

  ${({ isActive }) =>
    isActive &&
    css`
      color: #3d3d3d;
      font-size: 16px;
      font-weight: 700;
      border-bottom: 3px solid #46a358;
    `}
`;

const UiHeader = Object.assign(Header, {
  Logo: LogoLink,
  Nav: NavList,
  NavItem: NavListLink,
});

export default UiHeader;
