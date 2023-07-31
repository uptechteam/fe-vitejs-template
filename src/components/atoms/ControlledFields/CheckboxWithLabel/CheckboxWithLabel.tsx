import { Checkbox, FormControlLabel, FormHelperText } from '@mui/material';
import { useController } from 'react-hook-form';

import { CheckedIcon } from '../../Icons/CheckedIcon';
import { CheckboxSpan } from './styles';
import { IProps } from './types';

export const CheckboxWithLabel = <T extends object>({
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
          <Checkbox
            {...field}
            checked={field.value}
            onChange={({ target: { checked: targetChecked } }) => {
              field.onChange(targetChecked);
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
      {errorMessage && <FormHelperText error>{errorMessage}</FormHelperText>}
    </>
  );
};
