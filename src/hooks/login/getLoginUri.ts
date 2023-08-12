import axios from 'axios';

import { toastActions } from '@store/toastStore';

import { REDIRECT_URI } from '@constant/login';
import { LOGIN_BASE_URL } from '@constant/url';

interface LoginUriResponse {
  loginUri: string;
}

export const getLoginUri = () => {
  const { showToast } = toastActions;

  axios
    .get(`${LOGIN_BASE_URL}/oauth/google/login-uri?redirect-uri=${REDIRECT_URI}`)
    .then<LoginUriResponse>((response) => response.data)
    .then(({ loginUri }) => {
      if (loginUri !== undefined) {
        window.location.href = loginUri.replace(/;/, '');
      }
    })
    .catch(() => {
      showToast('로그인 실패', 'error');
    });
};
