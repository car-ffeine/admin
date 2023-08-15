import type { Meta } from '@storybook/react';

import type { Charger } from '@type';

import ChargerCard from './ChargerCard';

const meta = {
  component: ChargerCard,
  tags: ['autodocs'],
  args: {
    chargerId: 'YUMMY',
    type: 'SUPER_FAST',
    price: 300,
    capacity: 100,
    method: '단독',
  },
  argTypes: {
    chargerId: {
      description: '충전기 고유의 Id입니다.',
    },
    type: {
      description: '충전기 충전 타입입니다.',
    },
    price: {
      description: '충전 가격입니다.',
    },
    capacity: {
      description: '충전 속도입니다. 50이상이면 급속, 미만이면 완속입니다.',
    },
    method: {
      options: { 단독: '단독', 동시: '동시' },
      control: {
        type: 'select',
      },
      description: '충전 방식입니다. 단독, 동시가 있습니다.',
    },
  },
} satisfies Meta<typeof ChargerCard>;

export default meta;

export const Default = (args: Charger) => {
  return <ChargerCard {...args} />;
};
