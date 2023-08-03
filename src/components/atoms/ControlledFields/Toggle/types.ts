import { SwitchProps } from '@mui/material';
import { Control, Path } from 'react-hook-form';

export interface IProps<T> extends SwitchProps {
  name: Path<T>;
  control: Control<T, object>;
  placeholder?: string;
  disabled?: boolean;
  label?: string;
}
