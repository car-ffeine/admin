import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Box } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';

import { useSetExternalState } from '@util/external-state';

import { stationSummaryListStore } from '@store/stationSummaryListStore';

import { useFetchStationsSummary } from '@hook/stations/useFetchStationsSummary';

import { STATION_SUMMARY_CATEGORY_LIST } from '@constant';

import type { StationSummary } from '@type';

import AdminTableBody from './AdminTableBody';
import AdminTableHead from './AdminTableHead';
import AdminTablePagination from './AdminTablePagination';

export interface TableProps {
  title: string;
}

function AdminTable({ title }: TableProps) {
  const {
    data: { lastPage, stationSummaryList },
  } = useFetchStationsSummary();

  const setStationSummaryList = useSetExternalState<StationSummary[]>(stationSummaryListStore);

  setStationSummaryList(stationSummaryList);

  return (
    <Box sx={{ margin: '32px' }}>
      <Title tabIndex={0}>{title}</Title>
      <TableContainer component={Paper} css={boxShadowCss}>
        <Table tabIndex={0} sx={{ minWidth: 500, overflowX: 'auto' }} aria-label={`${title} 정보`}>
          <AdminTableHead categoryList={STATION_SUMMARY_CATEGORY_LIST} />
          <AdminTableBody elements={stationSummaryList} />
        </Table>
      </TableContainer>
      <AdminTablePagination lastPage={lastPage} />
    </Box>
  );
}

const Title = styled.h2`
  margin: 16px 0 24px;
  font-size: 19px;
  color: #333;
`;

const boxShadowCss = css`
  box-shadow:
    0 3px 10px -1px rgba(0, 0, 0, 0.15),
    0 1px 1px 0 rgba(0, 0, 0, 0.015),
    0 1px 3px 0 rgba(0, 0, 0, 0.015);
`;

export default AdminTable;
