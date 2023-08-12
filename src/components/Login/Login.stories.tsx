import type { Meta } from '@storybook/react';

import Login from './Login';

const meta = {
  component: Login,
  tags: ['autodocs'],
} satisfies Meta<typeof Login>;

export default meta;

export const Default = () => {
  return <Login />;
};
