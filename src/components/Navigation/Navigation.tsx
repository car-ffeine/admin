import { css } from '@emotion/react';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';

import type { JSX } from 'react';

import { ReactComponent as CarFfeineLogo } from '@asset/car-ffeine-white-logo.svg';

export interface NavigationProps {
  title: string;
  children: JSX.Element;
}

function Navigation({ title, children }: NavigationProps) {
  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav" css={headerCss}>
        <Toolbar>
          <CarFfeineLogo width={24} height={24} />
          <Typography variant="h6" component="h1" css={headerTitleCss}>
            {title}
          </Typography>
          {children}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

const headerTitleCss = css`
  display: {
    xs: none;
    sm: block;
  }
  flex-grow: 1;
  margin-left: 4px;

  color: white;
  font-weight: bold;
  letter-spacing: -0.8px;
`;

const headerCss = css`
  box-shadow: none;
  background: #0a5ed9;
  position: static;
`;

export default Navigation;
