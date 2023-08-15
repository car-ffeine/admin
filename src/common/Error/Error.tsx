import styled from '@emotion/styled';

import { useNavigate } from 'react-router-dom';

import { ReactComponent as ErrorImage } from '@asset/404-error.svg';

function Error() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <Container>
      <ErrorImage width={400} />
      <Button type="button" onClick={handleGoHome}>
        홈으로 가기
      </Button>
    </Container>
  );
}

const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin-top: -80px;
`;

const Button = styled.button`
  margin-top: 16px;
  padding: 12px 44px;
  font-size: 28px;
  font-weight: 600;
  text-align: center;
  background: transparent;
  border: 1.6px solid #333;
  border-radius: 20px;
  cursor: pointer;

  &:hover {
    background: #f5f5f5;
    transform: translateY(2px);
  }
`;

export default Error;
