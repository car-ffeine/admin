import type { Meta } from '@storybook/react';

import { STATION_SUMMARY_CATEGORY_LIST } from '@constant';

import AdminTableHead from './AdminTableHead';

const meta = {
  component: AdminTableHead,
  tags: ['autodocs'],
  args: {
    categoryList: STATION_SUMMARY_CATEGORY_LIST,
  },
  argTypes: {
    categoryList: {
      control: {
        type: 'array',
      },
      description: '테이블 헤드에 들어갈 문구를 담은 배열입니다.',
    },
  },
} satisfies Meta<typeof AdminTableHead>;

export default meta;

export const Default = () => {
  return <AdminTableHead categoryList={STATION_SUMMARY_CATEGORY_LIST} />;
};
