import type { STATION_DETAILS_CATEGORIES } from '@constant';

export interface StationProps {
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

export type StationCategoryKeys = keyof typeof STATION_DETAILS_CATEGORIES;
export type StationCategoryValues = (typeof STATION_DETAILS_CATEGORIES)[StationCategoryKeys];

type ExcludeID<T extends string> = T extends 'ID' ? never : T;
export type StationCategoryValuesWithoutID = ExcludeID<StationCategoryValues>;

export interface StationEditProps extends Omit<StationProps, 'stationId'> {}

export interface ModalElementsProps {
  elements: StationProps[];
}
