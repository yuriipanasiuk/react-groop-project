import styled from 'styled-components';

export const StyledButton = styled.button`
  :not(:last-child) {
    margin-right: 16px;
  }

  width: 148px;
  height: 42px;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;
  text-transform: uppercase;
  color: ${props => props.color};
  background-color: transparent;
  border: 1px solid ${props => props.color};
  border-radius: 5px;
  cursor: pointer;

  transition: background-color 250ms cubic-bezier(0.075, 0.82, 0.165, 1);

  :hover {
    background-color: #ff6b08;
    border: none;
    color: white;
  }
`;
