import type { Meta } from '@storybook/react';

import { STATION_DETAILS_TITLE_LIST } from '@constant';

import CustomTableHead from './CustomTableHead';

const meta = {
  component: CustomTableHead,
  tags: ['autodocs'],
  args: {
    titleList: STATION_DETAILS_TITLE_LIST,
  },
  argTypes: {
    titleList: {
      control: {
        type: 'array',
      },
      description: '테이블 헤드에 들어갈 문구를 담은 배열입니다.',
    },
  },
} satisfies Meta<typeof CustomTableHead>;

export default meta;

export const Default = () => {
  return <CustomTableHead titleList={STATION_DETAILS_TITLE_LIST} />;
};
