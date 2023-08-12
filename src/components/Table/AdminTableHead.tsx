import { css } from '@emotion/react';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import type { StationCategoryValues } from '@type';

interface Props {
  categoryList: readonly StationCategoryValues[];
}

function AdminTableHead({ categoryList }: Props) {
  return (
    <TableHead css={tableHeadCss}>
      <TableRow>
        {categoryList.map((category, index) => (
          <TableCell key={index} align="center" css={tableHeadItemsCss}>
            {category}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

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
