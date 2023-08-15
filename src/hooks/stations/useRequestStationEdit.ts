import { useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

import { memberTokenStore } from '@store/memberTokenStore';
import { currentPageStore } from '@store/pageStore';
import { toastActions } from '@store/toastStore';

import { QUERY_KEY_STATION_SUMMARY } from '@constant/queryKeys';
import { BASE_URL } from '@constant/url';

export const useRequestStationEdit = () => {
  const token = memberTokenStore.getState();
  const { showToast } = toastActions;

  const page = currentPageStore.getState();
  const queryClient = useQueryClient();

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
        queryClient.invalidateQueries([QUERY_KEY_STATION_SUMMARY, page]);
      })
      .catch(() => {
        showToast('수정 실패했습니다', 'error');
      });
  };

  return { requestEdit };
};
