import styled from 'styled-components';

import bgImage from '../../img/stars.jpg';

export const StyledTetrisWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${bgImage}) #000;
  background-size: cover;
  background-position: center;
  overflow: hidden;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: scroll;
  }
`;

export const StyledTetris = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 40px;
  margin: 0 auto;
  max-width: 900px;

  aside {
    width: 100%;
    max-width: 250px;
    display: block;
    padding: 0 20px;
  }

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    /* padding-top: 10px;
    padding-bottom: 10px; */

    aside {
      max-width: 100%;
      min-height: 104px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      align-items: center;
    }
  }
`;
