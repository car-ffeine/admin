import { useSuspenseQuery } from '@suspensive/react-query';
import axios from 'axios';

import { memberTokenStore } from '@store/memberTokenStore';
import { currentPageStore } from '@store/pageStore';

import { ROWS_PER_PAGE } from '@constant';
import { QUERY_KEY_STATION_SUMMARY } from '@constant/queryKeys';
import { BASE_URL } from '@constant/url';

import type { StationSummary } from '@type';

interface StationsResponse {
  lastPage: number;
  elements: StationSummary[];
}

const fetchStationsSummary = async (token: string, page: number) => {
  const headers = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  };

  const { lastPage, elements: stationSummaryList } = await axios
    .get<StationsResponse>(`${BASE_URL}/stations?page=${page}&size=${ROWS_PER_PAGE}`, headers)
    .then(({ data }) => {
      return data;
    });

  return { lastPage, stationSummaryList };
};

export const useFetchStationsSummary = () => {
  const token = memberTokenStore.getState();
  const page = currentPageStore.getState();

  return useSuspenseQuery({
    queryKey: [QUERY_KEY_STATION_SUMMARY, page],
    queryFn: () => fetchStationsSummary(token, page),
  });
};
