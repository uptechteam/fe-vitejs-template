import {
  Box,
  FormHelperText,
  Autocomplete as MuiAutoComplete,
  TextField,
} from '@mui/material';
import { AutocompleteProps, BoxProps } from '@mui/material';
import { useController } from 'react-hook-form';
import { Control, Path } from 'react-hook-form';

import { IOption } from '../checkbox-group/types';
import { InputLabel } from '../input-label';

type CustomAutoCompleteProps = Omit<
  AutocompleteProps<IOption, true, false, false>,
  'renderInput'
>;

export interface IProps<T> extends CustomAutoCompleteProps {
  name: Path<T>;
  control: Control<T, object>;
  type?: string;
  outsideError?: string;
  label?: string;
  wrapProps?: BoxProps;
  placeholder?: string;
}

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
