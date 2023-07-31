import { BoxProps, GridProps } from '@mui/material';
import { Control, Path } from 'react-hook-form';

export interface IOption {
  label: string;
  value: string;
}

export interface IProps<T> extends BoxProps {
  name: Path<T>;
  control: Control<T, object>;
  options: IOption[];
  placeholder?: string;
  disabled?: boolean;
  label?: string;
  gridProps?: GridProps;
  gridSize?: number;
}
