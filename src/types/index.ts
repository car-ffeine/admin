export interface StationProps {
  stationId: string;
  stationName: string;
  companyName: string;
  contact: string;
  detailLocation: string | null;
  isParkingFree: boolean;
  isPrivate: boolean;
  operationTime: string | null;
  private_reason: string | null;
  stationState: string | null;
  address: string | null;
  latitude: number;
  longitude: number;
}