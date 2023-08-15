import axios from 'axios';

import { memberTokenStore } from '@store/memberTokenStore';
import { editedStationSummaryStore } from '@store/stationSummaryListStore';
import { toastActions } from '@store/toastStore';

import { BASE_URL } from '@constant/url';

export const useRequestStationEdit = () => {
  const token = memberTokenStore.getState();
  const { showToast } = toastActions;
  const editedStationSummary = editedStationSummaryStore.getState();

  const headers = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const requestEdit = (stationId: string) => {
    axios
      .patch(`${BASE_URL}/stations/${stationId}`, editedStationSummary, headers)
      .then(() => {
        showToast('수정되었습니다');
      })
      .catch((error) => {
        showToast('수정 실패했습니다', 'error');
        console.error(error);
      });
  };

  return { requestEdit };
};
