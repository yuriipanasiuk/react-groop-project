import styled from 'styled-components';
import { BiCopyright } from 'react-icons/bi';
import { AiFillHeart } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export const CopyIcon = styled(BiCopyright)`
  margin-right: 8px;
`;

export const HeartIcon = styled(AiFillHeart)`
  margin-right: 8px;
  margin-left: 8px;
  color: orange;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1280px;
  margin-left: auto;
  margin-right: auto;
`;

export const Layout = styled.div`
  padding-top: 30px;
  padding-bottom: 30px;
  background-color: #f7f7f7;
`;

export const Text = styled.p`
  font-size: 16px;
  line-height: 1.19;
  color: #545454;
`;

export const StyledLink = styled(Link)`
  /* text-decoration: none; */
  margin-left: 8px;
  color: #545454;
  transition: color 250ms cubic-bezier(0.075, 0.82, 0.165, 1);

  :hover {
    color: orange;
  }
`;
