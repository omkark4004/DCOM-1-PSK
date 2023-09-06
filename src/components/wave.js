import React, { useEffect, useRef } from 'react';
import {
  emptyChart,
  sineWave,
  BipolarWave,
  bpskWave,
} from '../utils/ChartData';
import { setAnimation, chartConfig } from '../utils/ChartFunc';
import { Grid } from '@mui/material';

export const Wave = (props) => {
  const user = [];
  const tmp = props.user;
  for (let i = 0; i !== tmp.length; i++) {
    user.push(parseInt(tmp[i]));
  }
  const Amplitude = props.amp;
  const timePeriod = props.tPeriod;

  var sineData, binData, bpskData;
  let k = 2 * user.length;
  if (k) {
    sineData = sineWave(user, timePeriod, Amplitude);
    binData = BipolarWave(user, timePeriod);
    bpskData = bpskWave(user, timePeriod, Amplitude);
  } else {
    sineData = emptyChart();
    binData = emptyChart();
    bpskData = emptyChart();
  }

  const sineCanvasRef = useRef(null);
  const binCanvasRef = useRef(null);
  const bpskCanvasRef = useRef(null);

  useEffect(() => {
    const sineCanvas = sineCanvasRef.current;
    const binCanvas = binCanvasRef.current;
    const bpskCanvas = bpskCanvasRef.current;

    const sineTable = sineCanvas.getContext('2d');
    const binTable = binCanvas.getContext('2d');
    const bpskTable = bpskCanvas.getContext('2d');

    const sineChart = chartConfig(
      sineTable,
      sineData,
      setAnimation(k, sineData, 'Sine Wave')
    );
    const binChart = chartConfig(
      binTable,
      binData,
      setAnimation(k, binData, 'Bipolar Wave')
    );
    const bpskChart = chartConfig(
      bpskTable,
      bpskData,
      setAnimation(k, bpskData, 'BPSK Wave')
    );

    return () => {
      sineChart.destroy();
      binChart.destroy();
      bpskChart.destroy();
    };
  }, [props.count]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={4}>
        <canvas ref={sineCanvasRef} style={{ width: '100%' }}></canvas>
      </Grid>
      <Grid item xs={12} sm={4}>
        <canvas ref={binCanvasRef} style={{ width: '100%' }}></canvas>
      </Grid>
      <Grid item xs={12} sm={4}>
        <canvas ref={bpskCanvasRef} style={{ width: '100%' }}></canvas>
      </Grid>
    </Grid>
  );
};

export default Wave;
