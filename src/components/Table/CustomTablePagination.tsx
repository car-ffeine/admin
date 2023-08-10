import { Pagination } from '@mui/material';

import type { ChangeEvent } from 'react';

import { LAST_PAGE } from '@constant';

function CustomTablePagination() {
  const lastPage = LAST_PAGE;

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

export default CustomTablePagination;
