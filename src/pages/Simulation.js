import React, { useState, useEffect } from 'react';
import Wave from '../components/wave';
import {
  Grid,
  Box,
  TextField,
  Slider,
  Button,
  Typography,
} from '@mui/material';

export default function Simulation() {
  const [amplitude, setAmplitude] = useState(1);
  const [timePeriod, settimePeriod] = useState(2);
  const [data, setData] = useState('');
  const [count, setCount] = useState(0);
  const [chart, setChart] = useState([]);

  const handleInput = (event) => {
    let value = event.target.value;
    if (value[value.length - 1] !== '0' && value[value.length - 1] !== '1') {
      value = value.slice(0, value.length - 1);
    }
    if (value.length > 8) {
      value = value.slice(0, 8);
    }
    setData(value);
  };

  useEffect(() => {
    setChart(
      <Wave user={data} amp={amplitude} tPeriod={timePeriod} count={count} />
    );
  }, [count]);

  return (
    <Box sx={{ flexGrow: 1, mx: 5 }}>
      <Typography variant="h6" align="center" gutterBottom>
        <br />
        <b>Simulation</b>
        <br />
        <br />
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6} sm={3}>
          <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
            Amplitude
          </Typography>
          <Slider
            min={-100}
            max={100}
            defaultValue={10}
            onChange={(event, value) => {
              setAmplitude(value);
            }}
            valueLabelDisplay={true}
          />
        </Grid>
        <Grid item xs={6} sm={3}>
          <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
            Time Period
          </Typography>
          <Slider
            min={1}
            max={10}
            defaultValue={2}
            onChange={(event, value) => {
              settimePeriod(value);
            }}
            valueLabelDisplay={true}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Binary Data" value={data} onInput={handleInput} />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            onClick={() => {
              setCount(count + 1);
            }}
          >
            Submit
          </Button>
        </Grid>
        <br />
      </Grid>
      <br />
      {chart}
    </Box>
  );
}
