import styled from 'styled-components';

export const Image = styled.img`
  margin-bottom: 12px;
  border-radius: 5px;
`;

export const Span = styled.span`
  margin-left: 8px;
  margin-right: 8px;
  color: orange;
`;

export const FilmTitle = styled.h2`
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  text-transform: uppercase;
  margin-bottom: 4px;
`;

export const GenreType = styled.p`
  color: orange;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
`;

export const ProdYear = styled.p`
  color: orange;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
`;

export const Item = styled.li`
  padding-bottom: 12px;

  transition: scale 250ms cubic-bezier(0.075, 0.82, 0.165, 1);

  :hover {
    scale: 1.02;
    box-shadow: 10px 7px 13px -6px rgb(255 107 8 / 72%);
    border-radius: 5px;
  }
`;

export const ModalImage = styled.img`
  margin-right: 16px;
`;

export const ModalFilmTitle = styled.h2`
  margin-bottom: 20px;

  font-weight: 500;
  font-size: 30px;
  line-height: 1.17;
  text-transform: uppercase;
`;

export const VoteTitle = styled.span`
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;
  color: #8c8c8c;
`;

export const VoteAvarageText = styled.span`
  font-weight: 500;
  font-size: 12px;
  line-height: 1.17;
  background-color: #ff6b01;
  border-radius: 5px;
`;

export const VoteCountText = styled.span`
  font-weight: 500;
  font-size: 12px;
  line-height: 1.17;
`;

export const List = styled.ul`
  list-style: none;
`;

export const AboutText = styled.p`
  text-align: justify;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.67;
`;
export const AboutTitle = styled.p`
  margin-bottom: 8px;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.67;
  text-transform: uppercase;
`;

export const ModalItem = styled.li`
  margin-bottom: 10px;
  grid-template-columns: 100px auto auto auto;
  justify-content: start;
  display: grid;
`;
