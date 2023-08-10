import type { Meta } from '@storybook/react';

import CustomTablePagination from './CustomTablePagination';

const meta = {
  component: CustomTablePagination,
} satisfies Meta<typeof CustomTablePagination>;

export default meta;

export const Default = () => {
  return <CustomTablePagination />;
};
