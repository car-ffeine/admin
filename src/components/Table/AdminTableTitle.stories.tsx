import type { Meta } from '@storybook/react';

import type { TableProps } from './AdminTable';
import AdminTableTitle from './AdminTableTitle';

const meta = {
  component: AdminTableTitle,
  tags: ['autodocs'],
  args: {
    title: '전체 충전소',
  },
  argTypes: {
    title: {
      description: '페이지 제목을 변경할 수 있습니다.',
    },
  },
} satisfies Meta<typeof AdminTableTitle>;

export default meta;

export const Default = (args: TableProps) => {
  return <AdminTableTitle {...args} />;
};
