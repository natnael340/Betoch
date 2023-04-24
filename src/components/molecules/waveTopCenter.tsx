import React from 'react';
import WaveTopCenterAtom from '../atoms/waveTopCenter';
import WaveContainer from '../atoms/waveContainer';

const waveTopCenter = () => {
  return (
    <WaveContainer>
      <WaveTopCenterAtom />
    </WaveContainer>
  );
};

export default waveTopCenter;
