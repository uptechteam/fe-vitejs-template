import { Box, FormHelperText, Typography } from '@mui/material';
import { useController } from 'react-hook-form';

import { InputLabel } from '../InputLabel';
import { StyledTextareaAutosize } from './styles';
import { IProps } from './types';

export const Textarea = <T extends object>({
  name,
  control,
  placeholder,
  disabled,
  outsideError,
  label,
  maxLength = 500,
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
      <StyledTextareaAutosize
        {...field}
        {...props}
        disabled={disabled}
        id={name}
        placeholder={placeholder}
        minRows={4}
        maxLength={maxLength}
      />

      <Typography color="text.disabled">{`${
        (field.value as string)?.length || 0
      }/${maxLength}`}</Typography>

      {errorMessage && <FormHelperText error>{errorMessage}</FormHelperText>}
    </Box>
  );
};
