import { styled, TextareaAutosize } from '@mui/material';

export const StyledTextareaAutosize = styled(TextareaAutosize)`
  width: 100%;
  outline: none;
  line-height: 20px;
  padding: 12px;
  resize: none;
  border: 1px solid #ced4da;
  border-radius: 5px;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;

  &::placeholder {
    font-size: 18px;
    line-height: 20px;
  }
`;
