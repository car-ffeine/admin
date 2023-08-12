import { css } from '@emotion/react';

import type { PositionedToast } from '@store/toastStore';

import type { Color } from '../types';

export const getToastColor = (color?: Color) => {
  switch (color) {
    case 'primary':
      return css`
        background: #cfe2ff;
        border: 1.3px solid #9ec5fe;
        color: #052c65;
      `;
    case 'secondary':
      return css`
        border: 1.3px solid #dce5ff;
        background: #e9edf8;
        color: #585858;
      `;
    case 'success':
      return css`
        background: #d1e7dd;
        border: 1.3px solid #a3cfbb;
        color: #0a3622;
      `;
    case 'error':
      return css`
        background: #f8d7da;
        border: 1.3px solid #f1aeb5;
        color: #58151c;
      `;
    case 'warning':
      return css`
        border: 1.3px solid #ffe002;
        background: #fffce1;
        color: #664d03;
      `;
    case 'info':
      return css`
        border: 1.3px solid #aad5e2;
        background: #f3f8ff;
        color: #585858;
      `;
    case 'light':
      return css`
        border: 1.3px solid #d3d7db;
        background: #e2e6ea;
        color: #585858;
      `;
    case 'dark':
      return css`
        background: #ced4da;
        border: 1.3px solid #adb5bd;
        color: #495057;
      `;
  }
};

export const getPopupAnimation = (position: PositionedToast, duration: number) => {
  return css`
    ${position.includes('top') ? 'top: 0' : 'bottom: 0'};
    ${position.includes('left') && 'left: 0'};
    ${position.includes('right') && 'right: 0'};
    ${position.includes('center') && 'left: 50%; transform: translateX(-50%);'};

    animation:
      fadeIn ${duration}s,
      PopUp 1s forwards;

    @keyframes fadeIn {
      0% {
        opacity: 0;
      }
      50% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }

    ${popup(position)}
  `;
};

const popup = (position: PositionedToast) => {
  const column = position.includes('top') ? 'top' : 'bottom';
  const row = position.includes('center')
    ? 'center'
    : position.includes('right')
    ? 'right'
    : 'left';

  return css`
    @keyframes PopUp {
      from {
        ${row === 'center' ? `${column}: 0; left: 50%;` : `${column}: 10%; ${row}: 0;`}
      }
      to {
        ${column}: 10%;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  `;
};
