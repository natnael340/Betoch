import {Text} from 'react-native';
import React, {useRef, useEffect, useState} from 'react';
import {primary} from '../../assets/colors';

type Props = {
  initialValue?: number;
  resetInitialValue?: () => void;
};
const Timer = ({initialValue, resetInitialValue}: Props) => {
  const [timerSec, setTimerSec] = useState(initialValue);
  const timerSecRef = useRef(timerSec);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log(timerSecRef.current);
      if (initialValue === undefined || initialValue === 0) {
        clearInterval(interval);
        return;
      }
      timerSecRef.current =
        timerSecRef.current !== undefined
          ? timerSecRef.current - 1
          : timerSecRef.current;
      if (timerSecRef.current && timerSecRef.current < 0) {
        resetInitialValue && resetInitialValue();
        clearInterval(interval);
      } else {
        setTimerSec(timerSecRef.current);
      }
    }, 1000);
    return () => clearInterval(interval);
    //eslint-disable-next-line
  }, [initialValue]);

  return initialValue !== undefined && timerSec !== undefined ? (
    <Text style={{color: primary}}>{`${Math.floor(timerSec / 60)}:${
      timerSec - Math.floor(timerSec / 60) * 60
    }`}</Text>
  ) : (
    <></>
  );
};

export default Timer;
