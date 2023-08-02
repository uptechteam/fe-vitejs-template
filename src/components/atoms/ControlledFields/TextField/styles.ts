import { InputBase, styled } from '@mui/material';

export const StyledTextField = styled(InputBase)`
  width: 100%;
  border-radius: 5px;
  outline: none;
  border: 1px solid #ced4da;

  &::placeholder {
    font-size: 18px;
    line-height: 20px;
  }

  & .MuiInputBase-input {
    padding: 10px 26px 10px 12px;
    font-size: 16;
    transition: theme.transitions.create([ 'border-color', 'box-shadow']);
  }
`;
