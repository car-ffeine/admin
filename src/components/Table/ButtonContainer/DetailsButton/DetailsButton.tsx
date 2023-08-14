import { EllipsisVerticalIcon } from '@heroicons/react/24/solid';

import { modalActions } from '@store/modalStateStore';

import { Button } from '../ButtonStyle';

function DetailsButton() {
  const { openModal } = modalActions;

  const handleShowDetails = () => {
    // TODO: 상세보기 컴포넌트 넣기
    openModal('');
  };

  return (
    <Button type="button" aria-label="상세보기" onClick={handleShowDetails}>
      <span>상세보기</span>
      <EllipsisVerticalIcon width={24} />
    </Button>
  );
}

export default DetailsButton;
