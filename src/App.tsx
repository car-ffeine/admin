import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { koKR } from '@mui/material/locale';
import 'common.css';

import ModalContainer from '@component/ModalContainer';
import NavigationContainer from '@component/Navigation';
import AdminTable from '@component/Table';

import { MENU_LIST } from '@constant';

const theme = createTheme(
  {
    typography: {
      fontFamily: 'Noto Sans KR, sans-serif',
    },
  },
  koKR
);

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavigationContainer title="ADMIN" menus={MENU_LIST} />
        <AdminTable title="전체 충전소" />
        <ModalContainer />
      </ThemeProvider>
    </>
  );
}

export default App;
