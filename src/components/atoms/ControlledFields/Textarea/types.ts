import { Control, Path } from 'react-hook-form';

export interface IProps<T extends object> {
  control: Control<T, object>;
  name: Path<T>;
  placeholder?: string;
  disabled?: boolean;
  outsideError?: string;
  label?: string;
  maxLength?: number;
}
