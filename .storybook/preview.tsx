import { CssBaseline } from '@mui/material';
import type { Preview } from '@storybook/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import React from 'react';

import '../src/common.css';

const queryClient = new QueryClient();

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    viewport: {
      defaultViewport: 'desktop',
      viewports: {
        iphone6: {
          name: 'iPhone SE',
          styles: {
            width: '375px',
            height: '667px',
          },
        },
        ipad: {
          name: 'IPad',
          styles: {
            width: '768px',
            height: '1024px',
          },
        },
        desktop: {
          name: 'Desktop',
          styles: {
            width: '1440px',
            height: '900px',
          },
        },
      },
    },
    backgrounds: {
      default: 'white',
      values: [
        {
          name: 'white',
          value: '#fff',
        },
        {
          name: 'black',
          value: '#000',
        },
      ],
    },
    decorators: [
      (Story) => (
        <React.Fragment>
          <CssBaseline />
          <QueryClientProvider client={queryClient}>
            <Story />
          </QueryClientProvider>
        </React.Fragment>
      ),
    ],
  },
};

export default preview;
