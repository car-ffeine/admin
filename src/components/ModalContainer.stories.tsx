import Button from '@mui/material/Button';
import type { Meta } from '@storybook/react';

import { modalActions } from '@store/modalStateStore';

import ModalContainer from './ModalContainer';

const meta = {
  component: ModalContainer,
} satisfies Meta<typeof ModalContainer>;

export default meta;

export const Default = () => {
  const { openModal } = modalActions;

  const handleOpenModal = () => {
    openModal(<ModalContent />);
  };

  return (
    <>
      <Button onClick={handleOpenModal}>모달 열기</Button>
      <ModalContainer />
    </>
  );
};

function ModalContent() {
  return <p>모달</p>;
}
