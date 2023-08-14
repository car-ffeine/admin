import styled from '@emotion/styled';

import DetailsButton from './DetailsButton';
import EditButton from './EditButton';

function ButtonContainer() {
  return (
    <Container>
      <EditButton />
      <DetailsButton />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
`;

export default ButtonContainer;
