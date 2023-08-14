import type { Meta } from '@storybook/react';

import { stationMockData } from '@mock';

import { stationColumns } from '@type';

import type { TableProps } from './AdminTable';
import AdminTable from './AdminTable';

const meta = {
  component: AdminTable,
  tags: ['autodocs'],
  args: {
    title: '전체 충전소',
    columns: stationColumns,
    data: stationMockData,
  },
  argTypes: {
    title: {
      description: '페이지 제목을 변경할 수 있습니다.',
    },
  },
} satisfies Meta<typeof AdminTable>;

export default meta;

export const Default = <T, K extends keyof T>(args: TableProps<T, K>) => {
  return <AdminTable {...args} />;
};
