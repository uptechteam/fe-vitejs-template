import { FormControlLabel, FormHelperText, Radio } from '@mui/material';
import { useController } from 'react-hook-form';

import { CheckedRadioIcon, UncheckedRadioIcon } from '~/components/atoms';

import { IProps } from './types';

export const RadioButtonWithLabel = <T extends object>({
  name,
  control,
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

  const errorMessage = error?.message;

  return (
    <>
      <FormControlLabel
        label={label}
        control={
          <Radio
            {...field}
            checked={field.value}
            onChange={({ target: { value: fieldValue } }) => {
              field.onChange(fieldValue);
            }}
            checkedIcon={<CheckedRadioIcon />}
            icon={<UncheckedRadioIcon />}
          />
        }
        {...props}
      />
      {errorMessage && <FormHelperText error>{errorMessage}</FormHelperText>}
    </>
  );
};
