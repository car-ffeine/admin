import styled from '@emotion/styled';
import type { Meta } from '@storybook/react';

import { elements } from '@mock';

import type { FormProps } from './Form';
import Form from './Form';

const meta = {
  component: Form,
  tags: ['autodocs'],
  args: {
    element: elements[0],
  },
  argTypes: {
    element: {
      description: '충전소 ID는 변경할 수 없습니다.',
    },
  },
} satisfies Meta<typeof Form>;

export default meta;

export const Default = ({ element }: FormProps) => {
  return (
    <Container>
      <Form element={element} />
    </Container>
  );
};

const Container = styled.div`
  max-width: 800px;
  max-height: calc(100% - 56px);
  margin: 0 auto;
`;
