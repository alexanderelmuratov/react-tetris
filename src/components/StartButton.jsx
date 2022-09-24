import useSound from 'use-sound';
import mySound from '../audio/kalinka.mp3';

import { StyledStartButton } from './styles/StyledStartButton';

const StartButton = ({ callback }) => {
  // const [playSound, { stop }] = useSound(mySound, {
  //   volume: 0.1,
  //   loop: true,
  // });
  // console.log('playSound', playSound);

  return (
    <StyledStartButton
      onClick={() => {
        // stop();
        callback();
        // playSound();
      }}
    >
      Start Game
    </StyledStartButton>
  );
};

export default StartButton;
