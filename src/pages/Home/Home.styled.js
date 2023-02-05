import styled from 'styled-components';
import { ClipLoader } from 'react-spinners';
import { FaArrowAltCircleUp } from 'react-icons/fa';

export const Loader = styled(ClipLoader)`
  text-align: center;
  color: #ff6b01;
`;

export const Container = styled.div`
  width: 1280px;
  padding-top: 60px;
  padding-bottom: 60px;
  padding-left: 30px;
  padding-right: 30px;
  margin-left: auto;
  margin-right: auto;
`;

export const ToTopButton = styled.button`
  position: fixed;
  right: 20px;
  bottom: 100px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const Icon = styled(FaArrowAltCircleUp)`
  opacity: 0.6;
  color: #ff6b01;
  transition: color 250ms cubic-bezier(0.075, 0.82, 0.165, 1);
  transition: scale 250ms cubic-bezier(0.075, 0.82, 0.165, 1);

  :hover {
    opacity: 1;
    scale: 1.2;
  }
`;
