import { Pagination } from '@mui/material';

import type { ChangeEvent } from 'react';

export interface TablePaginationProps {
  lastPage: number;
}

function AdminTablePagination({ lastPage }: TablePaginationProps) {
  const handleChangePage = (_: ChangeEvent<unknown>, page: number) => {
    console.log(page, 'page');
  };

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
