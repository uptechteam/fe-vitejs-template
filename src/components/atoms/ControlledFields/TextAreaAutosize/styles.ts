import { styled, TextareaAutosize } from '@mui/material';

export const StyledTextareaAutosize = styled(TextareaAutosize)`
  width: 100%;
  border-radius: 5px;
  border: none;
  outline: none;
  line-height: 20px;
  padding: 12px;
  resize: none;

  &::placeholder {
    font-size: 18px;
    line-height: 20px;
  }
`;
