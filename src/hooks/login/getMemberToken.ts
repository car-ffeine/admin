import axios from 'axios';

import { REDIRECT_URI } from '@constant/login';
import { LOGIN_BASE_URL } from '@constant/url';

interface TokenResponse {
  token: string;
}

export const getMemberToken = async (code: string) => {
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
