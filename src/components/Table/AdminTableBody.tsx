import { css } from '@emotion/react';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

import { modalActions } from '@store/modalStateStore';

import { stationEditMock } from '@mock';

import Form from '@component/Form';

import { ROWS_PER_PAGE } from '@constant';

import type { ModalElementsProps } from '@type';

// TODO: 하드 코딩 없앨 것
function AdminTableBody({ elements }: ModalElementsProps) {
  const { openModal } = modalActions;

  const handleOpenModal = () => {
    openModal(<Form element={stationEditMock} />);
  };

  const size = ROWS_PER_PAGE;

  const emptyRows = size - Math.min(size, elements.length);

  return (
    <TableBody>
      {elements.map((element, index) => (
        <TableRow key={index}>
          <TableCell
            align="center"
            css={tableItemCommonCss}
            sx={{ minWidth: 100, height: 40, cursor: 'pointer' }}
            component="th"
            scope="row"
            onClick={handleOpenModal}
          >
            {element.stationId}
          </TableCell>
          <TableCell align="center" css={[tableItemSizeCss, tableItemCommonCss]}>
            {element.stationName}
          </TableCell>
          <TableCell
            align="center"
            css={tableItemCommonCss}
            sx={{ minWidth: 280, textAlign: 'center' }}
          >
            {element.address}
          </TableCell>
          <TableCell
            align="center"
            css={tableItemCommonCss}
            sx={{ minWidth: 280, textAlign: 'center' }}
          >
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
            {element.privateReason}
          </TableCell>
          <TableCell align="center" css={[tableItemSizeCss, tableItemCommonCss]}>
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

const tableItemSizeCss = css`
  min-width: 200px;
  height: 76px;
`;

const tableItemCommonCss = css`
  border-bottom: 0;
`;

export default AdminTableBody;
