import { useSuspenseQuery } from '@suspensive/react-query';
import axios from 'axios';

import { memberTokenStore } from '@store/memberTokenStore';

import { QUERY_KEY_STATION_DETAILS } from '@constant/queryKeys';
import { BASE_URL } from '@constant/url';

import type { StationDetails } from '@type';

const fetchStationDetails = async (stationId: string) => {
  const token = memberTokenStore.getState();

  const headers = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  };

  const stationDetails = await axios
    .get<StationDetails>(`${BASE_URL}/stations/${stationId}`, headers)
    .then(({ data }) => {
      return data;
    });

  return stationDetails;
};

export const useFetchStationDetails = (stationId: string) => {
  return useSuspenseQuery({
    queryKey: [QUERY_KEY_STATION_DETAILS, stationId],
    queryFn: () => fetchStationDetails(stationId),
  });
};
