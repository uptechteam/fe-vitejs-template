import {
  Box,
  FormControlLabel,
  FormHelperText,
  Radio,
  RadioGroup as MuiRadioGroup,
} from '@mui/material';
import { useController } from 'react-hook-form';

import { CheckedRadioIcon, UncheckedRadioIcon } from '~/components/atoms';

import { InputLabel } from '../InputLabel';
import { IProps } from './types';

export const RadioGroup = <T extends object>({
  options = [],
  name,
  control,
  outsideError,
  label,
  horizontal,
  sx = {},
  boxProps = {},
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
    <Box width="100%" {...boxProps}>
      {label && (
        <InputLabel htmlFor={name} error={!!errorMessage}>
          {label}
        </InputLabel>
      )}

      <MuiRadioGroup
        aria-labelledby="radio-buttons-group-label"
        name="radio-buttons-group"
        {...field}
        value={field.value || null}
        sx={{
          ...sx,
          ...(horizontal && { flexDirection: 'row', alignItems: 'center' }),
        }}
      >
        {options.map(({ label, value }) => (
          <FormControlLabel
            key={value}
            value={value}
            control={
              <Radio
                disableRipple
                color="secondary"
                checkedIcon={<CheckedRadioIcon />}
                icon={<UncheckedRadioIcon />}
              />
            }
            label={label}
          />
        ))}
      </MuiRadioGroup>
      {errorMessage && <FormHelperText error>{errorMessage}</FormHelperText>}
    </Box>
  );
};
