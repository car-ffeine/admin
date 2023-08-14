import { css } from '@emotion/react';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import type { ColumnType } from '@type';

interface TableHeaderProps<T, K extends keyof T> {
  columns: Array<ColumnType<T, K>>;
}

const AdminTableHead = <T, K extends keyof T>({ columns }: TableHeaderProps<T, K>) => {
  return (
    <TableHead css={tableHeadCss}>
      <TableRow>
        {columns.map((category, index) => (
          <TableCell key={index} align="center" css={tableHeadItemsCss}>
            {category.header}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

const tableHeadCss = css`
  white-space: pre;
  box-shadow: -2px 1px 12px 1px #eee;
`;

const tableHeadItemsCss = css`
  font-weight: bold;
  color: #0a5ed9;
  border-bottom: 0;
`;

export default AdminTableHead;
