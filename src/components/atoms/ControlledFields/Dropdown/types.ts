import { BoxProps, StandardTextFieldProps } from '@mui/material';
import { Control, Path } from 'react-hook-form';

export interface IProps<T> extends StandardTextFieldProps {
  name: Path<T>;
  control: Control<T, object>;
  options?: { value: string | number; label: string }[];
  placeholder?: string;
  type?: string;
  disabled?: boolean;
  outsideError?: string;
  label?: string;
  wrapProps?: BoxProps;
}
