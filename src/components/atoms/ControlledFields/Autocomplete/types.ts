import { AutocompleteProps, BoxProps } from '@mui/material';
import { Control, Path } from 'react-hook-form';

import { IOption } from '../CheckboxGroup/types';

type CustomAutoCompleteProps = Omit<
  AutocompleteProps<IOption, true, false, false>,
  'renderInput'
>;

export interface IProps<T> extends CustomAutoCompleteProps {
  name: Path<T>;
  control: Control<T, object>;
  type?: string;
  outsideError?: string;
  label?: string;
  wrapProps?: BoxProps;
}
