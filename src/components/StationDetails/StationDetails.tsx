import styled from '@emotion/styled';

function StationDetails() {
  return (
    <Container>
      <Title>상세 정보</Title>
    </Container>
  );
}

const Container = styled.div`
  max-width: 800px;
  margin: 8px auto 48px;
  text-align: center;
  font-size: 15px;
`;

const Title = styled.h3`
  text-align: center;
  margin-bottom: 40px;
`;

export default StationDetails;
