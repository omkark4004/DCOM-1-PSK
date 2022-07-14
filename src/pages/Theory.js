import React from 'react'

function Theory() {
  return (
    <div className="container" align="center">
      <br></br>
      <b>Theory</b>
        <p align="justify">
          <br></br>
        With a choice of ASK, FSK and BPSK you might be wondering about which system you'll most likely see. All other things being equal, BPSK is the best performing system in terms of its ability to ignore noise and so it produces the fewest errors at the receiver. 
        FM is the next best and AM is the worst. On that basis, you'd expect that BPSK is the preferred system. However, it's not necessarily the easiest to implement and so in some situations FSK or ASK might be used as they are cheaper to implement. 
        In fact, FSK was used for cheaper dial-up modems. 
        <br></br>
        <center>
          <table border="0" width="57%">
            <tbody>
            <tr valign="top" align="center">
          <td>
            <img src="http://www.evalidate.in/lab2/images/BPSK_I/BPSK_T1.jpg"></img>
          </td>
        </tr>
            </tbody>
          </table>
        </center>
        <span>
          <center>
            <b>Fig.1 Block Diagram of BPSK generation</b>
          </center>
        </span>
        <br></br>
        To generate a BPSK signal we use the Multiplier module to implement its mathematical model shown in the Fig.1. Digital data for the message is modeled by the Sequence Generator module.
        <br></br>
        <br></br>
        In phase shift keying (PSK), the phase of a carrier is changed according to the modulating waveform which is a digital signal. In BPSK, the transmitted signal is a sinusoid of fixed amplitude. 
        It has one fixed phase when the data is at one level and when the data is at the other level, phase is different by 180 °. A Binary Phase Shift Keying ( BPSK ) signal can be defined as 
        <center>
          <table border="0" width="57%">
            <tbody>
              <tr valign="top" align="center">
                <td>
                  <img src="http://www.evalidate.in/lab2/images/BPSK_I/BPSK_T2.jpg"></img>
                </td>
                <td>
                  <br></br>
                </td>
              </tr>
            </tbody>
          </table>
        </center>
        where b(t) = +1 or -1, fc is the carrier frequency, and T is the bit duration. 
        The signal has a power P = A2 / 2 , so that A = √ 2 P, where A represents the peak value of sinusoidal carrier.
        <br></br>
        <br></br>
        Thus the above equation can be written as
        <br></br>
        <center>
          <table border="0" width="57%">
            <tbody>
              <tr valign="top" align="center">
                <td>
                  <img src="http://www.evalidate.in/lab2/images/BPSK_I/BPSK_T3.jpg"></img>
                </td>
                <td>
                  <br></br>
                </td>
              </tr>
            </tbody>
          </table>
        </center>
        where E = PT is the energy contained in the bit duration.
        <br></br>
        <br></br>
        </p>
    </div>
  )
}

export default Theory