import { Checkbox, FormControlLabel } from '@mui/material';
import { useController } from 'react-hook-form';

import { CheckedIcon } from '../../Icons/CheckedIcon';
import { CheckboxSpan } from './styles';
import { IProps } from './types';

export const CheckboxWithLabel = <T extends object>({
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
        <Checkbox
          {...field}
          checked={field.value}
          onChange={({ target: { checked: targetChecked } }) => {
            field.onChange(targetChecked);
            if (onChange) {
              onChange(targetChecked);
            }
          }}
          checkedIcon={
            <CheckboxSpan>
              <CheckedIcon />
            </CheckboxSpan>
          }
          icon={<CheckboxSpan />}
        />
      }
      {...props}
    />
  );
};
