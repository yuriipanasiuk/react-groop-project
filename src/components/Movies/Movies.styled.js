import styled from 'styled-components';

export const List = styled.ul`
  display: grid;

  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(7, 1fr);
  row-gap: 24px;
  justify-items: center;
  list-style: none;
`;
