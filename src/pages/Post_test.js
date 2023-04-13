import React, { Component } from 'react'
import * as answer from '../components/answers.js'

export class Post_test extends Component {
  check = (event) =>{
    event.preventDefault();
    var answers=[];
    let marks=0;
    for(let i =0;i<5;i++){
      let q='input[name=question'+i+']:checked';
      answers.push(document.querySelector(q).value);
      if(answers[i]===answer.posttest[i]){
        marks++;
      }
    }
    alert("Your Score: "+marks+"/5");
  }
  render(){
  return (
    <div className="container" align="center">
      <br/>
      <h4>Post-Test</h4>
      <br/>
      <form onSubmit= {this.check}>
      <div className="row" id="quiz">
      <div className="col-md-9 offset-md-1 col-12" align="left">
        <div className="question">
          <b>Q1. In BPSK, the ________ of constant amplitude carrier signal is switched between two values according to the two possible values.</b>
        </div>
        <div className="answers">
          <label>
            <input type="radio" name="question0" value="a" autocomplete="off" required/> a : Amplitude 
          </label>
          <br/>
          <label>
            <input type="radio" name="question0" value="b" autocomplete="off"/> b : Angle
          </label>
          <br/>
          <label>
            <input type="radio" name="question0" value="c" autocomplete="off"/> c : Phase 
          </label>
          <br/>
          <label>
            <input type="radio" name="question0" value="d" autocomplete="off"/> d : Frequency 
          </label>
        </div>
        <br/>
        <div className="question">
          <b>Q2. BPSK uses non-coherent demodulator.</b>
        </div>
        <div className="answers">
          <label>
            <input type="radio" name="question1" value="a" autocomplete="off" required/> a : True
          </label>
          <br/>
          <label>
            <input type="radio" name="question1" value="b" autocomplete="off"/> b : False
          </label>
          <br/>
        </div>
        <br/>
        <div className="question">
          <b>Q3. The data rate of QPSK is ___________ of BPSK.</b>
        </div>
        <div className="answers">
          <label>
            <input type="radio" name="question2" value="a" autocomplete="off" required/> a : Thrice
          </label>
          <br/>
          <label>
            <input type="radio" name="question2" value="b" autocomplete="off"/> b : Four Times
          </label>
          <br/>
          <label>
            <input type="radio" name="question2" value="c" autocomplete="off"/> c : Same
          </label>
          <br/>
          <label>
            <input type="radio" name="question2" value="d" autocomplete="off"/> d : Twice
          </label>
        </div>
        <br/>
        <div className="question">
          <b>19. Which of the following is/are the advantages of BPSK.<br/>
              i) BPSK has a bandwidth which is lower than that of the BPSK signal.<br/>
              ii) BPSK is relatively easy to implement <br/>
              iii) BPSK has a very good noise immunity.<br/>
          </b>
        </div>
        <div className="answers">
          <label>
            <input type="radio" name="question3" value="a" autocomplete="off" required/> a : i and ii only
          </label>
          <br/>
          <label>
            <input type="radio" name="question3" value="b" autocomplete="off"/> b : i and iii only
          </label>
          <br/>
          <label>
            <input type="radio" name="question3" value="c" autocomplete="off"/> c : ii and iii only
          </label>
          <br/>
          <label>
            <input type="radio" name="question3" value="d" autocomplete="off"/> d : All i, ii and iii
          </label>
        </div>
        <br/>
        <div className="question">
          <b>Q5. Which of the following is/are the basic types of modulation techniques for transmission of digital signals.
            i) Amplitude Shift Keying(ASK)<br/>
            ii) Frequency Shift Keying(FSK)<br/>
            iii) Phase Shift Keying(PSK)<br/>
          </b>
        </div>
        <div className="answers">
          <label>
            <input type="radio" name="question4" value="a" autocomplete="off" required/> a : i and ii only
          </label>
          <br/>
          <label>
            <input type="radio" name="question4" value="b" autocomplete="off"/> b : ii and iii only
          </label>
          <br/>
          <label>
            <input type="radio" name="question4" value="c" autocomplete="off"/> c : i and iii only
          </label>
          <br/>
          <label>
            <input type="radio" name="question4" value="d" autocomplete="off"/> d : All i, ii and iii
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

export default Post_test