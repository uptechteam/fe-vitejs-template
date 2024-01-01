// TODO: Uncomment commented lines in order to use this component
import { FormHelperText, Typography } from '@mui/material';
import Box from '@mui/material/Box';
// import { DateTimePicker as MuiDateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
// import dayjs from 'dayjs';
import { useController } from 'react-hook-form';

// import CalendarIcon from '~/assets/svgs/calendar.svg?react';
import { InputLabel } from '../InputLabel';
import { IProps } from './types';

export const DateTimePicker = <T extends object>({
  control,
  name,
  label,
  // minDate,
  helperText = '',
}: IProps<T>) => {
  const {
    // field,
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  const errorMessage = error?.message;

  // const [open, setOpen] = useState(false);

  return (
    <Box width="100%">
      {label && (
        <InputLabel htmlFor={name} error={!!errorMessage}>
          {label}
        </InputLabel>
      )}
      {/* <MuiDateTimePicker
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        value={field.value ? dayjs(field.value as Date).utc() : null}
        onChange={(newValue) =>
          field.onChange(newValue ? dayjs(newValue)?.utc()?.format() : null)
        }
        format="MM/DD/YYYY, hh:mm A"
        minDate={minDate}
        slots={{ openPickerIcon: CalendarIcon }}
        slotProps={{
          textField: {
            onClick: () => setOpen(true),
            // placeholder: '', TODO test field without placeholder
          },
        }}
      /> */}

      <Typography color="text.disabled" mt={1.5}>
        {helperText}
      </Typography>

      {errorMessage && <FormHelperText error>{errorMessage}</FormHelperText>}
    </Box>
  );
};
