import styled from '@emotion/styled';
import type { Meta } from '@storybook/react';

import { stationEditMock } from '@mock';

import Form from './Form';

const meta = {
  component: Form,
  tags: ['autodocs'],
} satisfies Meta<typeof Form>;

export default meta;

export const Default = () => {
  return (
    <Container>
      <Form element={stationEditMock} />
    </Container>
  );
};

const Container = styled.div`
  max-width: 800px;
  max-height: calc(100% - 56px);
  margin: 0 auto;
`;
