import { ROWS_PER_PAGE } from '../constants';

const mock = {
  stationId: 'HA_1234',
  stationName: '충전소',
  address: '서울시 강남구 테헤란로 411',
  detailLocation: '지하 2층',
  companyName: '회사',
  contact: '010-1234-5678',
  isParkingFree: true,
  isPrivate: false,
  latitude: 21.45235,
  longitude: 37.4121,
  operationTime: '08:00 ~ 20:00',
  privateReason: 'null',
  stationState: 'null',
};

export const elements = Array.from({ length: ROWS_PER_PAGE }, () => mock);
