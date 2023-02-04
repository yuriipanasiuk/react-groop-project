import styled from 'styled-components';

export const Container = styled.div`
  width: 1280px;
  padding-top: 60px;
  padding-bottom: 60px;
  padding-left: 30px;
  padding-right: 30px;
  margin-left: auto;
  margin-right: auto;
`;

export const List = styled.ul`
  display: grid;

  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(7, 1fr);
  row-gap: 24px;
  justify-items: center;
  list-style: none;
`;
