import React from 'react'

function Procedure() {
  return (
    <div className="container" align="center">
      <br/>
      <h4>Procedure</h4>
      <br/>
        <p align="justify">
        <b>Following steps should be followed to perform the Simulation: </b><br/>
        <b>Step 1:</b> Read and understand the theory of <b>Binary Phase Shift Keying.</b> <br/><br/>
        <b>Step 2:</b> After understanding the theory, attempt the pre-test to assess your knowledge and identify any gaps or misconceptions that you may have. <br/><br/>
        <b>Step 3:</b> Now, coming to the Simulation page. Understand the CD4051 pin diagram. <br/><br/>     
        <b>Step 4: </b> Select Amplitude from the range slider which ranges from -100 to 100. 
        </p>
        <p align="center">
        <figure>
          <img src={require("../img/amplitude.png")} width="300" height="125" margin="0%"></img>
        </figure> 
        </p>
        <p align="justify">
          <b>Step 5: </b> Select Frequnecy from the range slider in terms of PI which ranges from 1PI to 10 PI.
        </p>
        <p align="center">
        <figure>
          <img src={require("../img/frequency.png")} width="300" height="125" margin="0%"></img>
        </figure> 
        </p>
        <p align="justify">
          <b>Step 6: </b> Enter the binary input in Binary Data field upto maximum 10 bits. 
        </p>
        <p align="center">
        <figure>
          <img src={require("../img/binary1.png")} width="300" height="125" margin="0%"></img>
        </figure> 
        </p>
        <p align="justify">
          <b>Step 7: </b> After filling all the required fields, press <b>Submit</b> to achieve the following Graph. <br/><br/>
          <b>Example: </b> 
        </p>
        <p align="center">
        <figure>
          <img src={require("../img/simulation2.png")} width="900" height="350" margin="0%"></img>
        </figure> 
        </p>
        <br/>
      </div>
  )
}

export default Procedure