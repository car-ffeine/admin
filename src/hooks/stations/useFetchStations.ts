import axios from 'axios';

import { useEffect, useState } from 'react';

import { ROWS_PER_PAGE } from '@constant';
import { BASE_URL } from '@constant/url';

import type { StationDetails } from '@type';

interface StationsResponse {
  lastPage: number;
  elements: StationDetails[];
}

export const useFetchStations = (token: string, page: number) => {
  const [lastPage, setLastPage] = useState(1);
  const [stationSummaryList, setStationSummaryList] = useState<StationDetails[]>([]);

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  };

  useEffect(() => {
    const fetchStations = async () => {
      try {
        const {
          data: { lastPage, elements: stationSummaryList },
        } = await axios.get<StationsResponse>(
          `${BASE_URL}/stations?page=${page}&size=${ROWS_PER_PAGE}`,
          config
        );

        setLastPage(lastPage);
        setStationSummaryList(stationSummaryList);
      } catch (error) {
        console.error(error);
      }
    };

    fetchStations();
  }, []);

  return { lastPage, stationSummaryList };
};