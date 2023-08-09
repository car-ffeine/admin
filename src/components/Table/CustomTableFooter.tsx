import { TableFooter, TablePagination, TableRow } from '@mui/material';

import type { ChangeEvent, MouseEvent } from 'react';

import { ROWS_PER_PAGE } from '../../constants';
import { elements } from '../../mocks';
import { pageStore, rowsPerPageStore } from '../../stores/pageStore';
import { useExternalState } from '../../utils/external-state';
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
