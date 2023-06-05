import React from 'react';
import { Box, Typography, useMediaQuery } from '@mui/material';

function Theory() {
  const isPhone = useMediaQuery('(max-width: 600px)');
  return (
    <Box mx={5}>
      <Box sx={{ fontWeight: 'bold', textAlign: 'center', m: 3 }}>Theory</Box>
      <Typography variant="body1" align="justify" marginBottom={1}>
      The BPSK involves the phase change of the carrier sine wave 
      between angles 0° to 180° in accordance withthe data 
      steam to be transmitted. The Binary Phase Shift Keying can 
      also be known as Phase Reversal Keying(PRK).The functionality 
      of the BPSK modulator is very similar to the BASK modulator. 
      Both use the balanced modulator to multiply the carrier with 
      modulating signal. But in contrast to BASK, the digital signal 
      applied as modulating signal to BPSK is bipolar. When the
      modulating I/P is positive then O/P of the modulator is the sine 
      wave which is in phase with the carrier where as for the negative 
      voltage levels the O/P of the modulator is out of phase with the
      carrier I/P .The unipolar to bipolar data converter converts the 
      data bit stream to bipolar stream. At the receiver the Square lo 
      opdetector circuit is used to demodulate the transmitted BPSK signal. 
      The PLL block locks to the frequency of the signal square O/P and 
      produces a clean square wave O/P of the same Frequency. To derive the 
      square wave O/P of the same frequency as the incoming BPSK signal, 
      the PLL‘s O/P is divided by two in frequency domain using the divided 
      by two circuit. From the differential bit decoder O/P is a data ‘1’ 
      when it encounters a level changes and a ‘0’when no change occurs. 
      Thus the O/P from differential bit decoder is NRZ (L) wave. 
      </Typography>
      <br/>
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
        align="center"
        sx={{
          width: isPhone ? '80%' : '40%',
          height: 'auto',
        }}
        src={require('../img/bpsk.png')}
      />

      <Typography variant="body1" align="center" marginBottom={1}>
        Fig.1 BPSK signal
      </Typography>

      <Typography variant="body1" align="justify" marginBottom={1}>
      <br/>In PSK the carrier phase changes abruptly at the beginning of 
      each signal interval while the amplitude remains constant.
      </Typography>

      <Typography variant="body1" align="justify" marginBottom={1}>
      b(t) = Binary data, in the form of Polar Non Return to Zero(NRZ) <br/> 
      Tb =  Duration of one bit<br/> 
      Eb = transmitted energy  per bit<br/> <br/> 
      </Typography>

      <Typography variant="h6">
      <b>• Transmitter</b>
      </Typography>

      <Typography variant="body1" align="justify" marginBottom={1}>
      –	Need to represent the binary sequence 0 and 1 in polar form with constant amplitudes, respectively <br/> 
      – √Eb and + √Eb <br/>           
      –	Carrier wave is with frequency fc=(nc/Tb)<br/> 
      –	Required BPSK modulated signal is at the output of the product modulator.<br/> 
      </Typography>

      <Box
        component="img"
        sx={{
          width: isPhone ? '80%' : '40%',
          height: 'auto',
        }}
        src={require('../img/blockdiagbpsk.png')}
      />

      <Typography variant="body1" align="center" marginBottom={1}>
        Fig.2 Block Diagrams for BPSK transmitter<br/>
      </Typography>

      <Typography variant="body1" align="justify" marginBottom={1}>
        BPSK signal can be written as:<br/>
      </Typography>

      <Box
        component="img"
        sx={{
          height: 90,
          width: 300,
        }}
        src={require('../img/bpskformula.png')}
      />
      <br/><br/>
      <Box
        component="img"
        sx={{
          width: isPhone ? '80%' : '40%',
          height: 'auto',
        }}
        src={require('../img/spectrum.png')}
      />
      <br/><br/>

      <Typography variant="body1" align="justify" marginBottom={1}>
      Bandwidth = Highest frequency - lowest frequency<br/>
                = (fc +f) – (fc - f) = (fc +fb) – (fc - fb)<br/> 
                = 2 fb<br/>
      </Typography>

        <br/>
    </Box>
  );
}

export default Theory;
