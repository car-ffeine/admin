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
      openModal(<Login />, 500);
    }
  };

  return menus.map((menu, index) => (
    <Button
      key={index}
      sx={{ color: '#fff', wordBreak: 'keep-all' }}
      onClick={() => handleClickMenu(menu)}
    >
      {menu}
    </Button>
  ));
};
