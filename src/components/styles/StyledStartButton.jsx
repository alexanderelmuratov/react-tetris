import styled from 'styled-components';

export const StyledStartButton = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 30px;
  padding: 20px;
  border: none;
  border-radius: 20px;
  color: #fff;
  background: #333;
  font-family: Pixel, Arial, Helvetica, sans-serif;
  font-size: 1.5rem;
  outline: none;
  cursor: pointer;
  transition: all cubic-bezier(0.4, 0, 0.2, 1) 250ms;

  &:hover {
    color: #000;
    background: #fff;
  }

  @media (max-width: 768px) {
    width: 48%;
    font-size: 0.7rem;
    padding: 5px 20px;
    margin: 0 0 20px 0;
  }
`;
