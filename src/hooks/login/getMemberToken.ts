import axios from 'axios';

import { LOGIN_BASE_URL } from '@constant/url';
import { REDIRECT_URI } from '@constant/login';

interface TokenResponse {
  token: string;
}

export const getMemberToken = async (code: string,) => {
  const dataToSend = {
    code,
    redirectUri: REDIRECT_URI,
  };

  const tokenResponse = await axios
    .post<TokenResponse>(`${LOGIN_BASE_URL}/oauth/google/login`, JSON.stringify(dataToSend), {
      headers: {
        'Content-type': 'application/json',
      },
    })
    .then(({ data }) => data);

  const userToken = tokenResponse.token;

  return userToken;
};