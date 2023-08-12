import Button from '@mui/material/Button';
import type { Meta } from '@storybook/react';

import { useSetExternalState } from '@util/external-state';

import { modalStateStore } from '@store/modalStateStore';

import ModalContainer from './ModalContainer';

const meta = {
  component: ModalContainer,
} satisfies Meta<typeof ModalContainer>;

export default meta;

export const Default = () => {
  const setIsModalOpen = useSetExternalState(modalStateStore);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <Button onClick={handleOpenModal}>모달 열기</Button>
      <ModalContainer />
    </>
  );
};
