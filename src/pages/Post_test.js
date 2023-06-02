import React, { useState } from 'react';
import {
  Box,
  Typography,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Button,
  Grid,
} from '@mui/material';
import * as answer from '../utils/answers.js';

function Post_test() {
  const [selectedOptions, setSelectedOptions] = useState({
    question1: '',
    question2: '',
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Selected options:', selectedOptions);
    setSelectedOptions({
      question1: '',
      question2: '',
    });
  };
  const handleOptionChange = (questionId, option) => {
    setSelectedOptions((prevSelectedOptions) => ({
      ...prevSelectedOptions,
      [questionId]: option,
    }));
  };
  return (
    <Box sx={{ flexGrow: 1, mx: 5 }}>
      <Typography variant="h5" gutterBottom>
        Post Test
      </Typography>
      <form onSubmit={handleSubmit}>
        <h3>Q1:</h3>
        <FormControl component="fieldset" fullWidth>
          <RadioGroup
            value={selectedOptions['question1']}
            onChange={(event) =>
              handleOptionChange('question1', event.target.value)
            }
          >
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <FormControlLabel
                  value="option1"
                  control={<Radio />}
                  label="Option 1"
                />
              </Grid>
              <Grid item xs={6}>
                <FormControlLabel
                  value="option2"
                  control={<Radio />}
                  label="Option 2"
                />
              </Grid>
              <Grid item xs={6}>
                <FormControlLabel
                  value="option3"
                  control={<Radio />}
                  label="Option 3"
                />
              </Grid>
              <Grid item xs={6}>
                <FormControlLabel
                  value="option4"
                  control={<Radio />}
                  label="Option 4"
                />
              </Grid>
            </Grid>
          </RadioGroup>
        </FormControl>
        <Button variant="contained" type="submit">Submit</Button>
      </form>
    </Box>
  );
}

export default Post_test;
