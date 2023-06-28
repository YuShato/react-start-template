import React from 'react';

/* LOGO */
import LogoSvg from './assets/logo';
import BigLogoSvg from './assets/big-logo';

/* UI */
import { css, styled } from 'styled-components';

/* TYPES */
import { LogoProps, LogoType } from './types';

const UiLogoWrapper = styled.div<{ viewType: LogoType }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 34px;

  svg {
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
  }

  ${({ viewType }) =>
    viewType === 'big' &&
    css`
      width: 215px;
      height: 135px;
    `}
`;

const Logo = ({ viewType = 'default' }: LogoProps) => {
  return (
    <div>
      <UiLogoWrapper viewType={viewType}>{viewType === 'big' ? <BigLogoSvg /> : <LogoSvg />}</UiLogoWrapper>
    </div>
  );
};

export default Logo;
