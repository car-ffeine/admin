import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid';
import { PencilSquareIcon } from '@heroicons/react/24/outline';
import { Box } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';

import { memberTokenStore } from '@store/memberTokenStore';

import { useFetchStations } from '@hook/stations/useFetchStations';

import { STATION_DETAILS_CATEGORY_LIST } from '@constant';

import AdminTableBody from './AdminTableBody';
import AdminTableHead from './AdminTableHead';
import AdminTablePagination from './AdminTablePagination';

export interface TableProps {
  title: string;
}

function AdminTable({ title }: TableProps) {
  const token = memberTokenStore.getState();
  // const [page, setPage] = useState(1);
  const { lastPage, stationSummaryList } = useFetchStations(token, 1);

  if (token === '') return <p>로그인이 필요합니다</p>;

  return (
    <Box sx={{ margin: '32px' }}>
      <TitleContainer>
        <Title tabIndex={0}>{title}</Title>
        <ButtonContainer>
          <Button type="button" aria-label="수정">
            <span>수정</span>
            <PencilSquareIcon width={24} />
          </Button>
          <Button type="button" aria-label="상세보기">
            <span>상세보기</span>
            <EllipsisVerticalIcon width={24} />
          </Button>
        </ButtonContainer>
      </TitleContainer>
      <TableContainer component={Paper} css={boxShadowCss}>
        <Table tabIndex={0} sx={{ minWidth: 500, overflowX: 'auto' }} aria-label={`${title} 정보`}>
          <AdminTableHead categoryList={STATION_DETAILS_CATEGORY_LIST} />
          <AdminTableBody elements={stationSummaryList} />
        </Table>
      </TableContainer>
      <AdminTablePagination lastPage={lastPage} />
    </Box>
  );
}

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 28px;
  margin: 16px 0 24px;
`;

const Title = styled.h2`
  margin: 0;
  margin-right: 40px;
  font-size: 19px;
  color: #333;
`;

const ButtonContainer = styled.div`
  display: flex;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  column-gap: 8px;
  margin-right: 12px;
  &:last-child {
    margin-right: 0;
  }

  background: transparent;
  border: 1.4px solid #515151;
  border-radius: 8px;
  padding: 2px 8px;
  cursor: pointer;

  &:hover {
    background: #fafafa;
    border: 1.4px solid #333;
    transform: translateY(-2px);
  }
`;

const boxShadowCss = css`
  box-shadow:
    0 3px 10px -1px rgba(0, 0, 0, 0.15),
    0 1px 1px 0 rgba(0, 0, 0, 0.015),
    0 1px 3px 0 rgba(0, 0, 0, 0.015);
`;

export default AdminTable;
