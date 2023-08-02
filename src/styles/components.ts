import type { Components } from '@mui/material';

export const components: Components = {
  MuiCssBaseline: {
    styleOverrides: {}, // TODO: update this object if needed
  },
  MuiAutocomplete: {
    styleOverrides: {
      root: {
        '& .MuiOutlinedInput-root .MuiAutocomplete-input': {
          padding: '0',
        },
      },
    },
  },
};
