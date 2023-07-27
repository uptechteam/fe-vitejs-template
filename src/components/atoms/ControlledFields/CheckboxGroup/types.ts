import { BoxProps, GridProps } from '@mui/material';
import { Control, Path } from 'react-hook-form';

export interface Option {
  label: string;
  value: string;
}

export interface IProps<T> extends BoxProps {
  name: Path<T>;
  control: Control<T, object>;
  options: Option[];
  placeholder?: string;
  disabled?: boolean;
  label?: string;
  gridProps?: GridProps;
  gridSize?: number;
}
