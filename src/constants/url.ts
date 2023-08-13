export const LOGIN_BASE_URL =
  import.meta.env.MODE === 'production'
    ? 'https://api.carffe.in/api'
    : 'https://dain.carffe.in/api';

export const BASE_URL = 'https://api.carffe.in/api/admin';
