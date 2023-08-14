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
  margin: 12px 0;
`;

export default ButtonContainer;
