import type { MENU_LIST, STATION_DETAILS_CATEGORIES } from '@constant';

export interface StationDetails extends StationSummary {
  chargers: Charger[];
}

export interface StationSummary {
  stationId: string;
  stationName: string;
  companyName: string;
  contact: string;
  detailLocation: string | null;
  isParkingFree: boolean;
  isPrivate: boolean;
  operationTime: string | null;
  privateReason: string | null;
  stationState: string | null;
  address: string | null;
  latitude: number;
  longitude: number;
}

export interface Charger {
  chargerId: string;
  type: string;
  price: number;
  capacity: number;
  method: '단독' | '동시' | null;
}

export type Menu = (typeof MENU_LIST)[number];

export type StationCategoryKeys = keyof typeof STATION_DETAILS_CATEGORIES;
export type StationCategoryValues = (typeof STATION_DETAILS_CATEGORIES)[StationCategoryKeys];

type ExcludeID<T extends string> = T extends 'ID' ? never : T;
export type StationCategoryValuesWithoutID = ExcludeID<StationCategoryValues>;
