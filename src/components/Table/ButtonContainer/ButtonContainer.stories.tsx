import type { Meta } from '@storybook/react';

import type { ButtonContainerProps } from './ButtonContainer';
import ButtonContainer from './ButtonContainer';

const meta = {
  component: ButtonContainer,
  tags: ['autodocs'],
  args: {
    stationId: 'YUMMY_1234',
  },
  argTypes: {
    stationId: {
      description: '해당 ID를 가진 충전소의 버튼입니다.'
    }
  }
} satisfies Meta<typeof ButtonContainer>;

export default meta;

export const Default = ({ stationId }: ButtonContainerProps) => {
  return <ButtonContainer stationId={stationId} />;
};
