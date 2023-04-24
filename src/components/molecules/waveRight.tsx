import React from 'react';
import WaveContainer from '../atoms/waveContainer';
import WaveRight from '../atoms/waveRight';

const waveRight = () => {
  return (
    <WaveContainer style={{top: -60}}>
      <WaveRight />
    </WaveContainer>
  );
};

export default waveRight;
