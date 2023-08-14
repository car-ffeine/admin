import styled from '@emotion/styled';
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid';
import { PencilSquareIcon } from '@heroicons/react/24/outline';

import { modalActions } from '@store/modalStateStore';

import { stationEditMock } from '@mock';

import Form from '@component/Form';

import type { TableProps } from './AdminTable';

function AdminTableTitle({ title }: TableProps) {
  const { openModal } = modalActions;

  const handleEditTable = () => {
    openModal(<Form element={stationEditMock} />);
  };

  const handleShowDetails = () => {};

  return (
    <TitleContainer>
      <Title tabIndex={0}>{title}</Title>
      <ButtonContainer>
        <Button type="button" aria-label="수정" onClick={handleEditTable}>
          <span>수정</span>
          <PencilSquareIcon width={24} />
        </Button>
        <Button type="button" aria-label="상세보기" onClick={handleShowDetails}>
          <span>상세보기</span>
          <EllipsisVerticalIcon width={24} />
        </Button>
      </ButtonContainer>
    </TitleContainer>
  );
}

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 28px;
  margin: 16px 0 24px;
`;

const Title = styled.h2`
  margin: 0;
  margin-right: 40px;
  font-size: 19px;
  color: #333;
`;

const ButtonContainer = styled.div`
  display: flex;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  column-gap: 8px;
  margin-right: 12px;
  &:last-child {
    margin-right: 0;
  }

  background: transparent;
  border: 1.4px solid #7f7f7f;
  border-radius: 8px;
  padding: 2px 8px;
  cursor: pointer;

  &:hover {
    background: #fafafa;
    border: 1.4px solid #333;
    transform: translateY(-2px);
  }
`;

export default AdminTableTitle;
