import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Box } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';

import type { ColumnType } from '@type';

import AdminTableBody from './AdminTableBody';
import AdminTableHead from './AdminTableHead';
import AdminTablePagination from './AdminTablePagination';

export interface TableProps<T, K extends keyof T> {
  data: T[];
  columns: ColumnType<T, K>[];
  title: string;
  lastPage: number;
}

function AdminTable<T, K extends keyof T>({ data, columns, title, lastPage }: TableProps<T, K>) {
  return (
    <Box sx={{ margin: '32px' }}>
      <Title>{title}</Title>
      <TableContainer component={Paper} css={boxShadowCss}>
        <Table sx={{ minWidth: 500, overflowX: 'auto' }} aria-label="정보 표">
          <AdminTableHead columns={columns} />
          <AdminTableBody data={data} columns={columns} />
        </Table>
      </TableContainer>
      <AdminTablePagination lastPage={lastPage} />
    </Box>
  );
}

const Title = styled.h1`
  margin-bottom: 24px;
  padding-top: 8px;
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