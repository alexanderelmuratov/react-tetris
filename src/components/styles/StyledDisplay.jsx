import styled from 'styled-components';

export const StyledDisplay = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: ${props => (props.gameOver ? 'center' : 'flex-start')};
  align-items: center;
  width: 100%;
  min-height: 30px;
  padding: 20px;
  margin: 0 0 20px 0;
  border: 4px solid #333;
  border-radius: 20px;
  color: ${props => (props.gameOver ? 'red' : '#999')};
  background: #000;
  font-family: Pixel, Arial, Helvetica, sans-serif;
  font-size: ${props => (props.gameOver ? '1.7rem' : '1.3rem')};
  /* font-size: 1.3rem; */
`;