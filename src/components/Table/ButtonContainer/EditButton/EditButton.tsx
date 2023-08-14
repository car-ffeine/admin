import { PencilSquareIcon } from '@heroicons/react/24/outline';

import { modalActions } from '@store/modalStateStore';

import { stationEditMock } from '@mock';

import Form from '@component/Form';

import { Button } from '../ButtonStyle';

function EditButton() {
  const { openModal } = modalActions;

  const handleEditTable = () => {
    openModal(<Form element={stationEditMock} />);
  };

  return (
    <Button type="button" aria-label="수정" onClick={handleEditTable}>
      <PencilSquareIcon width={24} />
      <span>수정</span>
    </Button>
  );
}

export default EditButton;
