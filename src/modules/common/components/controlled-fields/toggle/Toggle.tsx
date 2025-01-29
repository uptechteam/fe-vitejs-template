import { FormControlLabel, FormHelperText } from '@mui/material';
import { useController } from 'react-hook-form';

import { StyledSwitch } from './styles';
import { IProps } from './types';

export const Toggle = <T extends object>({
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
          <StyledSwitch
            disableRipple
            size="small"
            onChange={(e) => {
              field.onChange(e.target.checked);
            }}
            checked={field.value}
            {...props}
          />
        }
      />
      {errorMessage && <FormHelperText error>{errorMessage}</FormHelperText>}
    </>
  );
};
