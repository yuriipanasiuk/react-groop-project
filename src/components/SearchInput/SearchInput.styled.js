import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';

import { Form, Field } from 'formik';

export const StyledForm = styled(Form)`
  position: relative;
  display: flex;
  width: 394px;
  margin-left: auto;
  margin-right: auto;
`;

export const StyledFiels = styled(Field)`
  width: 100%;
  background-color: inherit;
  border: none;
  outline: none;
  border-bottom: 0.5px solid white;
  color: white;
  font-size: 14px;

  ::placeholder {
    color: #ffffff;
    opacity: 1;
  }
`;

export const Button = styled.button`
  position: absolute;
  right: -6px;
  bottom: 0;
  cursor: pointer;
  border: none;
  background-color: transparent;
  outline: none;
`;

export const ButtonIcon = styled(AiOutlineSearch)`
  color: white;

  :hover {
    color: orange;
  }
`;
