import { styled } from 'styled-components';
import { BaseHTMLAttributes } from 'react';
import { MOBILE_MAX, TABLET_MAX } from '../../../constants/media-query';

export interface UiModalProps extends BaseHTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  visible: boolean;
}

const Mask = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(10, 13, 18, 0.25);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Window = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: auto;
  max-width: 578px;
  min-width: 200px;
  max-height: 830px;
  min-height: 200px;
  background-color: #fff;
  z-index: 10000;
  border-radius: 4px;
  padding: 20px;
  margin-inline: auto;
  border-bottom: 10px solid #46a358;
  color: #727272;
  font-size: 15px;
  font-weight: 700;
  line-height: 16px;

  @media ${TABLET_MAX} {
    max-width: calc(100% - 100px);
  }

  @media ${MOBILE_MAX} {
    max-width: calc(100% - 50px);
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;

  svg path {
    transition: fill 0.3s ease;
  }
  @media (hover: hover) {
    &:hover {
      svg path {
        fill: #a3464e;
      }
    }
  }
`;

const UiModal = Object.assign(Mask, { Window, CloseButton });

export default UiModal;
