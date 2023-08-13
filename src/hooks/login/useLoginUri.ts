import axios from 'axios';

import { toastActions } from '@store/toastStore';

import { REDIRECT_URI } from '@constant/login';
import { LOGIN_BASE_URL } from '@constant/url';

interface LoginUriResponse {
  loginUri: string;
}

export const useLoginUri = () => {
  const { showToast } = toastActions;

  const getLoginUri = () => {
    axios
      .get(`${LOGIN_BASE_URL}/oauth/google/login-uri?redirect-uri=${REDIRECT_URI}`)
      .then<LoginUriResponse>(({ data }) => data)
      .then(({ loginUri }) => {
        if (loginUri !== undefined) {
          location.href = loginUri.replace(/;/, '');
        }
      })
      .catch(() => {
        showToast('로그인 실패', 'error');
      });
  };

  return { getLoginUri };
};
