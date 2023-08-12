import { useExternalValue } from '@util/external-state';

import {
  modalActions,
  modalContentStore,
  modalOpenStore,
  modalSizeStore,
} from '@store/modalStateStore';

import Modal from '@common/Modal';

function ModalContainer() {
  const isModalOpen = useExternalValue(modalOpenStore);
  const content = useExternalValue(modalContentStore);
  const size = useExternalValue(modalSizeStore);

  const { closeModal } = modalActions;

  return (
    <Modal isOpen={isModalOpen} onClose={closeModal} size={size}>
      <>{content}</>
    </Modal>
  );
}

export default ModalContainer;
