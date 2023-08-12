import { css } from '@emotion/react';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';

import type { JSX } from 'react';

export interface NavigationProps {
  title: string;
  children: JSX.Element;
}

function Navigation({ title, children }: NavigationProps) {
  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav" css={headerCss}>
        <Toolbar>
          <Typography variant="h6" component="div" css={headerTitleCss}>
            {title}
          </Typography>
          {children}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

const headerTitleCss = css`
  flex-grow: 1;
  color: white;
  display: {
    xs: none;
    sm: block;
  }
  font-weight: bold;
`;

const headerCss = css`
  box-shadow: none;
  background: #0a5ed9;
  position: static;
`;

export default Navigation;
