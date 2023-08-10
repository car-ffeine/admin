import { css } from '@emotion/react';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

import { ROWS_PER_PAGE } from '@constant';

import type { StationProps } from '@type';

interface Props {
  elements: StationProps[];
}

// TODO: 하드 코딩 없앨 것
function AdminTableBody({ elements }: Props) {
  const size = ROWS_PER_PAGE;

  const emptyRows = size - Math.min(size, elements.length);

  return (
    <TableBody>
      {elements.map((element) => (
        <TableRow key={element.stationId}>
          <TableCell
            align="center"
            css={borderBottomCss}
            sx={{ minWidth: 100, height: 40 }}
            component="th"
            scope="row"
          >
            {element.stationId}
          </TableCell>
          <TableCell align="center" css={[tableItemsCss, borderBottomCss]}>
            {element.stationName}
          </TableCell>
          <TableCell
            align="center"
            css={borderBottomCss}
            sx={{ minWidth: 280, textAlign: 'center' }}
          >
            {element.address}
          </TableCell>
          <TableCell align="center" css={[tableItemsCss, borderBottomCss]}>
            {element.companyName}
          </TableCell>
          <TableCell align="center" css={[tableItemsCss, borderBottomCss]}>
            {element.contact}
          </TableCell>
          <TableCell align="center" css={borderBottomCss}>
            {element.isParkingFree ? '무료' : '유료'}
          </TableCell>
          <TableCell align="center" css={borderBottomCss}>
            {element.isPrivate ? '개방 제한' : '개방'}
          </TableCell>
          <TableCell align="center" css={[tableItemsCss, borderBottomCss]}>
            {element.latitude}
          </TableCell>
          <TableCell align="center" css={[tableItemsCss, borderBottomCss]}>
            {element.longitude}
          </TableCell>
          <TableCell align="center" css={[tableItemsCss, borderBottomCss]}>
            {element.operationTime}
          </TableCell>
          <TableCell align="center" css={[tableItemsCss, borderBottomCss]}>
            {element.private_reason}
          </TableCell>
          <TableCell align="center" css={[tableItemsCss, borderBottomCss]}>
            {element.stationState}
          </TableCell>
        </TableRow>
      ))}

      {emptyRows > 0 && (
        <TableRow sx={{ height: 76 * emptyRows }}>
          <TableCell />
        </TableRow>
      )}
    </TableBody>
  );
}

const tableItemsCss = css`
  min-width: 200px;
  height: 76px;
`;

const borderBottomCss = css`
  border-bottom: 0;
`;

export default AdminTableBody;
