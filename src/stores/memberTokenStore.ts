import { store } from '@util/external-state';
import { getSessionStorage, setSessionStorage } from '@util/storage';

import { SESSION_KEY_MEMBER_TOKEN } from '@constant/login';

export const memberTokenStore = store<string>(getSessionStorage(SESSION_KEY_MEMBER_TOKEN, ''));

export const tokenActions = {
  setToken: (token: string) => {
    setSessionStorage(SESSION_KEY_MEMBER_TOKEN, token);
    memberTokenStore.setState(token);
  },
  removeToken: () => {
    setSessionStorage(SESSION_KEY_MEMBER_TOKEN, '');
    memberTokenStore.setState('');
  },
};
