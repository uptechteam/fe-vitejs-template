import {
  BoxProps,
  RadioGroupProps as MuiRadioGroupProps,
  RadioProps,
  SxProps,
} from '@mui/material';
import { Control, Path } from 'react-hook-form';

export interface IProps<T> extends MuiRadioGroupProps {
  control: Control<T, object>;
  name: Path<T>;
  sx?: SxProps;
  wrapProps?: BoxProps;
  radioButtonProps?: RadioProps;
  options?: { value: string | number; label: string }[];
  placeholder?: string;
  type?: string;
  disabled?: boolean;
  outsideError?: string;
  label?: string;
  horizontal?: boolean;
}
