import { SvgIconProps } from '@mui/material';
import { FC } from 'react';

import { BaseIcon } from '../../BaseIcon';

export const CheckedIcon: FC<SvgIconProps> = ({ ...props }) => (
  <BaseIcon width={20} height={20} {...props}>
    <rect width="20" height="20" rx="4" fill="#fff" />
    <path
      d="M7.93869 15L4 11.4035L5.79493 9.76448L7.93869 11.7278L14.2051 6L16 7.639L7.93869 15Z"
      fill="#1976d2"
    />
  </BaseIcon>
);
