import { SvgIconProps } from '@mui/material';
import { FC } from 'react';

import { BaseIcon } from '../../BaseIcon';

export const UncheckedRadioIcon: FC<SvgIconProps> = ({ ...props }) => (
  <BaseIcon width={28} height={28} {...props}>
    <circle cx="14" cy="14" r="14" fill="#1976d2" />
  </BaseIcon>
);
