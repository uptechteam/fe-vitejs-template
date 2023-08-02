import { Box, FormHelperText } from '@mui/material';
import { useController } from 'react-hook-form';

import { InputLabel } from '../InputLabel';
import { SelectStyled, SelectWrap } from './styles';
import { IProps } from './types';

export const Select = <T extends object>({
  options = [],
  name,
  control,
  outsideError,
  label,
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
    <Box width="100%" {...props}>
      {label && (
        <InputLabel htmlFor={name} error={!!errorMessage}>
          {label}
        </InputLabel>
      )}
      <SelectWrap>
        <SelectStyled {...field} id={name}>
          <option value="" label=""></option>
          {options.map(({ value, label }) => (
            <option key={value} value={value} label={label}>
              {label}
            </option>
          ))}
        </SelectStyled>
      </SelectWrap>
      {errorMessage && <FormHelperText error>{errorMessage}</FormHelperText>}
    </Box>
  );
};
