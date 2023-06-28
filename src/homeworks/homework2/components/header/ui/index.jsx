import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-top: 26px;

  color: #3d3d3d;
  font-size: 16px;
`;

const HeaderNav = styled.nav`
  display: flex;
  align-items: center;
  column-gap: 50px;

  @media (max-width: 1000px) {
    column-gap: 20px;
  }
`;

const HeaderNavItem = styled.li`
  padding-bottom: 37px;
  border-bottom: 3px solid transparent;

  &--active {
    border-bottom: 3px solid #46a358;
    font-weight: 700;
    color: #46a358;
  }
`;

const UiHeader = Object.assign(Header, {
  Nav: Object.assign(HeaderNav, {
    Item: HeaderNavItem,
  }),
});

export default UiHeader;
