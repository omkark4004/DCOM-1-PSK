import React from 'react'

function Theory() {
  return (
    <div className="container" align="center">
      <br/>
      <h4>Theory</h4>
      <br/>
        <p align="justify">
        With a choice of ASK, FSK and BPSK you might be wondering about which system you'll most likely see. All other things being equal, BPSK is the best performing system in terms of its ability to ignore noise and so it produces the fewest errors at the receiver. 
        FM is the next best and AM is the worst. On that basis, you'd expect that BPSK is the preferred system. However, it's not necessarily the easiest to implement and so in some situations FSK or ASK might be used as they are cheaper to implement. 
        In fact, FSK was used for cheaper dial-up modems. </p>
        
        <p align="justify">
          <b>Phase Shift Keying</b>  is the digital modulation technique in which the phase of the carrier signal is changed by varying the sine and cosine inputs at a particular time. PSK technique is widely used for wireless LANs, bio-metric, contactless operations, along with RFID and Bluetooth communications.
        </p>

        <p align="justify">
          <b>Binary Phase Shift Keying</b>
          <br/>
          <p align="justify">
          This is also called as 2-phase PSK or Phase Reversal Keying. In this technique, the sine wave carrier takes two phase reversals such as 0° and 180°.
          <br/>
          BPSK is basically a Double Side Band Suppressed Carrier DSBSC modulation scheme, for message being the digital information.
          </p>
        </p>

        <br/>
        <p align="justify">
          <b>BPSK Modulator</b>
          <br/>
          The block diagram of Binary Phase Shift Keying consists of the balance modulator which has the carrier sine wave as one input and the binary sequence as the other input. Following is the diagrammatic representation.
        </p>
        <figure>
          <img src={require("../img/bpsk.png")} width="475" height="325" margin="0%"></img>
          <figcaption >
            <b>Fig.1 Block Diagram of BPSK Modulator</b></figcaption>
        </figure>
        <br/>
        <p align="justify">
          The modulation of BPSK is done using a balance modulator, which multiplies the two signals applied at the input. For a zero binary input, the phase will be 0° and for a high input, the phase reversal is of 180°.
          <br/><br/>
          Following is the diagrammatic representation of BPSK Modulated output wave along with its given input.
        </p>

        <figure>
          <img src={require("../img/modulated-bpsk.png")} width="550" height="325" margin="0%"></img>
          <figcaption >
            <b>Fig.2 BPSK Modulated output wave</b></figcaption>
        </figure>

        <br/>
        <p align="justify">
          <b>BPSK Demodulator</b>
          <br/>
          The block diagram of BPSK demodulator consists of a mixer with local oscillator circuit, a bandpass filter, a two-input detector circuit. The diagram is as follows.
        </p>

        <figure>
          <img src={require("../img/bpsk-deM.png")} width="500" height="300" margin="0%"></img>
          <figcaption >
            <b>Fig.3 Block Diagram of BPSK Demodulator</b></figcaption>
        </figure>

        <br/>
        <p align="justify">
          By recovering the band-limited message signal, with the help of the mixer circuit and the band pass filter, the first stage of demodulation gets completed. The base band signal which is band limited is obtained and this signal is used to regenerate the binary message bit stream.
          <br/><br/>
          In the next stage of demodulation, the bit clock rate is needed at the detector circuit to produce the original binary message signal. If the bit rate is a sub-multiple of the carrier frequency, then the bit clock regeneration is simplified. To make the circuit easily understandable, a decision-making circuit may also be inserted at the 2nd stage of detection.
        </p>

        <br/>
        
    </div>
  )
}

export default Theory