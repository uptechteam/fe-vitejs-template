import { Button as ButtonMUI } from '@mui/material';

import { ButtonProps } from './types';

export const Button = (props: ButtonProps = {}) => {
  const { onClick } = props;
  return (
    <ButtonMUI variant="contained" id="clickMe" onClick={onClick}>
      Click me!
    </ButtonMUI>
  );
};
