import React from 'react';

/* LOGO */
import LogoSvg from './assets/logo';
import BigLogoSvg from './assets/big-logo';
import LogoMobile from './assets/mobile';

/* UI */
import { css, styled } from 'styled-components';

/* TYPES */
import { LogoProps, LogoType } from './types';

const UiLogoWrapper = styled.div<{ viewType: LogoType }>`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
  }

  ${({ viewType }) =>
    viewType === 'default' &&
    css`
      width: 150px;
      height: 34px;
    `}

  ${({ viewType }) =>
    viewType === 'big' &&
    css`
      width: 215px;
      height: 135px;
    `}

  ${({ viewType }) =>
    viewType === 'mobile' &&
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

const Logo = ({ viewType = 'default' }: LogoProps) => {
  const LogoSvg = LogoByType[viewType];

  return (
    <div>
      <UiLogoWrapper viewType={viewType}>
        <LogoSvg />
      </UiLogoWrapper>
    </div>
  );
};

export default Logo;
