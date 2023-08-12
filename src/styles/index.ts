import { css } from '@emotion/react';

export const lineClampCss = (lineClamp: number) => css`
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${lineClamp};
`;
