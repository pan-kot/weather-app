import styled from 'styled-components';

export const ItemButton = styled.button`
  cursor: pointer;

  width: 150px;

  background: none;
  border: none;
  border-radius: 4px;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  &:focus {
    outline: none;
  }

  transition-property: background;
  transition-duration: 200ms;
`;
