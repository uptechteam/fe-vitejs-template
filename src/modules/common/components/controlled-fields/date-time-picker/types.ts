// import { Dayjs } from 'dayjs';
import { Control, Path } from 'react-hook-form';

export interface IProps<T extends object> {
  control: Control<T, object>;
  name: Path<T>;
  label?: string;
  // minDate?: Dayjs;
  helperText?: string;
}
