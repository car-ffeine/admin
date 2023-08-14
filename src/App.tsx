import { CssBaseline } from '@mui/material';
import 'common.css';

import { useState } from 'react';

import { getMockData, stationMockData } from '@mock';

import ToastContainer from '@common/Toast/ToastContainer';

import ModalContainer from '@component/ModalContainer';
import NavigationContainer from '@component/Navigation';
import AdminTable from '@component/Table';

import { MENU_LIST } from '@constant';

import { getColumnsByTitle, stationColumns } from '@type';

function App() {
  const [tableTitle, setTableTitle] = useState('충전소 관리');
  const [tableColumn, setTableColumn] = useState(stationColumns);
  const [tableData, setTableData] = useState(stationMockData);

  const setTable = (title: string) => {
    setTableTitle(title);
    setTableData(getMockData(title));
    setTableColumn(getColumnsByTitle(title));
  };

  return (
    <>
      <ToastContainer />
      <ModalContainer />
      <CssBaseline />
      <NavigationContainer title="ADMIN" menus={MENU_LIST} tableHandler={setTable} />
      <AdminTable title={tableTitle} data={tableData} columns={tableColumn} />
    </>
  );
}

export default App;
