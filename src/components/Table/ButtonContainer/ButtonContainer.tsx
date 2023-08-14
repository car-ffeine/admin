import styled from '@emotion/styled';

import { modalActions } from '@store/modalStateStore';
import { findSelectedStationSummary } from '@store/stationSummaryListStore';
import { toastActions } from '@store/toastStore';

import Form from '@component/Form';

import DetailsButton from './DetailsButton';
import EditButton from './EditButton';

interface ButtonContainerProps {
  stationId: string;
}

function ButtonContainer({ stationId }: ButtonContainerProps) {
  const { openModal } = modalActions;
  const { showToast } = toastActions;
  const stationSummary = findSelectedStationSummary(stationId);

  const handleEditTable = () => {
    if (stationSummary === undefined) {
      showToast('해당 충전소 정보를 찾을 수 없습니다', 'error');

      return;
    }

    openModal(<Form element={stationSummary} />);
  };

  return (
    <Container>
      <EditButton handleEditTable={handleEditTable} />
      <DetailsButton />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  margin: 12px 0;
`;

export default ButtonContainer;
