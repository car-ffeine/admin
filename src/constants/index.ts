export const STATION_DETAILS_CATEGORY_LIST = [
    'ID',
    '이름',
    '주소',
    '상세 위치',
    '회사 이름',
    '연락처',
    '주차 무료 여부',
    '충전소 개방 여부',
    '위도',
    '경도',
    '운영 시간',
    '충전소 개방 안 하는 이유',
    '충전소 기타 정보',
] as const;

export const ROWS_PER_PAGE = 5;
export const LAST_PAGE = 12;

export const MENU_LIST = [
    {
        name: '회원 관리',
        link: "/members"
    },
    {
        name: '충전소 관리',
        link: "/stations"
    },
    {
        name: '충전소 제보 관리',
        link: "/misinformation-reports"
    },
    {
        name: '충전소 신고 관리',
        link: "/fault-reports"
    },
]