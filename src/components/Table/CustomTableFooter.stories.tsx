import type { Meta } from '@storybook/react';

import CustomTableFooter from './CustomTableFooter';

const meta = {
  component: CustomTableFooter,
  args: {},
  argTypes: {},
} satisfies Meta<typeof CustomTableFooter>;

export default meta;

export const Default = () => {
  return <CustomTableFooter />;
};
