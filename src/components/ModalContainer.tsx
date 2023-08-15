import { useExternalValue } from '@util/external-state';

import {
  modalActions,
  modalContentStore,
  modalOpenStore,
} from '@store/modalStateStore';

import Modal from '@common/Modal';

function ModalContainer() {
  const isModalOpen = useExternalValue(modalOpenStore);
  const content = useExternalValue(modalContentStore);

  const { closeModal } = modalActions;

  return (
    <Modal isOpen={isModalOpen} onClose={closeModal}>
      <>{content}</>
    </Modal>
  );
}

export default ModalContainer;
