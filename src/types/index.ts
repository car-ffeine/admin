import type { MENU_LIST, STATION_DETAILS_CATEGORIES } from '@constant';

export interface ColumnType<T, K extends keyof T> {
  key: K;
  header: string;
  width?: number;
}

interface FaultReportDetails {
  id: number;
  stationId: string;
  memberId: number;
}

interface MemberDetails {
  id: number;
  email: number;
  role: string;
}

const memberColumns: ColumnType<MemberDetails, keyof MemberDetails>[] = [
  {
    key: 'id',
    header: 'ID',
  },
  {
    key: 'email',
    header: 'E-MAIL',
  },
  {
    key: 'role',
    header: '회원 권한',
  },
];
const faultReportColumns: ColumnType<FaultReportDetails, keyof FaultReportDetails>[] = [
  {
    key: 'id',
    header: 'ID',
  },
  {
    key: 'stationId',
    header: '충전소 ID',
  },
  {
    key: 'memberId',
    header: '회원 ID',
  },
];

type MisinformationDetails = {
  id: number;
  memberId: number;
  isChecked: boolean;
};

const misinformationColumns: ColumnType<MisinformationDetails, keyof MisinformationDetails>[] = [
  {
    key: 'id',
    header: 'ID',
  },
  {
    key: 'memberId',
    header: '회원 ID',
  },
  {
    key: 'isChecked',
    header: '확인 여부',
  },
];

export interface StationDetails {
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

export const stationColumns: ColumnType<StationDetails, keyof StationDetails>[] = [
  {
    key: 'stationId',
    header: 'ID',
  },
  {
    key: 'stationName',
    header: '충전소 이름',
  },
  {
    key: 'companyName',
    header: '회사 이름',
  },
  {
    key: 'contact',
    header: '연락처',
  },
  {
    key: 'detailLocation',
    header: '상세 위치',
  },
  {
    key: 'isParkingFree',
    header: '주차 무료',
  },
  {
    key: 'isPrivate',
    header: '외부인 제한 충전소',
  },
  {
    key: 'operationTime',
    header: '운영 시간',
  },
  {
    key: 'privateReason',
    header: '외부인 제한 이유',
  },
  {
    key: 'stationState',
    header: '충전소 기타 정보',
  },
  {
    key: 'address',
    header: '주소',
  },
  {
    key: 'latitude',
    header: '위도',
  },
  {
    key: 'longitude',
    header: '경도',
  },
];

export function getColumnsByTitle<T, K extends keyof T>(title: string): ColumnType<T, K>[] {
  switch (title) {
    case '충전소 관리':
      return stationColumns as ColumnType<T, K>[];
    case '충전소 제보 관리':
      return misinformationColumns as ColumnType<T, K>[];
    case '충전기 신고 관리':
      return faultReportColumns as ColumnType<T, K>[];
    case '회원 관리':
      return memberColumns as ColumnType<T, K>[];
    default:
      return [];
  }
}

export type Menu = (typeof MENU_LIST)[number];

export type StationCategoryKeys = keyof typeof STATION_DETAILS_CATEGORIES;
export type StationCategoryValues = (typeof STATION_DETAILS_CATEGORIES)[StationCategoryKeys];

type ExcludeID<T extends string> = T extends 'ID' ? never : T;
export type StationCategoryValuesWithoutID = ExcludeID<StationCategoryValues>;

export interface StationEditProps extends Omit<StationDetails, 'stationId'> {}

export interface ModalElementsProps {
  data: StationDetails[];
}
