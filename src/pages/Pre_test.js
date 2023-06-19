import React, { Component } from 'react';
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import * as answer from '../utils/answers.js'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


export class Pre_test extends Component {
  check = (event) => {
    event.preventDefault();
    var answers = [];
    let marks = 0;
    for (let i = 0; i < 5; i++) {
      let q = 'input[name=question' + i + ']:checked';
      answers.push(document.querySelector(q).value);
      if (answers[i] === answer.pretest[i]) {
        marks++;
      }
    }
    alert("Your Score: " + marks + "/5");
  }
  render() {
    return (
      <FormControl>
        <br></br>
        <FormLabel id="demo-radio-buttons-group-label"><b>Q1. The probability of error of DPSK is ______________ than that of BPSK</b></FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="Higher"
          name="radio-buttons-group"
        >
          <FormControlLabel value="1" control={<Radio />} label="Higher" />
          <FormControlLabel value="2" control={<Radio />} label="Lower" />
          <FormControlLabel value="3" control={<Radio />} label="Same" />
          <FormControlLabel value="4" control={<Radio />} label="Not predictable" />
        </RadioGroup>
        <br></br>
        <FormLabel id="demo-radio-buttons-group-label"><b>Q2. In Binary Phase Shift Keying system, the binary symbols 1 and 0 are represented by carrier with phase shift ofK</b></FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="π/2"
          name="radio-buttons-group"
        >
          <FormControlLabel value="1" control={<Radio />} label="π/2" />
          <FormControlLabel value="2" control={<Radio />} label="π" />
          <FormControlLabel value="3" control={<Radio />} label="2π" />
          <FormControlLabel value="4" control={<Radio />} label="0" />
        </RadioGroup>

        <br></br>
        <FormLabel id="demo-radio-buttons-group-label"><b>Q3. BPSK system modulates at the rate of</b></FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="1 bit/ symbol"
          name="radio-buttons-group"
        >
          <FormControlLabel value="1" control={<Radio />} label="1 bit/ symbol" />
          <FormControlLabel value="2" control={<Radio />} label="2 bit/ symbol" />
          <FormControlLabel value="3" control={<Radio />} label="4 bit/ symbol" />
          <FormControlLabel value="4" control={<Radio />} label="None of the above" />
        </RadioGroup>

        <br></br>
        <FormLabel id="demo-radio-buttons-group-label"><b>Q4. The BPSK signal has +V volts and -V volts respectively to represent</b></FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="00 and 11 logic levels"
          name="radio-buttons-group"
        >
          <FormControlLabel value="1" control={<Radio />} label="00 and 11 logic levels" />
          <FormControlLabel value="2" control={<Radio />} label="11 and 00 logic levels" />
          <FormControlLabel value="3" control={<Radio />} label="10 and 01 logic levels " />
          <FormControlLabel value="4" control={<Radio />} label="1 and 0 logic levels" />
        </RadioGroup>

        <br></br>
        <FormLabel id="demo-radio-buttons-group-label"><b>Q5. The binary waveform used to generate BPSK signal is encoded in</b></FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="Differential coding"
          name="radio-buttons-group"
        >
          <FormControlLabel value="1" control={<Radio />} label="Differential coding" />
          <FormControlLabel value="2" control={<Radio />} label="Manchester coding" />
          <FormControlLabel value="3" control={<Radio />} label="Bipolar NRZ format" />
          <FormControlLabel value="4" control={<Radio />} label="None of the above" />
        </RadioGroup>

  
        <Button variant="contained" alignItems="center">Submit</Button>


      </FormControl>





    )


  }
}

export default Pre_test