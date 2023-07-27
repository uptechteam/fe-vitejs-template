import { styled } from '@mui/material';

export const StyledTextField = styled('input')<{ error?: boolean }>`
  height: 42px;
  width: 100%;
  border-radius: 5px;
  border: none;
  outline: none;
  font-family: 'NIKE Subtitle';
  font-weight: 500;
  font-size: 18px;
  line-height: 20px;
  text-indent: 12px;
  border: ${({ error, theme }) =>
    error ? `1px solid ${theme.palette.error.main}` : 'none'};

  &::placeholder {
    font-size: 18px;
    line-height: 20px;
  }
`;
