import type { Meta } from '@storybook/react';

import type { PaginationProps } from './CustomTablePagination';
import CustomTablePagination from './CustomTablePagination';

const meta = {
  component: CustomTablePagination,
  args: {
    count: 10,
    page: 2,
    onPageChange: () => {},
  },
  argTypes: {},
} satisfies Meta<typeof CustomTablePagination>;

export default meta;

export const Default = (args: PaginationProps) => {
  return <CustomTablePagination {...args} />;
};
