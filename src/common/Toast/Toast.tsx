import type { SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';

import type { HTMLAttributes } from 'react';

import { toastActions } from '@store/toastStore';
import type { PositionedToast } from '@store/toastStore';

import { calculateToastDuration } from '@common/Toast/utils/calculateToastDuration';

import { getPopupAnimation, getToastColor } from './style';
import type { Color } from './types';

export interface ToastProps extends HTMLAttributes<HTMLDivElement> {
  toastId: number;
  message: string;
  position?: PositionedToast;
  color?: Color;
  css?: SerializedStyles;
}

interface StyleProps extends Pick<ToastProps, 'color' | 'css' | 'position'> {
  duration: number;
}

const Toast = ({ toastId, message, ...props }: ToastProps) => {
  const { deleteToast } = toastActions;

  const duration = calculateToastDuration(message);

  setTimeout(() => {
    deleteToast(toastId);
  }, duration * 1000);

  return (
    <S.Toast role="alert" aria-live="assertive" duration={duration} {...props}>
      {message}
    </S.Toast>
  );
};

const S = {
  Toast: styled.div<StyleProps>`
    position: fixed;
    width: max-content;
    max-width: 400px;
    z-index: 9999;
    padding: 12px 24px;
    font-size: 15px;
    text-align: center;
    word-break: keep-all;
    line-height: 1.5;
    border-radius: 28px;
    font-weight: 500;
    color: #fff;

    ${({ color }) => getToastColor(color)};
    ${({ position = 'bottom-center', duration }) => getPopupAnimation(position, duration)}

    ${({ css }) => css}
  `,
};

export default Toast;
