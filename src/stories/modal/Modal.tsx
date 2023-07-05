import React from 'react';
import UiModal from './ui';
import CloseIcon from './assets/close';
import { ModalProps } from './types';

const Modal: React.FC<ModalProps> = ({ visible, children }) => {
  if (!visible) {
    return null;
  }

  return (
    <UiModal>
      <UiModal.Window>
        <UiModal.CloseButton>
          <CloseIcon />
        </UiModal.CloseButton>

        {children}
      </UiModal.Window>
    </UiModal>
  );
};

export default Modal;
