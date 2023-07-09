import { css, styled } from 'styled-components';
import { LinkHTMLAttributes } from 'react';
import { MOBILE_MAP, MOBILE_MAX, TABLET_MAX } from '../../../constants/media-query';
import UiButton from '../../button/ui';

export interface UiNavListLinkProps extends LinkHTMLAttributes<HTMLAnchorElement> {
  active?: boolean;
}

const Header = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  border-bottom: 0.3px solid rgba(70, 163, 88, 0.4);
  font-family: Arial, Helvetica, sans-serif;
  padding-top: 33px;
  margin-inline: auto;
  padding-bottom: 10px;
  position: sticky;
  top: 0;
  z-index: 1;
  left: 0;

  @media (max-width: 1200px) {
    max-width: 100%;
  }

  @media ${TABLET_MAX} {
    align-items: center;
  }

  @media ${MOBILE_MAP} {
    display: grid;
    grid-template-rows: 1fr 1fr;
    margin-top: 16px;
  }

  ${UiButton} {
    @media ${MOBILE_MAP} {
      grid-row: 1;
      justify-self: flex-end;
    }
  }

  @media ${MOBILE_MAX} {
    display: flex;
    padding-bottom: 10px;
  }

  @media (max-width: 400px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-content: center;
    row-gap: 10px;
    flex-wrap: wrap;
  }
`;

const LogoLink = styled.a`
  &:hover,
  &:focus {
    svg path {
      fill: #72a57c;
    }
  }

  @media ${MOBILE_MAP} {
    grid-row: 1;
  }
`;

const NavList = styled.nav`
  display: flex;
  column-gap: 50px;
  color: #3d3d3d;
  font-size: 16px;

  @media ${TABLET_MAX} {
    font-size: 14px;
    column-gap: 30px;
    align-self: flex-end;
  }

  @media ${MOBILE_MAP} {
    order: 2;
    grid-row: 2;
    grid-column: 1/3;
    align-self: flex-end;
    justify-self: center;
    margin-top: 10px;
    column-gap: 40px;
    display: flex;
    justify-content: space-evenly;
  }

  @media ${MOBILE_MAX} {
    column-gap: 50px;
    order: 0;
  }
`;

const NavListLink = styled.a<UiNavListLinkProps>`
  text-decoration: none;
  color: #3d3d3d;
  text-decoration: none;
  padding-bottom: 3px;
  border-bottom: 3px solid transparent;
  text-transform: uppercase;

  &:hover,
  &:focus {
    color: #46a358;
    font-weight: 700;
  }

  ${({ active }) =>
    active &&
    css`
      color: #3d3d3d;
      font-weight: 700;
      border-bottom: 3px solid #46a358;
    `}

  svg {
    display: none;

    @media ${MOBILE_MAX} {
      display: block;
    }
  }

  @media ${MOBILE_MAX} {
    border: none;

    span {
      display: none;
    }
  }
`;

const HeaderDesktopLogo = styled.div`
  @media ${MOBILE_MAX} {
    display: none;
  }
`;

const HeaderMobileLogo = styled.div`
  display: none;

  @media ${MOBILE_MAX} {
    display: flex;
  }
`;

const UiHeader = Object.assign(Header, {
  Logo: LogoLink,
  Nav: NavList,
  NavItem: NavListLink,
  DesktopLogo: HeaderDesktopLogo,
  MobileLogo: HeaderMobileLogo,
});

export default UiHeader;
