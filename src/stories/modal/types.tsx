import { ReactNode } from 'react';
import { UiModalProps } from './ui';

export interface ModalProps extends UiModalProps {
  children: ReactNode;
  visible: boolean;
}
