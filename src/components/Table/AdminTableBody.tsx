import { css } from '@emotion/react';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

import { modalActions } from '@store/modalStateStore.ts';

import { stationEditMock } from '@mock';

import Form from '@component/Form';

import type { ColumnType } from '@type';

interface TableRowsProps<T, K extends keyof T> {
  data: Array<T>;
  columns: Array<ColumnType<T, K>>;
}

const AdminTableBody = <T, K extends keyof T>({ data, columns }: TableRowsProps<T, K>) => {
  const { openModal } = modalActions;

  function handleOpenModal() {
    openModal(<Form element={stationEditMock} />);
  }

  const rows = data.map((row, index) => {
    return (
      <TableRow css={tableItemSizeCss} key={`row-${index}`}>
        {columns.map((column, index2) => {
          return (
            <TableCell css={tableItemCommonCss} key={`cell-${index2}`} onClick={handleOpenModal}>
              {`${row[column.key]}`}
            </TableCell>
          );
        })}
      </TableRow>
    );
  });
  return <TableBody>{rows}</TableBody>;
};

const tableItemSizeCss = css`
  height: 76px;
`;

const tableItemCommonCss = css`
  border-bottom: 0;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: center;
`;
export default AdminTableBody;
