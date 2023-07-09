import React from 'react';

/* LOGO */
import LogoSvg from './assets/logo';
import BigLogoSvg from './assets/big-logo';
import LogoMobile from './assets/mobile';

/* UI */
import { css, styled } from 'styled-components';

/* TYPES */
import { LogoProps, LogoType } from './types';

const UiLogoWrapper = styled.div<{ viewtype: LogoType }>`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
  }

  ${({ viewtype }) =>
    viewtype === 'default' &&
    css`
      width: 150px;
      height: 34px;
    `}

  ${({ viewtype }) =>
    viewtype === 'big' &&
    css`
      width: 215px;
      height: 135px;
    `}

  ${({ viewtype }) =>
    viewtype === 'mobile' &&
    css`
      width: 35px;
      height: 35px;

      svg {
        width: 35px;
        height: 35px;
      }
    `}
`;

const LogoByType = {
  default: LogoSvg,
  big: BigLogoSvg,
  mobile: LogoMobile,
};

const Logo = ({ viewtype = 'default' }: LogoProps) => {
  const LogoSvg = LogoByType[viewtype];

  return (
    <div>
      <UiLogoWrapper viewtype={viewtype}>
        <LogoSvg />
      </UiLogoWrapper>
    </div>
  );
};

export default Logo;
