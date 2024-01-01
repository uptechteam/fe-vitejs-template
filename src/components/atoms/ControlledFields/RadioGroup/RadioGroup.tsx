import {
  Box,
  FormControlLabel,
  FormHelperText,
  Radio,
  RadioGroup as MuiRadioGroup,
} from '@mui/material';
import { useController } from 'react-hook-form';

import CheckedRadioIcon from '~/assets/svgs/checked-radio.svg?react';
import UncheckedRadioIcon from '~/assets/svgs/unchecked-radio.svg?react';

import { InputLabel } from '../InputLabel';
import { IProps } from './types';

export const RadioGroup = <T extends object>({
  options = [],
  name,
  control,
  outsideError,
  label,
  horizontal,
  radioButtonProps = {},
  sx = {},
  wrapProps = {},
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

      <MuiRadioGroup
        {...field}
        aria-labelledby={'${field.name}-label'}
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
                {...radioButtonProps}
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
