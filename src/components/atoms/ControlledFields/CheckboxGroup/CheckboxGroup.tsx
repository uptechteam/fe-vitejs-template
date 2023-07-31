import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  Grid,
} from '@mui/material';
import { useController } from 'react-hook-form';

import { InputLabel } from '../InputLabel';
import { IProps } from './types';

export const CheckboxGroup = <T extends object>({
  name,
  control,
  label,
  options,
  gridProps,
  gridSize = 12,
  ...props
}: IProps<T>) => {
  const {
    field: { value, onChange },
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  const errorMessage = error?.message;

  return (
    <Box width="100%" {...props}>
      {label && (
        <InputLabel htmlFor={name} error={!!errorMessage}>
          {label}
        </InputLabel>
      )}
      <FormGroup>
        <Grid container {...gridProps}>
          {options.map(({ value: optionValue, label }) => (
            <Grid item key={optionValue} xs={gridSize}>
              <FormControlLabel
                label={label}
                control={
                  <Checkbox
                    disableRipple
                    value={optionValue}
                    checked={value.includes(optionValue)}
                    onChange={(e) => {
                      const isChecked = e.target.checked;
                      if (isChecked) {
                        onChange([...value, optionValue]);
                      } else {
                        onChange(value.filter((item) => item !== optionValue));
                      }
                    }}
                  />
                }
              />
            </Grid>
          ))}
        </Grid>
      </FormGroup>
      {errorMessage && <FormHelperText error>{errorMessage}</FormHelperText>}
    </Box>
  );
};
