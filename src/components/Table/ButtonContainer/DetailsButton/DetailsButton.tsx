import { DocumentTextIcon } from '@heroicons/react/24/outline';

import { modalActions } from '@store/modalStateStore';

import StationDetails from '@component/StationDetails';

import { Button } from '../ButtonStyle';

function DetailsButton() {
  const { openModal } = modalActions;

  const handleShowDetails = () => {
    openModal(<StationDetails />);
  };

  return (
    <Button type="button" aria-label="상세보기" onClick={handleShowDetails}>
      <DocumentTextIcon width={24} />
      <span>상세</span>
    </Button>
  );
}

export default DetailsButton;
