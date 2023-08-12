import { Button } from '@mui/material';

import { modalActions } from '@store/modalStateStore';

import Login from '@component/Login';

import type { Menu } from '@type';

interface NavigationProps {
  menus: readonly Menu[];
}

export const NavigationMenu = ({ menus }: NavigationProps) => {
  const { openModal } = modalActions;

  const handleClickMenu = (menu: Menu) => {
    if (menu === '간편 로그인') {
      openModal(<Login />);
    }
  };

  return menus.map((menu, index) => (
    <Button key={index} sx={{ color: '#fff' }} onClick={() => handleClickMenu(menu)}>
      {menu}
    </Button>
  ));
};
