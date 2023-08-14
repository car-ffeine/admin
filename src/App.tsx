import { CssBaseline } from '@mui/material';
import 'common.css';

import { useState } from 'react';

import { memberTokenStore } from '@store/memberTokenStore.ts';

import { stationMockData } from '@mock';

import { useFetchStations } from '@hook/stations/useFetchStations.ts';

import ToastContainer from '@common/Toast/ToastContainer';

import LoginModalContent from '@component/Login';
import ModalContainer from '@component/ModalContainer';
import NavigationContainer from '@component/Navigation';
import AdminTable from '@component/Table';

import { MENU_LIST } from '@constant';

import { getColumnsByTitle, stationColumns } from '@type';


function App() {
  const [tableTitle, setTableTitle] = useState('충전소 관리');
  const [tableColumn, setTableColumn] = useState(stationColumns);
  const [tableData, setTableData] = useState(stationMockData);
  const token = memberTokenStore.getState();
  const { lastPage, stationSummaryList } = useFetchStations(token, 1);
  if (token === '') return <LoginModalContent />;

  const setTable = (title: string) => {
    setTableTitle(title);
    setTableData(stationSummaryList);
    setTableColumn(getColumnsByTitle(title));
  };
  // const [page, setPage] = useState(1);

  return (
    <>
      <ToastContainer />
      <ModalContainer />
      <CssBaseline />
      <NavigationContainer title="ADMIN" menus={MENU_LIST} tableHandler={setTable} />
      <AdminTable title={tableTitle} data={tableData} columns={tableColumn} lastPage={lastPage} />
    </>
  );
}

export default App;