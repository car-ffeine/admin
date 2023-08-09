import { TableFooter, TablePagination, TableRow } from '@mui/material';

import type { ChangeEvent, MouseEvent } from 'react';

import { useExternalState } from '@util/external-state';

import { pageStore, rowsPerPageStore } from '@store/pageStore';

import { elements } from '@mock';

import { ROWS_PER_PAGE } from '@constant';

import CustomTablePagination from './CustomTablePagination';

function CustomTableFooter() {
  const [page, setPage] = useExternalState(pageStore);
  const [rowsPerPage, setRowsPerPage] = useExternalState(rowsPerPageStore);

  const handleChangePage = (event: MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = ({
    target: { valueAsNumber },
  }: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(valueAsNumber);
    setPage(0);
  };

  return (
    <TableFooter>
      <TableRow>
        <TablePagination
          rowsPerPageOptions={[ROWS_PER_PAGE]}
          count={elements.length}
          rowsPerPage={rowsPerPage}
          colSpan={3}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          ActionsComponent={CustomTablePagination}
        />
      </TableRow>
    </TableFooter>
  );
}

export default CustomTableFooter;
