import React from 'react';
import { Grid } from '@mui/material';

function Feedback() {
  return (
    <Grid container justifyContent="center">
      <iframe
        title="feedback"
        id="form"
        src="https://docs.google.com/forms/d/e/1FAIpQLScoI9bRFWPgzbddThl6kFOAijwlT3sEk2Bsk8Zy8ixunZu8gg/viewform?embedded=true"
        width="60%"
        height="900"
      >
        Loading…
      </iframe>
    </Grid>
  );
}

export default Feedback;
