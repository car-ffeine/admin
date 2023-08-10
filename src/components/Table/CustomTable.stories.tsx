import type { Meta } from '@storybook/react';

import type { TableProps } from './CustomTable';
import CustomTable from './CustomTable';

const meta = {
  component: CustomTable,
  tags: ['autodocs'],
  args: {
    title: '전체 충전소',
  },
  argTypes: {
    title: {
      description: '페이지 제목을 변경할 수 있습니다.',
    },
  },
} satisfies Meta<typeof CustomTable>;

export default meta;

export const Default = (args: TableProps) => {
  return <CustomTable {...args} />;
};
