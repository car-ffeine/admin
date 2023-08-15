import styled from '@emotion/styled';

import { memberTokenStore } from '@store/memberTokenStore';

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
        <LoginModalContent />
      </PageBeforeLogin>
    );
  }

  return (
    <>
      <ModalContainer />
      <NavigationContainer title="ADMIN" menus={MENU_LIST} />
      <AdminTable title="전체 충전소" />
    </>
  );
}

const PageBeforeLogin = styled.main`
  display: flex;
  align-items: center;
  height: 100vh;
  margin-top: -80px;
`;

export default App;
