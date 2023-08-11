import styled from '@emotion/styled';
import Button from '@mui/material/Button';
import type { Meta } from '@storybook/react';

import { useExternalValue } from '@util/external-state';

import { toastActions, toastListStore } from '@store/toastStore';

import type { ToastProps } from './Toast';
import Toast from './Toast';
import { getToastColor } from './style';
import type { Color } from './types';

const meta = {
  title: 'Components/Toast',
  component: Toast,
  tags: ['autodocs'],
  args: {
    toastId: 0,
    message: '사용자에게 보여줄 메시지를 입력하세요',
    color: 'success',
    position: 'bottom-center',
  },
  argTypes: {
    toastId: {
      description: '토스트 고유의 id 입니다.',
    },
    message: {
      description: '원하는 글자를 입력해 테스트를 할 수 있습니다.',
    },
    position: {
      description: '선택한 위치에 따라 토스트가 나오는 방향을 선택할 수 있습니다.',
    },
    color: {
      description: '선택한 색상에 따라 토스트의 색상이 변합니다.',
    },
    css: {
      description: '원하는 css를 적용할 수 있습니다.',
    },
  },
} satisfies Meta<typeof Toast>;

export default meta;

export const Default = (args: ToastProps) => {
  const toastItems = useExternalValue<ToastProps[]>(toastListStore);
  const { showToast } = toastActions;

  const { message, position, color } = args;

  return (
    <>
      <Button variant="contained" onClick={() => showToast(message, color, position)}>
        나와라 토스트!
      </Button>
      <>
        {toastItems.map((toastItem) => (
          <Toast key={toastItem.toastId} {...toastItem} />
        ))}
      </>
    </>
  );
};

export const Colors = () => {
  return (
    <>
      <p>Primary</p>
      <S.Toast color="primary">이삭 토스트</S.Toast>
      <p>Secondary</p>
      <S.Toast color="secondary">이삭 토스트</S.Toast>
      <p>Success</p>
      <S.Toast color="success">이삭 토스트</S.Toast>
      <p>Warning</p>
      <S.Toast color="warning">이삭 토스트</S.Toast>
      <p>Error</p>
      <S.Toast color="error">이삭 토스트</S.Toast>
      <p>Info</p>
      <S.Toast color="info">이삭 토스트</S.Toast>
      <p>Light</p>
      <S.Toast color="light">이삭 토스트</S.Toast>
      <p>Dark</p>
      <S.Toast color="dark">이삭 토스트</S.Toast>
    </>
  );
};

const S = {
  Toast: styled.div<{ color: Color }>`
    width: max-content;
    max-width: 40rem;
    padding: 1.2rem 2.4rem;
    font-size: 1.5rem;
    text-align: center;
    word-break: keep-all;
    line-height: 1.5;
    border-radius: 28px;
    font-weight: 500;
    color: #fff;
    margin-bottom: 2rem;

    &:last-child {
      margin-bottom: 0;
    }

    ${({ color }) => getToastColor(color)}
  `,
};
