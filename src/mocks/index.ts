import { ROWS_PER_PAGE } from '../constants';

const stationMock = {
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

export const stationEditMock = {
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

const misinformationMock = {
  id: 1,
  memberId: 2,
  isChecked: false,
};

const faultReportMock = {
  id: 1,
  memberId: 2,
  stationId: 3,
};

const memberMock = {
  id: 1,
  email: 'b**ster@gmail.com',
  role: 'ADMIN',
};

export const faultReportMockData = Array.from({ length: ROWS_PER_PAGE }, () => faultReportMock);
export const memberMockData = Array.from({ length: ROWS_PER_PAGE }, () => memberMock);

export const stationMockData = Array.from({ length: ROWS_PER_PAGE }, () => stationMock);
export const misinformnationMockData = Array.from(
  { length: ROWS_PER_PAGE },
  () => misinformationMock
);

export function getMockData<T>(title: string): Array<T> {
  switch (title) {
    case '충전소 관리':
      return stationMockData as Array<T>;
    case '충전소 제보 관리':
      return misinformnationMockData as Array<T>;
    case '충전기 신고 관리':
      return faultReportMockData as Array<T>;
    case '회원 관리':
      return memberMockData as Array<T>;
    default:
      return [];
  }
}
