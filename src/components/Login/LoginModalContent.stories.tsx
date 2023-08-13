import type { Meta } from '@storybook/react';

import LoginModalContent from './LoginModalContent';

const meta = {
  component: LoginModalContent,
  tags: ['autodocs'],
} satisfies Meta<typeof LoginModalContent>;

export default meta;

export const Default = () => {
  return <LoginModalContent />;
};
