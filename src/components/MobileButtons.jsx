import { ImArrowLeft, ImArrowRight, ImArrowDown } from 'react-icons/im';
import { GrRotateRight } from 'react-icons/gr';

import { StyledMobileButtons } from './styles/StyledMobileButtons';

export const MobileButtons = ({ move, keyUp }) => (
  <StyledMobileButtons>
    <button onClick={() => move({ keyCode: 37 })}>
      <ImArrowLeft size={30} />
    </button>
    <button onClick={() => move({ keyCode: 39 })}>
      <ImArrowRight size={30} />
    </button>
    <button
      onClick={() => {
        move({ keyCode: 40 });
        keyUp({ keyCode: 40 });
      }}
    >
      <ImArrowDown size={30} />
    </button>
    <button onClick={() => move({ keyCode: 38 })}>
      <GrRotateRight size={30} />
    </button>
  </StyledMobileButtons>
);
