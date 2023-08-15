import type { Meta } from '@storybook/react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Error from './Error';

const meta = {
  component: Error,
} satisfies Meta<typeof Error>;

export default meta;

export const Default = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
