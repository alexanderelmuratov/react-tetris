import styled from 'styled-components';

export const StyledMobileButtons = styled.div`
  display: flex;
  width: 70%;
  justify-content: space-between;
  flex-wrap: wrap;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20%;
    height: 55px;
    /* margin: 10px 0; */
    border-radius: 50px;
    outline: none;
    border: 0px;
    box-shadow: 1px 1px 4px #555;
    background: #3ba9ca;
    color: black;
    font-family: Pixel, Arial, Helvetica, sans-serif;
    font-size: 0.8rem;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;
