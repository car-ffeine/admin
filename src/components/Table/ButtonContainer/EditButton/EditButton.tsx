import { PencilSquareIcon } from '@heroicons/react/24/outline';

import { Button } from '../ButtonStyle';

interface Props {
  handleEditTable: () => void;
}

function EditButton({ handleEditTable }: Props) {
  return (
    <Button type="button" aria-label="수정" onClick={handleEditTable}>
      <PencilSquareIcon width={24} />
      <span>수정</span>
    </Button>
  );
}

export default EditButton;
