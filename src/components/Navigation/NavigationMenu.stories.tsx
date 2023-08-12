import styled from '@emotion/styled';
import type { Meta } from '@storybook/react';

import { NavigationMenu } from '@component/Navigation/NavigationMenu.tsx';

import { MENU_LIST } from '@constant';

const meta = {
  component: NavigationMenu,
  tags: ['autodocs'],
  args: {
    menus: MENU_LIST,
  },
  argTypes: {
    menus: {
      control: {
        type: 'array',
      },
      description: '메뉴 이름을 변경할 수 있습니다.',
    },
  },
} satisfies Meta<typeof NavigationMenu>;

export default meta;

export const Default = () => {
  return (
    <NavigationMenuContainer>
      <NavigationMenu menus={MENU_LIST} />
    </NavigationMenuContainer>
  );
};

const NavigationMenuContainer = styled.div`
  background: #0a5ed9;
`;
