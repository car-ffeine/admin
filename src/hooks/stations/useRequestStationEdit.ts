import axios from 'axios';

import { memberTokenStore } from '@store/memberTokenStore';
import { toastActions } from '@store/toastStore';

import { BASE_URL } from '@constant/url';

export const useRequestStationEdit = () => {
  const token = memberTokenStore.getState();
  const { showToast } = toastActions;

  const headers = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const requestEdit = (stationId: string, formData: FormData) => {
    axios
      .patch(`${BASE_URL}/stations/${stationId}`, formData, headers)
      .then(() => {
        showToast('수정되었습니다');
      })
      .catch(() => {
        showToast('수정 실패했습니다', 'error');
      });
  };

  return { requestEdit };
};
