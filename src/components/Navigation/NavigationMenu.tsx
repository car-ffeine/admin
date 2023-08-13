import { Button } from '@mui/material';

import { useEffect, useState } from 'react';

import { getSessionStorage, setSessionStorage } from '@util/storage';

import { modalActions } from '@store/modalStateStore';

import LoginModalContent from '@component/Login';

import { SESSION_KEY_MEMBER_TOKEN } from '@constant/login';

import type { Menu } from '@type';

interface NavigationProps {
  menus: readonly Menu[];
}

export const NavigationMenu = ({ menus }: NavigationProps) => {
  const [memberToken, setMemberToken] = useState('');
  const { openModal } = modalActions;

  useEffect(() => {
    const token = getSessionStorage(SESSION_KEY_MEMBER_TOKEN, '');

    setMemberToken(token);
  }, []);

  const isLoggedIn = memberToken !== '';

  const handleClickMenu = (menu: Menu) => {
    if (menu === '간편 로그인' && !isLoggedIn) {
      openModal(<LoginModalContent />, 500);
    }

    if (menu === '간편 로그인' && isLoggedIn) {
      setSessionStorage(SESSION_KEY_MEMBER_TOKEN, '');
      setMemberToken('');
    }
  };

  return menus.map((menu, index) => (
    <Button
      key={index}
      sx={{ color: '#fff', wordBreak: 'keep-all' }}
      onClick={() => handleClickMenu(menu)}
    >
      {menu === '간편 로그인' && isLoggedIn ? '로그아웃' : menu}
    </Button>
  ));
};
