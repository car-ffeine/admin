import { Button } from '@mui/material';

import type { Menu } from '@type';

interface NavigationProps {
  menus: Menu[];
}

export const NavigationMenu = ({ menus }: NavigationProps) => {
  return menus.map((menu, index) => (
    <Button key={index} sx={{ color: '#fff' }}>
      {menu.name}
    </Button>
  ));
};
