import type { Meta } from '@storybook/react';

import type { NavigationProps } from './Navigation';
import Navigation from './Navigation';

const meta = {
  component: Navigation,
  tags: ['autodocs'],
  args: {
    title: '전체 충전소',
  },
  argTypes: {
    title: {
      description: '페이지 제목을 변경할 수 있습니다.',
    },
  },
} satisfies Meta<typeof Navigation>;

export default meta;

export const Default = (args: NavigationProps) => {
  return <Navigation {...args} />;
};
