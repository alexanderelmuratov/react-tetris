import styled from 'styled-components';

export const StyledMobileButtons = styled.div`
  display: flex;
  width: 95%;
  justify-content: space-around;
  flex-wrap: wrap;

  button {
    width: 45%;
    height: 55px;
    margin: 10px 0;
    border-radius: 4px;
    outline: none;
    border: 0px;
    box-shadow: 1px 1px 4px #555;
    background: #3ba9ca;
    color: black;
    font-family: Pixel, Arial, Helvetica, sans-serif;
    font-size: 1.2rem;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;
