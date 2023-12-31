import { css } from '@emotion/react';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

import { ROWS_PER_PAGE } from '@constant';

import type { StationSummary } from '@type';

import ButtonContainer from './ButtonContainer';

interface Props {
  elements: StationSummary[];
}

// TODO: 하드 코딩 없앨 것
function AdminTableBody({ elements }: Props) {
  const emptyRows = ROWS_PER_PAGE - Math.min(ROWS_PER_PAGE, elements.length);

  return (
    <TableBody>
      {elements.map((element) => (
        <TableRow key={element.stationId}>
          <TableCell
            align="center"
            css={tableItemCommonCss}
            sx={{ minWidth: 140, fontWeight: 600 }}
            component="th"
            scope="row"
          >
            {element.stationId}
            <ButtonContainer stationId={element.stationId} />
          </TableCell>
          <TableCell
            align="center"
            css={[tableItemSizeCss, tableItemCommonCss]}
            sx={{ minWidth: 320 }}
          >
            {element.stationName}
          </TableCell>
          <TableCell align="center" css={tableItemCommonCss} sx={{ minWidth: 320 }}>
            {element.address}
          </TableCell>
          <TableCell align="center" css={tableItemCommonCss} sx={{ minWidth: 280 }}>
            {element.detailLocation}
          </TableCell>
          <TableCell align="center" css={[tableItemSizeCss, tableItemCommonCss]}>
            {element.companyName}
          </TableCell>
          <TableCell align="center" css={[tableItemSizeCss, tableItemCommonCss]}>
            {element.contact}
          </TableCell>
          <TableCell align="center" css={tableItemCommonCss}>
            {String(element.isParkingFree)}
          </TableCell>
          <TableCell align="center" css={tableItemCommonCss}>
            {String(element.isPrivate)}
          </TableCell>
          <TableCell align="center" css={[tableItemSizeCss, tableItemCommonCss]}>
            {element.latitude}
          </TableCell>
          <TableCell align="center" css={[tableItemSizeCss, tableItemCommonCss]}>
            {element.longitude}
          </TableCell>
          <TableCell align="center" css={[tableItemSizeCss, tableItemCommonCss]}>
            {element.operationTime}
          </TableCell>
          <TableCell align="center" css={[tableItemSizeCss, tableItemCommonCss]}>
            {String(element.privateReason)}
          </TableCell>
          <TableCell align="center" css={[tableItemSizeCss, tableItemCommonCss]}>
            {String(element.stationState)}
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

const tableItemSizeCss = css`
  min-width: 200px;
  height: 76px;
`;

const tableItemCommonCss = css`
  border-bottom: 0;
  text-align: center;
`;

export default AdminTableBody;
