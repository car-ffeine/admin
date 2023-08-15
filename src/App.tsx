import styled from '@emotion/styled';
import { CssBaseline } from '@mui/material';
import { ErrorBoundary } from '@suspensive/react';
import 'common.css';

import { Suspense } from 'react';

import { memberTokenStore } from '@store/memberTokenStore';

import Error from '@common/Error';
import Loading from '@common/Loading';
import ToastContainer from '@common/Toast/ToastContainer';

import LoginModalContent from '@component/Login';
import ModalContainer from '@component/ModalContainer';
import NavigationContainer from '@component/Navigation';
import AdminTable from '@component/Table';

import { MENU_LIST } from '@constant';

function App() {
  const token = memberTokenStore.getState();

  if (token === '') {
    return (
      <PageBeforeLogin>
        <ToastContainer />
        <LoginModalContent />
      </PageBeforeLogin>
    );
  }

  return (
    <ErrorBoundary fallback={<Error />}>
      <Suspense fallback={<Loading />}>
        <ToastContainer />
        <ModalContainer />
        <CssBaseline />
        <NavigationContainer title="ADMIN" menus={MENU_LIST} />
        <AdminTable title="전체 충전소" />
      </Suspense>
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
