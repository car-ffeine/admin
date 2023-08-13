export const REDIRECT_URI =
  import.meta.env.MODE === 'production'
    ? `https://admin.carffe.in/login`
    : `http://localhost:5173/login`;

export const SESSION_KEY_MEMBER_TOKEN = 'CARFFEINE_MEMBER_TOKEN';
export const SESSION_KEY_MEMBER_INFO = 'CARFFEINE_MEMBER_INFO';
