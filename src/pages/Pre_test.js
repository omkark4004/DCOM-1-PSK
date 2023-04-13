import React, { Component } from 'react'
import * as answer from '../components/answers.js'

export class Pre_test extends Component {
  check = (event) =>{
    event.preventDefault();
    var answers=[];
    let marks=0;
    for(let i =0;i<5;i++){
      let q='input[name=question'+i+']:checked';
      answers.push(document.querySelector(q).value);
      if(answers[i]===answer.pretest[i]){
        marks++;
      }
    }
    alert("Your Score: "+marks+"/5");
  }
  render(){
  return (
    <div className="container" align="center">
      <br/>
      <h4>Pre-Test</h4>
      <br/>
      <form onSubmit= {this.check}>
      <div className="row" id="quiz">
      <div className="col-md-9 offset-md-1 col-12" align="left">
        <div className="question">
          <b>Q1. The probability of error of DPSK is ______________ than that of BPSK.</b>
        </div>
        <div className="answers">
          <label>
            <input type="radio" name="question0" value="a" autocomplete="off" required/> a : Higher 
          </label>
          <br/>
          <label>
            <input type="radio" name="question0" value="b" autocomplete="off"/> b : Lower
          </label>
          <br/>
          <label>
            <input type="radio" name="question0" value="c" autocomplete="off"/> c : Same 
          </label>
          <br/>
          <label>
            <input type="radio" name="question0" value="d" autocomplete="off"/> d : Not predictable 
          </label>
        </div>
        <br/>
        <div className="question">
          <b>Q2. In Binary Phase Shift Keying system, the binary symbols 1 and 0 are represented by carrier with phase shift of</b>
        </div>
        <div className="answers">
          <label>
            <input type="radio" name="question1" value="a" autocomplete="off" required/> a : π/2
          </label>
          <br/>
          <label>
            <input type="radio" name="question1" value="b" autocomplete="off"/> b : π
          </label>
          <br/>
          <label>
            <input type="radio" name="question1" value="c" autocomplete="off"/> c : 2π
          </label>
          <br/>
          <label>
            <input type="radio" name="question1" value="d" autocomplete="off"/> d : 0
          </label>
        </div>
        <br/>
        <div className="question">
          <b>Q3. BPSK system modulates at the rate of</b>
        </div>
        <div className="answers">
          <label>
            <input type="radio" name="question2" value="a" autocomplete="off" required/> a : 1 bit/ symbol
          </label>
          <br/>
          <label>
            <input type="radio" name="question2" value="b" autocomplete="off"/> b : 2 bit/ symbol 
          </label>
          <br/>
          <label>
            <input type="radio" name="question2" value="c" autocomplete="off"/> c : 4 bit/ symbol
          </label>
          <br/>
          <label>
            <input type="radio" name="question2" value="d" autocomplete="off"/> d : None of the above 
          </label>
        </div>
        <br/>
        <div className="question">
          <b>Q4. The BPSK signal has +V volts and -V volts respectively to represent</b>
        </div>
        <div className="answers">
          <label>
            <input type="radio" name="question3" value="a" autocomplete="off" required/> a : 00 and 11 logic levels
          </label>
          <br/>
          <label>
            <input type="radio" name="question3" value="b" autocomplete="off"/> b : 11 and 00 logic levels
          </label>
          <br/>
          <label>
            <input type="radio" name="question3" value="c" autocomplete="off"/> c : 10 and 01 logic levels 
          </label>
          <br/>
          <label>
            <input type="radio" name="question3" value="d" autocomplete="off"/> d : 1 and 0 logic levels
          </label>
        </div>
        <br/>
        <div className="question">
          <b>Q5. The binary waveform used to generate BPSK signal is encoded in</b>
        </div>
        <div className="answers">
          <label>
            <input type="radio" name="question4" value="a" autocomplete="off" required/> a : Differential coding
          </label>
          <br/>
          <label>
            <input type="radio" name="question4" value="b" autocomplete="off"/> b : Manchester coding
          </label>
          <br/>
          <label>
            <input type="radio" name="question4" value="c" autocomplete="off"/> c : Bipolar NRZ format
          </label>
          <br/>
          <label>
            <input type="radio" name="question4" value="d" autocomplete="off"/> d : None of the above
          </label>
        </div>
        <br/>
        <div align="center">
        <button type={'submit'} className='btn btn-primary'>Submit</button>
        </div>
        <br/>
      </div>
      </div>
      </form>
    </div>
  )
}
}

export default Pre_test