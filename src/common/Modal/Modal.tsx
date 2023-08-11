import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

import type { MouseEvent } from 'react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  children: JSX.Element;
}

const Modal = ({ isOpen, onClose, children }: Props) => {
  const handlePreventModalClose = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  if (!isOpen) {
    return <></>;
  }

  return (
    <ModalBackdrop className="modal-open" onClick={onClose}>
      <ModalContent role="dialog" aria-live="assertive" onClick={handlePreventModalClose}>
        {onClose ? (
          <IconButton
            aria-label="닫기 버튼"
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[600],
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
        {children}
      </ModalContent>
    </ModalBackdrop>
  );
};

export default Modal;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const ModalBackdrop = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;

  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.38);

  animation: ${fadeIn} 0.2s ease-in-out;
`;

const ModalContent = styled.div`
  position: relative;

  width: 100%;
  max-width: 800px;
  max-height: calc(100% - 56px);
  margin: 28px;
  padding: 36px 28px 20px;
  background: #fff;

  border-radius: 10px;
  overflow-y: auto;

  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
