import { SvgIconProps } from '@mui/material';
import { FC } from 'react';

import { BaseIcon } from '../../BaseIcon';

export const CalendarIcon: FC<SvgIconProps> = ({ ...props }) => (
  <BaseIcon width={24} height={24} {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19 22H5C3.897 22 3 21.103 3 20V6C3 4.897 3.897 4 5 4H7V2H9V4H15V2H17V4H19C20.103 4 21 4.897 21 6V20C21 21.103 20.103 22 19 22ZM19.001 20L19 8H5V20H19.001ZM9 11H7V13H9V11ZM9 15H7V17H9V15ZM13 11H11V13H13V11ZM13 15H11V17H13V15ZM17 11H15V13H17V11ZM17 15H15V17H17V15Z"
      fill="#FFFF00"
    />
  </BaseIcon>
);
