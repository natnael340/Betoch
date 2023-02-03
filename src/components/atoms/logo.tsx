import React from 'react';
import {SvgCss} from 'react-native-svg';

type props = {
  color: string;
  size?: number;
};
const logo = ({color, size}: props) => {
  const xml = `
    <svg width="124" height="124" viewBox="0 0 124 124" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M61.9999 93V77.5" stroke="${color}" stroke-width="5.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M52.0313 14.5619L16.2263 43.2368C12.1963 46.4402 9.61297 53.2085 10.4913 58.2718L17.363 99.3985C18.603 106.735 25.6296 112.677 33.0697 112.677H90.9364C98.3247 112.677 105.403 106.684 106.643 99.3985L113.515 58.2718C114.341 53.2085 111.758 46.4402 107.78 43.2368L71.9747 14.6135C66.4464 10.1702 57.508 10.1702 52.0313 14.5619Z" stroke="${color}" stroke-width="5.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;
  return <SvgCss xml={xml} width={size || 124} height={size || 124} />;
};

export default logo;
