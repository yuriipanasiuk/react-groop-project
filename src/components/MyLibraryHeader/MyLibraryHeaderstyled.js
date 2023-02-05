import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import bgImage from '../../images/libraryImg.jpg';
import { GiFilmStrip } from 'react-icons/gi';

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: ${p => p.theme.colors.white};
  font-size: 12px;
  text-transform: uppercase;
  &.active {
    color: ${p => p.theme.colors.orange};
    text-decoration: underline;
  }
  :not(.active) {
    :hover {
      color: ${p => p.theme.colors.orange};
    }
  }
  :not(:last-child) {
    margin-right: ${p => p.theme.space[5]}px;
  }
`;

export const Logo = styled(NavLink)`
  text-decoration: none;
  color: ${p => p.theme.colors.white};
  font-size: ${p => p.theme.fontSizes.xxl};
`;

export const LogoIcon = styled(GiFilmStrip)`
  color: white;
  margin-right: 12px;
`;

export const Layout = styled.div`
  height: 216px;
  background-image: url(${bgImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-color: ${p => p.theme.colors.headerBgColor};
`;

export const Container = styled.div`
  width: 1280px;
  padding-top: 40px;
  padding-left: 30px;
  padding-right: 30px;
  margin-left: auto;
  margin-right: auto;
`;
