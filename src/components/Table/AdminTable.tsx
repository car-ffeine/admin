import { css } from '@emotion/react';
import { Box } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';

import { memberTokenStore } from '@store/memberTokenStore';

import { useFetchStations } from '@hook/stations/useFetchStations';

import { STATION_DETAILS_CATEGORY_LIST } from '@constant';

import AdminTableBody from './AdminTableBody';
import AdminTableHead from './AdminTableHead';
import AdminTablePagination from './AdminTablePagination';
import AdminTableTitle from './AdminTableTitle';

export interface TableProps {
  title: string;
}

function AdminTable({ title }: TableProps) {
  const token = memberTokenStore.getState();
  // const [page, setPage] = useState(1);
  const { lastPage, stationSummaryList } = useFetchStations(token, 1);

  if (token === '') return <p>로그인이 필요합니다</p>;

  return (
    <Box sx={{ margin: '32px' }}>
      <AdminTableTitle title={title} />
      <TableContainer component={Paper} css={boxShadowCss}>
        <Table tabIndex={0} sx={{ minWidth: 500, overflowX: 'auto' }} aria-label={`${title} 정보`}>
          <AdminTableHead categoryList={STATION_DETAILS_CATEGORY_LIST} />
          <AdminTableBody elements={stationSummaryList} />
        </Table>
      </TableContainer>
      <AdminTablePagination lastPage={lastPage} />
    </Box>
  );
}

const boxShadowCss = css`
  box-shadow:
    0 3px 10px -1px rgba(0, 0, 0, 0.15),
    0 1px 1px 0 rgba(0, 0, 0, 0.015),
    0 1px 3px 0 rgba(0, 0, 0, 0.015);
`;

export default AdminTable;
