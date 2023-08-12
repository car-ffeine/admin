import styled from '@emotion/styled';

import { ReactComponent as CarFfeineLogo } from '@asset/car-ffeine-logo.svg';
import { ReactComponent as GoogleLogo } from '@asset/google-logo.svg';

function Login() {
  return (
    <Container>
      <Title>간편 로그인</Title>
      <CarFfeineContainer>
        <CarFfeineLogo width={24} height={24} />
        <span>카페인 관리자 페이지</span>
      </CarFfeineContainer>
      <GoogleLogin>
        <GoogleLogo width={24} height={24} />
        <p>구글 로그인</p>
      </GoogleLogin>
    </Container>
  );
}

const Container = styled.div`
  /* display: flex;
  flex-direction: column;
  justify-content: center; */
  margin: 0 auto 36px;
  text-align: center;
  font-size: 17px;
`;

const Title = styled.h2`
  margin: 0 0 32px;
  text-align: center;
  letter-spacing: -0.2px;
`;

const CarFfeineContainer = styled.div`
  font-size: 14px;
  margin-bottom: 28px;

  & > svg {
    width: 100%;
  }
`;

const GoogleLogin = styled.button`
  display: flex;
  align-items: center;
  column-gap: 66px;

  width: 292px;
  margin: 0 auto;
  padding: 0 18px;
  background: transparent;

  font-size: 15px;
  font-weight: 600;
  color: #333;

  border: 0;
  border-radius: 24px;
  box-shadow: 0.8px 1px 5px 2px #ededed;
  cursor: pointer;

  &:hover {
    box-shadow: 0.8px 1px 5px 2px #e6e6e6;
  }

  & > p {
    margin: 9px 0 12px;
  }
`;

export default Login;
