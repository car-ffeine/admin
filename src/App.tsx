import {createTheme, CssBaseline, ThemeProvider} from '@mui/material';
import {koKR} from '@mui/material/locale';
import 'common.css';

import ModalContainer from '@component/ModalContainer';
import AdminTable from '@component/Table';
import Navigation from "@component/Navigation";

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
                <CssBaseline/>
                <Navigation title={'카페인 Admin'}/>
                <AdminTable title="전체 충전소"/>
                <ModalContainer/>
            </ThemeProvider>
        </>
    );
}

export default App;
