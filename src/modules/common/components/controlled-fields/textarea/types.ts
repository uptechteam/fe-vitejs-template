import { BoxProps, TextareaAutosizeProps } from '@mui/material';
import { Control, Path } from 'react-hook-form';

export interface IProps<T extends object> extends TextareaAutosizeProps {
  control: Control<T, object>;
  name: Path<T>;
  placeholder?: string;
  disabled?: boolean;
  outsideError?: string;
  label?: string;
  maxLength?: number;
  wrapProps?: BoxProps;
}
