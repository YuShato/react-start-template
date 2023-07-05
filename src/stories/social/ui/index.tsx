import { ButtonHTMLAttributes } from 'react';
import { styled } from 'styled-components';

export interface UiButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  viewtype: 'youtube' | 'facebook' | 'instagram' | 'linkedin' | 'twitter';
}

const UiSocialButton = styled.button<UiButtonProps>`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  width: 30px;
  height: 30px;
  background-color: #fff;
  border: 1px solid rgba(70, 163, 88, 0.2);
  transition: all 0.3s ease;

  svg {
    transition: all 0.3s ease;
  }

  &:hover,
  &:focus {
    color: #46a358;
    border-color: #46a358;

    svg path {
      fill: #46a358;
      fill-opacity: 1;
    }
  }

  &:active {
    opacity: 0.7;
  }
`;

export default UiSocialButton;
