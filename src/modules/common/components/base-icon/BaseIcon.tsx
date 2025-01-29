import { SvgIcon, SvgIconProps } from '@mui/material';
import { FC } from 'react';

export const BaseIcon: FC<SvgIconProps> = ({
  width,
  height,
  children,
  viewBox,
  ...props
}) => (
  <SvgIcon
    width={width}
    height={height}
    viewBox={viewBox || `0 0 ${width} ${height}`}
    {...props}
    sx={{
      ...props.sx,
      width: `${width}px`,
      height: `${height}px`,
    }}
  >
    {children}
  </SvgIcon>
);
