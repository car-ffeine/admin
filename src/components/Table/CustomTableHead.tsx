import { css } from '@emotion/react';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

interface Props {
  titleList: readonly string[];
}

function CustomTableHead({ titleList }: Props) {
  return (
    <TableHead>
      <TableRow>
        {titleList.map((title, index) => (
          <TableCell key={index} align={index ? 'right' : undefined} css={tableHeadCss}>
            {title}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

const tableHeadCss = css`
  font-weight: bold;
  background: #f1f3f8;
`;

export default CustomTableHead;
