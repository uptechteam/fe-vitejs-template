import {
  BoxProps,
  RadioGroupProps as MuiRadioGroupProps,
  SxProps,
} from '@mui/material';
import { Control, Path } from 'react-hook-form';

export interface IProps<T> extends MuiRadioGroupProps {
  options?: { value: string | number; label: string }[];
  control: Control<T, object>;
  name: Path<T>;
  placeholder?: string;
  type?: string;
  disabled?: boolean;
  outsideError?: string;
  label?: string;
  horizontal?: boolean;
  sx: SxProps;
  boxProps: BoxProps;
}
