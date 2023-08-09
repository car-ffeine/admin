import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import { Box, IconButton } from '@mui/material';

import type { MouseEvent } from 'react';

export interface PaginationProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (event: MouseEvent<HTMLButtonElement>, newPage: number) => void;
}

function CustomTablePagination(props: PaginationProps) {
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
    const lastPage = Math.max(0, Math.ceil(count / rowsPerPage) - 1);

    onPageChange(event, lastPage);
  };

  const isFirstPage = !page;
  const isLastPage = page >= Math.ceil(count / rowsPerPage) - 1;

  return (
    <Box sx={{ flexShrink: 0, ml: 4 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={isFirstPage}
        aria-label="첫 번째 페이지"
      >
        <FirstPageIcon />
      </IconButton>
      <IconButton onClick={handleBackButtonClick} disabled={isFirstPage} aria-label="이전 페이지">
        <KeyboardArrowLeft />
      </IconButton>
      <IconButton onClick={handleNextButtonClick} disabled={isLastPage} aria-label="다음 페이지">
        <KeyboardArrowRight />
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={isLastPage}
        aria-label="마지막 페이지"
      >
        <LastPageIcon />
      </IconButton>
    </Box>
  );
}

export default CustomTablePagination;
