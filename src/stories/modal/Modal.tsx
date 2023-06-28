import React, { ReactNode } from 'react';
import UiModal, { UiModalProps } from './ui';
import CloseIcon from './assets/close';

interface ModalProps extends UiModalProps {
  visible: boolean;
  children: ReactNode;
}

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
