import { Pagination } from '@mui/material';

import type { ChangeEvent } from 'react';

export interface TablePaginationProps {
  lastPage: number;
  handleChangePage: (_: ChangeEvent<unknown>, page: number) => void;
}

function AdminTablePagination({ lastPage, handleChangePage }: TablePaginationProps) {
  return (
    <Pagination
      sx={{ width: 'max-content', margin: '20px auto' }}
      count={lastPage}
      variant="outlined"
      color="primary"
      onChange={handleChangePage}
    />
  );
}

export default AdminTablePagination;
