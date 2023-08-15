import type { Meta } from '@storybook/react';

import StationDetails from './StationDetails';

const meta = {
  component: StationDetails,
  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof StationDetails>;

export default meta;

export const Default = () => {
  return <StationDetails />;
};
