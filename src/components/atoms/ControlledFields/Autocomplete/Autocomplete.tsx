import {
  Autocomplete as MuiAutoComplete,
  Box,
  FormHelperText,
  TextField,
} from '@mui/material';
import { useController } from 'react-hook-form';

import { InputLabel } from '../InputLabel';
import { IProps } from './types';

export const Autocomplete = <T extends object>({
  options = [],
  name,
  control,
  outsideError,
  label,
  placeholder = '',
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

  console.log('field', field);

  return (
    <Box width="100%" {...wrapProps}>
      {label && (
        <InputLabel htmlFor={name} error={!!errorMessage}>
          {label}
        </InputLabel>
      )}
      <MuiAutoComplete
        {...field}
        {...props}
        options={options}
        getOptionLabel={(option) => option.label || ''}
        isOptionEqualToValue={(option, value) => option.label === value.label}
        onChange={(_, data) => field.onChange(data)}
        renderInput={(params) => (
          <TextField {...params} placeholder={placeholder} error={!!error} />
        )}
      />
      {errorMessage && <FormHelperText error>{errorMessage}</FormHelperText>}
    </Box>
  );
};
