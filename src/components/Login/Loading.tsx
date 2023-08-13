import styled from '@emotion/styled';

import { ReactComponent as CarLoading } from '@asset/car-loading.svg';

function Loading() {
  return (
    <>
      <LoginMessage>
        로그인 중입니다<span>잠시만 기다려 주세요...</span>
      </LoginMessage>
      <LoadingSvgContainer>
        <CarLoading />
      </LoadingSvgContainer>
    </>
  );
}

const LoginMessage = styled.h2`
  width: fit-content;
  margin: 280px auto 0;
  text-align: center;

  & > span {
    display: block;
    margin-top: 20px;
    font-size: 15px;
    font-weight: normal;
  }
`;

const LoadingSvgContainer = styled.div`
  max-width: 100px;
  margin: 0 auto;
`;

export default Loading;
