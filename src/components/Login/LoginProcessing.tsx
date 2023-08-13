import { useEffect, useState } from 'react';

import { setSessionStorage } from '@util/storage';

import { getMemberToken } from '@hook/login/getMemberToken';

import { REDIRECT_URI, SESSION_KEY_MEMBER_TOKEN } from '@constant/login';

import Loading from './Loading';

function LoginProcessing() {
  const [loginError, setLoginError] = useState<Error | null>(null);

  useEffect(() => {
    const code = new URLSearchParams(location.search).get('code') ?? '';
    const encodedCode = encodeURIComponent(code);

    getMemberToken(encodedCode)
      .then((token) => {
        setSessionStorage(SESSION_KEY_MEMBER_TOKEN, token);

        location.href = REDIRECT_URI.replace('/login', '');
      })
      .catch(() => {
        setLoginError(new Error('로그인 중에 에러가 발생했습니다!'));
      });
  }, []);

  if (loginError !== null) {
    return <></>;
  }

  return <Loading />;
}

export default LoginProcessing;
