import { Divider, Drawer, List, Toolbar } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import React from 'react';

import { NavigationMenu } from '@component/Navigation/NavigationMenu.tsx';

import { MENU_LIST } from '@constant';

export interface NavigationProps {
  title: string;
}

function Navigation({ title }: NavigationProps) {
  return (
    <ThemeProvider theme={theme}>
      <Drawer variant="permanent" anchor="left">
        {title}
        <Toolbar />
        <Divider />
        <List>
          <NavigationMenu menus={MENU_LIST} />
        </List>
      </Drawer>
    </ThemeProvider>
  );
}

const theme = createTheme({
  components: {
    MuiListItemButton: {
      defaultProps: {
        disableTouchRipple: true,
      },
    },
  },
  palette: {
    mode: 'dark',
    primary: { main: 'rgb(102, 157, 246)' },
    background: { paper: 'rgb(5, 30, 52)' },
  },
});
export default Navigation;
