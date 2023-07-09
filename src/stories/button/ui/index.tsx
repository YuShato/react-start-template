import { ButtonHTMLAttributes } from 'react';
import { MOBILE_MAX } from '../../../constants/media-query';

import { css, styled } from 'styled-components';

export interface UiButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  backgroundColor?: string;
  primary?: boolean;
  size?: 'small' | 'medium' | 'large';
  viewtype?: 'default' | 'facebook' | 'google' | 'like' | 'login' | 'logout' | 'cart';
}

const UiButton = styled.button<UiButtonProps>`
  cursor: pointer;
  display: flex;
  column-gap: 10px;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  background: ${({ backgroundColor }) => backgroundColor || '#46a358'};
  color: #fff;
  font-size: 15px;
  font-weight: 700;
  line-height: 16px;
  padding: 12px 17px;
  border: none;
  outline: none;
  width: fit-content;
  max-width: 300px;
  letter-spacing: 0.15px;
  border: 1px solid transparent;
  transition: all 0.3s;

  @media (hover: hover) {
    &:hover {
      opacity: 0.6;
    }
  }

  ${({ primary }) =>
    primary &&
    css`
      background: #fff;
      color: #46a358;
      border: 1px solid #46a358;
    `}

  ${({ size }) =>
    size === 'small' &&
    css`
      padding: 6px 9px;
      font-size: 14px;
    `}

  ${({ size }) =>
    size === 'medium' &&
    css`
      padding: 10px 32px;
    `}

  ${({ size }) =>
    size === 'large' &&
    css`
      width: 100%;
      padding: 10px 32px;
      max-width: 300px;
    `}

  ${({ viewtype }) =>
    viewtype === 'facebook' &&
    css`
      display: flex;
      column-gap: 10px;
      border-radius: 10px;
      border-radius: 5px;
      border: 1px solid #eaeaea;
      background-color: #fff;

      color: #727272;
      text-align: center;
      font-size: 13px;
      line-height: 16px;
      text-align: center;
      font-weight: 500;
      width: 100%;

      svg {
        width: 20px;
        height: 20px;
      }

      @media ${MOBILE_MAX} {
        background: #3b5999;
        color: #fff;
        border-color: transparent;
      }
    `}

  ${({ viewtype }) =>
    (viewtype === 'like' || viewtype === 'cart') &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px;
      border-radius: 6px;
      border: 1px solid #46a358;
      background-color: #fff;
      column-gap: 0;

      svg {
        width: 20px;
        height: 20px;
      }
    `}

    ${({ primary, viewtype }) =>
    !primary &&
    viewtype === 'like' &&
    css`
      color: #fff;
      background: #46a358;
      border: 1px solid #46a358;

      svg path {
        fill: #fff;
      }
    `}

  ${({ viewtype }) =>
    viewtype === 'google' &&
    css`
      display: flex;
      column-gap: 10px;
      border-radius: 10px;
      border: 1px solid #eaeaea;
      background-color: #fff;
      text-align: center;
      font-weight: 500;
      width: 100%;
      color: #727272;
      text-align: center;
      font-size: 13px;
      line-height: 16px;
      text-align: center;
      font-weight: 500;
      width: 100%;

      svg {
        width: 20px;
        height: 20px;
      }

      @media ${MOBILE_MAX} {
        background: #4086f4;
        color: #fff;
        border-color: transparent;
      }
    `}

  ${({ viewtype }) =>
    viewtype === 'logout' &&
    css`
      background-color: #fff;
      color: #46a358;
      font-size: 15px;
      font-weight: 700;
      line-height: 15px;
      border: 1px solid transparent;

      @media (hover: hover) {
        &:hover {
          opacity: 0.8;
          border: 1px solid #46a358;
        }
      }

      @media ${MOBILE_MAX} {
        width: 40px;
        height: 40px;

        span {
          display: none;
        }

        svg {
          width: 30px;
          height: 30px;
        }
      }
    `}

  ${({ viewtype }) =>
    viewtype === 'login' &&
    css`
      @media ${MOBILE_MAX} {
        width: 40px;
        height: 40px;

        span {
          display: none;
        }

        svg {
          width: 30px;
          height: 30px;
        }
      }
    `}
`;

export default UiButton;
