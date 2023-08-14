import { Button } from '@mui/material';

import { useEffect } from 'react';

import { useExternalState } from '@util/external-state';
import { getSessionStorage, setSessionStorage } from '@util/storage';

import { memberTokenStore } from '@store/memberTokenStore';
import { modalActions } from '@store/modalStateStore';
import { toastActions } from '@store/toastStore';

import LoginModalContent from '@component/Login';

import { SESSION_KEY_MEMBER_TOKEN } from '@constant/login';

import type { Menu } from '@type';

interface NavigationProps {
  menus: readonly Menu[];
  onClick: (title: string) => void;
}

export const NavigationMenu = ({ menus, onClick }: NavigationProps) => {
  const [memberToken, setMemberToken] = useExternalState(memberTokenStore);
  const { openModal } = modalActions;
  const { showToast } = toastActions;

  useEffect(() => {
    const token = getSessionStorage(SESSION_KEY_MEMBER_TOKEN, '');

    setMemberToken(token);
  }, []);

  const isLoggedIn = memberToken !== '';

  const handleClickMenu = () => {
    if (!isLoggedIn) {
      openModal(<LoginModalContent />, 500);
    }
    if (isLoggedIn) {
      logout();
    }
  };

  const logout = () => {
    setSessionStorage(SESSION_KEY_MEMBER_TOKEN, '');
    setMemberToken('');
    showToast('로그아웃 되었습니다', 'success');
  };

  return (
    <>
      {menus.map((menu, index) => (
        <Button key={index} sx={{ color: '#fff' }} onClick={() => onClick(menu)}>
          {menu}
        </Button>
      ))}
      <Button sx={{ color: '#fff', wordBreak: 'keep-all' }} onClick={() => handleClickMenu()}>
        {isLoggedIn ? '로그아웃' : '간편로그인'}
      </Button>{' '}
    </>
  );
};
