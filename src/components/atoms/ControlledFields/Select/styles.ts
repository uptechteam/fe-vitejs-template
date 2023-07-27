import { styled } from '@mui/material';

export const SelectStyled = styled('select')`
  background: url('data:image/svg+xml,<svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6 7L0 2.38419e-07L12 2.38419e-07L6 7Z" fill="yellow"/></svg>')
    no-repeat;
  background-position: calc(100% - 15px) center !important;
  height: 42px;
  font-size: 18px;
  line-height: 20px;
  outline: none;
  border: none;
  -moz-appearance: none !important;
  -webkit-appearance: none !important;
  appearance: none !important;
  padding-left: 12px;
  cursor: pointer;
  padding-top: 4px;
  width: 100%;

  option {
    background: #000000;
  }
`;

export const SelectWrap = styled('div')`
  border-radius: 5px;
`;
