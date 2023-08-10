import { css } from '@emotion/react';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

interface Props {
  titleList: readonly string[];
}

function CustomTableHead({ titleList }: Props) {
  return (
    <TableHead css={tableHeadCss}>
      <TableRow>
        {titleList.map((title, index) => (
          <TableCell key={index} align="center" css={tableHeadItemsCss}>
            {title}
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

export default CustomTableHead;
