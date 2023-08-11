import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';

import { elements } from '@mock';

import { STATION_DETAILS_CATEGORY_LIST } from '@constant';

import AdminTableBody from './AdminTableBody';
import AdminTableHead from './AdminTableHead';
import AdminTablePagination from './AdminTablePagination';
import { Box } from '@mui/material';

export interface TableProps {
  title: string;
}

function AdminTable({ title }: TableProps) {
  return (
    <Box sx={{margin: '32px'}}>
      <Title>{title}</Title>
      <TableContainer component={Paper} css={boxShadowCss}>
        <Table sx={{ minWidth: 500, overflowX: 'auto' }} aria-label="정보 표">
          <AdminTableHead categoryList={STATION_DETAILS_CATEGORY_LIST} />
          <AdminTableBody elements={elements} />
        </Table>
      </TableContainer>
      <AdminTablePagination />
    </Box>
  );
}

const Title = styled.h1`
  margin-bottom: 36px;
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
