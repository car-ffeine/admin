export const STATION_DETAILS_CATEGORIES = {
  stationId: 'ID',
  stationName: '이름',
  address: '주소',
  detailLocation: '상세 위치',
  companyName: '회사 이름',
  contact: '연락처',
  isParkingFree: '주차 무료 여부',
  isPrivate: '충전소 개방 여부',
  latitude: '위도',
  longitude: '경도',
  operationTime: '운영 시간',
  privateReason: '충전소 개방 안 하는 이유',
  stationState: '충전소 기타 정보',
} as const;

export const STATION_DETAILS_CATEGORY_LIST = Object.values(STATION_DETAILS_CATEGORIES);

export const ROWS_PER_PAGE = 5;
export const LAST_PAGE = 12;
