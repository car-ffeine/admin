import type { ReactNode } from 'react';

import { store } from '@util/external-state';

export const modalOpenStore = store<boolean>(false);

export const modalContentStore = store<ReactNode>(null);

const DEFAULT_MODAL_SIZE = 800;
export const modalSizeStore = store<number>(DEFAULT_MODAL_SIZE);

export const modalActions = {
  openModal: (component: ReactNode, size: number = DEFAULT_MODAL_SIZE) => {
    modalOpenStore.setState(true);
    modalContentStore.setState(component);
    modalSizeStore.setState(size);
  },

  closeModal: () => {
    modalOpenStore.setState(false);
    modalContentStore.setState(null);
  },
};
