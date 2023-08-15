import styled from '@emotion/styled';
import { ErrorBoundary } from '@suspensive/react';

import { memberTokenStore } from '@store/memberTokenStore';

import Error from '@common/Error';

import LoginModalContent from '@component/Login';
import ModalContainer from '@component/ModalContainer';
import NavigationContainer from '@component/Navigation';
import AdminTable from '@component/Table';

import { MENU_LIST } from '@constant';

function App() {
  const token = memberTokenStore.getState();

  if (token === '') {
    return (
      <ErrorBoundary fallback={<Error />}>
        <PageBeforeLogin>
          <LoginModalContent />
        </PageBeforeLogin>
      </ErrorBoundary>
    );
  }

  return (
    <ErrorBoundary fallback={<Error />}>
      <ModalContainer />
      <NavigationContainer title="ADMIN" menus={MENU_LIST} />
      <AdminTable title="전체 충전소" />
    </ErrorBoundary>
  );
}

const PageBeforeLogin = styled.main`
  display: flex;
  align-items: center;
  height: 100vh;
  margin-top: -80px;
`;

export default App;
