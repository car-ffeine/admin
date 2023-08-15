import { DocumentTextIcon } from '@heroicons/react/24/outline';

import { Button } from '../ButtonStyle';

interface Props {
  handleShowDetails: () => void;
}

function DetailsButton({ handleShowDetails }: Props) {
  return (
    <Button type="button" aria-label="상세보기" onClick={handleShowDetails}>
      <DocumentTextIcon width={24} />
      <span>상세</span>
    </Button>
  );
}

export default DetailsButton;
