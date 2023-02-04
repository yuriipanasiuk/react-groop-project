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

export const Item = styled.li`
  padding-bottom: 12px;

  transition: scale 250ms cubic-bezier(0.075, 0.82, 0.165, 1);

  :hover {
    scale: 1.02;
    box-shadow: 10px 7px 13px -6px rgb(255 107 8 / 72%);
    border-radius: 5px;
  }
`;
