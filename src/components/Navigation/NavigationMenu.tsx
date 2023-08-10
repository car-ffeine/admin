import * as React from 'react';
import {ListItem, ListItemButton, ListItemText} from "@mui/material";
import {css} from '@emotion/react';
import type {Menu} from "@type";


interface NavigationProps {
    menus: Menu[];
}

export const NavigationMenu = ({menus}: NavigationProps) => {
    return menus.map((menu, index) => (
        <ListItem key={index} disablePadding>
            <ListItemButton href={menu.link}>
                <ListItemText primary={menu.name} css={tableHeadItemsCss}>{menu.name}</ListItemText>
            </ListItemButton>
        </ListItem>
    ))
};

const tableHeadItemsCss = css`
  color: white;
`;