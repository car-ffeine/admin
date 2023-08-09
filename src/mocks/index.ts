interface StationProps {
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

const createData = (props: StationProps) => {
  return { ...props };
};

const mock = {
  stationId: 'HA_1234',
  stationName: '충전소',
  companyName: '회사',
  contact: '010-1234-5678',
  detailLocation: '지하 2층',
  isParkingFree: true,
  isPrivate: false,
  operationTime: '08:00 ~ 20:00',
  private_reason: 'null',
  stationState: 'null',
  address: '서울시 강남구 테헤란로 411',
  latitude: 21.45235,
  longitude: 37.4121,
};

export const elements = [
  createData(mock),
  createData(mock),
  createData(mock),
  createData(mock),
  createData(mock),
  createData(mock),
];
