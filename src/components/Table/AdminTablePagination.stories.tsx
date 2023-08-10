import type { Meta } from '@storybook/react';

import AdminTablePagination from './AdminTablePagination';

const meta = {
  component: AdminTablePagination,
} satisfies Meta<typeof AdminTablePagination>;

export default meta;

export const Default = () => {
  return <AdminTablePagination />;
};
