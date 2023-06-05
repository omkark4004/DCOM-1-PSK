import React from 'react';
import { Box, Typography } from '@mui/material';

function Theory() {
  return (
    <Box mx={5}>
      <Box sx={{ fontWeight: 'bold', textAlign: 'center', m: 3 }}>Theory</Box>
      <Typography variant="body1" align="justify" marginBottom={1}>
      The modulation of digital signals is a process involving switching 
      (keying) the amplitude, frequency or phase of a sinusoidal carrier 
      in some way in accordance with the incoming digital data. 
      </Typography>

      <Typography variant="body1" align="justify" marginBottom={1}>
      Three basic schemes exist:<br/> 
      • Amplitude shift keying (ASK)<br/> 
      • Frequency shift keying (FSK)<br/> 
      • Phase shift keying (PSK)
      </Typography>

      <Typography variant="body1" align="justify" marginBottom={1}>
      In PSK, the phase of the carrier signal is switched between 2 
      (for BinaryPSK) or more (for M-aryPSK) in response to the 
      baseband digital data. With PSK the information is contained in 
      the instantaneous phase of the modulated carrier. Usually this 
      phase is imposed and measured with respect to a fixed carrier of 
      known phase – Coherent PSK.
      </Typography>

      <Typography variant="body1" align="justify" marginBottom={1}>
      For binary PSK, phase states of 0° and 180° are used.
      </Typography>
      
      <Box
        component="img"
        sx={{
          height: 233,
          width: 350,
          maxHeight: { xs: 233, md: 167 },
          maxWidth: { xs: 350, md: 250 },
        }}
        alt="The house from the offer."
        src={require('../img/bpsk.png')}
      />

      <p align="justify">
        <b>Binary Phase Shift Keying</b>
        <br />
        <p align="justify">
          This is also called as 2-phase PSK or Phase Reversal Keying. In this
          technique, the sine wave carrier takes two phase reversals such as 0°
          and 180°.
          <br />
          BPSK is basically a Double Side Band Suppressed Carrier DSBSC
          modulation scheme, for message being the digital information.
        </p>
      </p>

      <br />
      <p align="justify">
        <b>BPSK Modulator</b>
        <br />
        The block diagram of Binary Phase Shift Keying consists of the balance
        modulator which has the carrier sine wave as one input and the binary
        sequence as the other input. Following is the diagrammatic
        representation.
      </p>
      <figure>
        <img
          src={require('../img/bpsk.png')}
          width="475"
          height="325"
          margin="0%"
        ></img>
        <figcaption>
          <b>Fig.1 Block Diagram of BPSK Modulator</b>
        </figcaption>
      </figure>
      <br />
      <p align="justify">
        The modulation of BPSK is done using a balance modulator, which
        multiplies the two signals applied at the input. For a zero binary
        input, the phase will be 0° and for a high input, the phase reversal is
        of 180°.
        <br />
        <br />
        Following is the diagrammatic representation of BPSK Modulated output
        wave along with its given input.
      </p>

      <figure>
        <img
          src={require('../img/modulated-bpsk.png')}
          width="550"
          height="325"
          margin="0%"
        ></img>
        <figcaption>
          <b>Fig.2 BPSK Modulated output wave</b>
        </figcaption>
      </figure>

      <br />
      <p align="justify">
        <b>BPSK Demodulator</b>
        <br />
        The block diagram of BPSK demodulator consists of a mixer with local
        oscillator circuit, a bandpass filter, a two-input detector circuit. The
        diagram is as follows.
      </p>

      <figure>
        <img
          src={require('../img/bpsk-deM.png')}
          width="500"
          height="300"
          margin="0%"
        ></img>
        <figcaption>
          <b>Fig.3 Block Diagram of BPSK Demodulator</b>
        </figcaption>
      </figure>

      <br />
      <p align="justify">
        By recovering the band-limited message signal, with the help of the
        mixer circuit and the band pass filter, the first stage of demodulation
        gets completed. The base band signal which is band limited is obtained
        and this signal is used to regenerate the binary message bit stream.
        <br />
        <br />
        In the next stage of demodulation, the bit clock rate is needed at the
        detector circuit to produce the original binary message signal. If the
        bit rate is a sub-multiple of the carrier frequency, then the bit clock
        regeneration is simplified. To make the circuit easily understandable, a
        decision-making circuit may also be inserted at the 2nd stage of
        detection.
      </p>

      <br />
    </Box>
  );
}

export default Theory;
