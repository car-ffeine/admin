import { useExternalState } from '@util/external-state';

import { modalStateStore } from '@store/modalStateStore';

import { stationEditMock } from '@mock';

import Modal from '@common/Modal';

import Form from './Form';

function ModalContainer() {
  const [isModalOpen, setIsModalOpen] = useExternalState(modalStateStore);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
      <Form element={stationEditMock} />
    </Modal>
  );
}

export default ModalContainer;
