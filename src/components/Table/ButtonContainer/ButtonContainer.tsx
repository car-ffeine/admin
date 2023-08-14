import styled from '@emotion/styled';

import { modalActions } from '@store/modalStateStore';

import { stationEditMock } from '@mock';

import Form from '@component/Form';

import DetailsButton from './DetailsButton';
import EditButton from './EditButton';

interface ButtonContainerProps {
  stationId: string;
}

function ButtonContainer({ stationId }: ButtonContainerProps) {
  const { openModal } = modalActions;

  const handleEditTable = () => {
    console.log(stationId);
    openModal(<Form element={stationEditMock} />);
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
