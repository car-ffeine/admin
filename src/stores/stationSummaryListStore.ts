import { store } from '@util/external-state';

import type { StationSummary } from '@type';

export const stationSummaryListStore = store<StationSummary[]>([]);

export const findSelectedStationSummary = (stationId: string) => {
  const stationSummaryList = stationSummaryListStore.getState();

  const selectedStationSummary = stationSummaryList.find(
    (stationSummary) => stationSummary.stationId === stationId
  );

  return selectedStationSummary;
};

export const editedStationSummaryStore = store<FormData | null>(null);