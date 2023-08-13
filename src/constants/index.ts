export const STATION_DETAILS_CATEGORIES = {
  stationId: 'ID',
  stationName: '이름',
  address: '주소',
  detailLocation: '상세 위치',
  companyName: '회사 이름',
  contact: '연락처',
  isParkingFree: '주차 무료',
  isPrivate: '외부인 제한 충전소',
  latitude: '위도',
  longitude: '경도',
  operationTime: '운영 시간',
  privateReason: '충전소 개방 안 하는 이유',
  stationState: '충전소 기타 정보',
} as const;

export const STATION_DETAILS_CATEGORY_LIST = Object.values(STATION_DETAILS_CATEGORIES);

export const ROWS_PER_PAGE = 10;
export const LAST_PAGE = 12;

export const MENU_LIST = [
  '회원 관리',
  '충전소 관리',
  '충전소 제보 관리',
  '충전기 신고 관리',
  '간편 로그인',
] as const;
