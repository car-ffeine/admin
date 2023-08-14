import type { Meta } from '@storybook/react';

import ButtonContainer from './ButtonContainer';

const meta = {
  component: ButtonContainer,
  tags: ['autodocs'],
} satisfies Meta<typeof ButtonContainer>;

export default meta;

export const Default = () => {
  return <ButtonContainer />;
};
