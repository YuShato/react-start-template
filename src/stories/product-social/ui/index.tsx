import { LinkHTMLAttributes } from 'react';
import { styled } from 'styled-components';

export interface UiButtonProps extends LinkHTMLAttributes<HTMLLinkElement> {
  viewtype: 'facebook' | 'linkedin' | 'twitter' | 'email';
}
const ProductSocialButton = styled.a<UiButtonProps>`
  width: 18px;

  height: 18px;
  border: none;
  outline: none;
  background-color: transparent;
  text-align: center;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.3s ease color;

  svg {
    max-width: 100%;
    max-height: 100%;
    transition: 0.3s ease all;
  }

  &:hover {
    opacity: 0.8;
  }

  &:active {
    svg path {
      fill: #46a358;
    }
  }
`;

const ProductSocialWrapper = styled.div`
  display: flex;
  column-gap: 15px;
  align-items: center;
`;

const ProductSocialTitle = styled.h4`
  color: #3d3d3d;
  font-size: 15px;
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  margin: 0;
  padding: 0;
`;

const ProductSocialList = styled.ul`
  display: flex;
  column-gap: 20px;
  align-items: center;
  justify-content: start;
  padding: 0;
  margin: 0;
`;

const UiSocial = Object.assign(ProductSocialWrapper, {
  List: ProductSocialList,
  Button: ProductSocialButton,
  Title: ProductSocialTitle,
});

export default UiSocial;
