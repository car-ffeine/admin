import type {Meta} from '@storybook/react';

import {MENU_LIST} from '@constant';
import {NavigationMenu} from "@component/Navigation/NavigationMenu.tsx";


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
            description: '메뉴 이름과 링크를 담은 배열입니다.',
        },
    },
} satisfies Meta<typeof NavigationMenu>;

export default meta;

export const Default = () => {
    return <NavigationMenu menus={MENU_LIST}/>;
};
