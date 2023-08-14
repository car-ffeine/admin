import type { Meta } from '@storybook/react';

import { stationMockData } from '@mock';

import type { StationDetails } from '@type';
import { stationColumns } from '@type';

import type { TableProps } from './AdminTable';
import AdminTable from './AdminTable';

type Props = TableProps<StationDetails, keyof StationDetails>;

const meta = {
  component: AdminTable,
  tags: ['autodocs'],
  args: {
    title: '전체 충전소',
    data: stationMockData,
    columns: stationColumns,
  },
  argTypes: {
    title: {
      description: '페이지 제목을 변경할 수 있습니다.',
    },
  },
} as Meta<Props>;

export default meta;

export const Default = (args: Props) => {
  return <AdminTable {...args} />;
};
