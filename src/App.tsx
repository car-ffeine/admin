import { CssBaseline } from '@mui/material';
import 'common.css';

import ToastContainer from '@common/Toast/ToastContainer';

import ModalContainer from '@component/ModalContainer';
import NavigationContainer from '@component/Navigation';
import AdminTable from '@component/Table';

import { MENU_LIST } from '@constant';

function App() {
  return (
    <>
      <ToastContainer />
      <ModalContainer />
      <CssBaseline />
      <NavigationContainer title="ADMIN" menus={MENU_LIST} />
      <AdminTable title="전체 충전소" />
    </>
  );
}

export default App;
