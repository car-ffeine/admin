export const LOGIN_BASE_URL =
  import.meta.env.MODE === 'production'
    ? 'https://api.carffe.in/api'
    : 'https://dain.carffe.in/api';

export const BASE_URL =
  import.meta.env.MODE === 'production' ? `${LOGIN_BASE_URL}/admin` : `${LOGIN_BASE_URL}/admin`;
