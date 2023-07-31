import { Box, FormHelperText, MenuItem, TextField } from '@mui/material';
import { useController } from 'react-hook-form';

import { InputLabel } from '../InputLabel';
import { IProps } from './types';

export const Dropdown = <T extends object>({
  options = [],
  name,
  control,
  outsideError,
  label,
  wrapProps = {},
  ...props
}: IProps<T>) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  const errorMessage = error?.message || outsideError;

  return (
    <Box width="100%" {...wrapProps}>
      {label && (
        <InputLabel htmlFor={name} error={!!errorMessage}>
          {label}
        </InputLabel>
      )}
      <TextField select {...field} {...props}>
        {options.map(({ label, value }) => (
          <MenuItem key={value} value={value}>
            {label}
          </MenuItem>
        ))}
      </TextField>
      {errorMessage && <FormHelperText error>{errorMessage}</FormHelperText>}
    </Box>
  );
};
