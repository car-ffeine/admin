import { useEffect, useState } from 'react';

import { setSessionStorage } from '@util/storage';

import { getMemberToken } from '@hook/login/getMemberToken';

import { REDIRECT_URI, SESSION_KEY_MEMBER_TOKEN } from '@constant/login';

function LoginProcessing() {
  const [loginError, setLoginError] = useState<Error | null>(null);

  useEffect(() => {
    const code = new URLSearchParams(location.search).get('code') ?? '';

    getMemberToken(code)
      .then((token) => {
        setSessionStorage(SESSION_KEY_MEMBER_TOKEN, token);

        location.href = REDIRECT_URI.replace('/login', '');
      })
      .catch(() => {
        setLoginError(new Error('로그인 중에 에러가 발생했습니다!'));
      });
  }, []);

  if (loginError !== null) {
    return <p>{loginError.message}</p>;
  }

  return <p>로그인 중...</p>;
}

export default LoginProcessing;
