import { InputLabel as MuiInputLabel, InputLabelProps } from '@mui/material';
import { FC } from 'react';

export const InputLabel: FC<InputLabelProps> = ({ children, ...props }) => {
  return (
    <MuiInputLabel {...props} sx={{ whiteSpace: 'normal', overflow: 'unset' }}>
      {children}
    </MuiInputLabel>
  );
};
