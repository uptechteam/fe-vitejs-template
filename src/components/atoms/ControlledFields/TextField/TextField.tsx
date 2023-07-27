import { Box, FormHelperText } from '@mui/material';
import { useController } from 'react-hook-form';

import { InputLabel } from '../InputLabel';
import { StyledTextField } from './styles';
import { IProps } from './types';

export const TextField = <T extends object>({
  name,
  control,
  placeholder,
  type = 'text',
  disabled,
  outsideError,
  label,
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
    <Box width="100%">
      {label && (
        <InputLabel htmlFor={name} error={!!errorMessage}>
          {label}
        </InputLabel>
      )}
      <StyledTextField
        {...field}
        disabled={disabled}
        type={type}
        id={name}
        placeholder={placeholder}
      />
      {errorMessage && <FormHelperText error>{errorMessage}</FormHelperText>}
    </Box>
  );
};
