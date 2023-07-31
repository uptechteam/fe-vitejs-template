import { FormControlLabel, Radio } from '@mui/material';
import { useController } from 'react-hook-form';

import { CheckedRadioIcon, UncheckedRadioIcon } from '~/components/atoms';

import { IProps } from './types';

export const RadioButtonWithLabel = <T extends object>({
  name,
  control,
  label,
  onChange,
  ...props
}: IProps<T>) => {
  const { field } = useController({
    name,
    control,
  });

  return (
    <FormControlLabel
      label={label}
      control={
        <Radio
          {...field}
          checked={field.value}
          onChange={({ target: { value: fieldValue } }) => {
            field.onChange(fieldValue);
            if (onChange) {
              onChange(fieldValue);
            }
          }}
          checkedIcon={<CheckedRadioIcon />}
          icon={<UncheckedRadioIcon />}
        />
      }
      {...props}
    />
  );
};
