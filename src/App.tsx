import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { koKR } from '@mui/material/locale';
import 'common.css';

import ModalContainer from '@component/ModalContainer';
import AdminTable from '@component/Table';

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
    <ThemeProvider theme={theme}>
      <ModalContainer />
      <CssBaseline />
      <AdminTable title="전체 충전소" />
    </ThemeProvider>
  );
}

export default App;
