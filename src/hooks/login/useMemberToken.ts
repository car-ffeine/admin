import axios from 'axios';

import { useEffect, useState } from 'react';

import { tokenActions } from '@store/memberTokenStore';

import { REDIRECT_URI } from '@constant/login';
import { LOGIN_BASE_URL } from '@constant/url';

interface TokenResponse {
  token: string;
}

export const useMemberToken = () => {
  const [loginError, setLoginError] = useState<Error | null>(null);
  const { setToken } = tokenActions;

  useEffect(() => {
    const code = new URLSearchParams(location.search).get('code') ?? '';
    const encodedCode = encodeURIComponent(code);

    getMemberToken(encodedCode)
      .then((token) => {
        setToken(token);

        location.href = REDIRECT_URI.replace('/login', '');
      })
      .catch(() => {
        setLoginError(new Error('로그인 중에 에러가 발생했습니다!'));
      });
  }, []);

  return { loginError };
};

const getMemberToken = async (code: string) => {
  const dataToSend = {
    code,
    redirectUri: REDIRECT_URI,
  };

  const tokenResponse = await axios
    .post<TokenResponse>(`${LOGIN_BASE_URL}/oauth/google/login`, dataToSend, {
      headers: {
        'Content-type': 'application/json',
      },
    })
    .then(({ data }) => data);

  const memberToken = tokenResponse.token;

  return memberToken;
};
