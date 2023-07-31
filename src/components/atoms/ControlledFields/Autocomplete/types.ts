import { AutocompleteProps, BoxProps } from '@mui/material';
import { Control, Path } from 'react-hook-form';

import { IOption } from '../CheckboxGroup/types';

export interface IProps<T>
  extends AutocompleteProps<IOption, true, true, false> {
  name: Path<T>;
  control: Control<T, object>;
  type?: string;
  outsideError?: string;
  label?: string;
  wrapProps?: BoxProps;
}
