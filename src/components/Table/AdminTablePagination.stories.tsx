import type { Meta } from '@storybook/react';

import type { TablePaginationProps } from './AdminTablePagination';
import AdminTablePagination from './AdminTablePagination';

const meta = {
  component: AdminTablePagination,
  args: {
    lastPage: 3,
  },
  argTypes: {
    lastPage: {
      description: '마지막 페이지를 변경할 수 있습니다.',
    },
  },
} satisfies Meta<typeof AdminTablePagination>;

export default meta;

export const Default = (args: TablePaginationProps) => {
  return <AdminTablePagination {...args} />;
};
