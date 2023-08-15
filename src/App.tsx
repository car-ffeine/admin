import { CssBaseline } from '@mui/material';
import { ErrorBoundary } from '@suspensive/react';
import 'common.css';

import { Suspense } from 'react';

import Error from '@common/Error';
import Loading from '@common/Loading';
import ToastContainer from '@common/Toast/ToastContainer';

import ModalContainer from '@component/ModalContainer';
import NavigationContainer from '@component/Navigation';
import AdminTable from '@component/Table';

import { MENU_LIST } from '@constant';

function App() {
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

export default App;
