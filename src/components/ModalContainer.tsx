import styled from '@emotion/styled';
import Button from '@mui/material/Button';

import { useExternalState } from '@util/external-state';

import { modalStateStore } from '@store/modalStateStore';

import Modal from '@common/Modal';

function ModalContainer() {
  const [isModalOpen, setIsModalOpen] = useExternalState(modalStateStore);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmitForm = () => {
    handleCloseModal();
  };

  return (
    <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
      <>
        <div>form이 들어갈 공간</div>
        <ButtonContainer>
          <Button
            sx={{ marginRight: 1, color: '#6e6e6e' }}
            color="inherit"
            onClick={handleCloseModal}
          >
            취소하기
          </Button>
          <Button onClick={handleSubmitForm}>수정하기</Button>
        </ButtonContainer>
      </>
    </Modal>
  );
}

const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 16px;
  word-break: keep-all;

  &button {
    justify-content: end;
  }
`;

export default ModalContainer;
