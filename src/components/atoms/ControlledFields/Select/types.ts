import { BoxProps } from '@mui/material';
import { Control, Path } from 'react-hook-form';

export interface IProps<T> extends BoxProps {
  name: Path<T>;
  control: Control<T, object>;
  options?: { value: string | number; label: string }[];
  placeholder?: string;
  type?: string;
  disabled?: boolean;
  outsideError?: string;
  label?: string;
  optional?: boolean;
}
