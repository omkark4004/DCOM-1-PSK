import React, { Component } from 'react'
import * as answer from '../utils/answers.js'
import {Container} from '@mui/material';

export class Post_test extends Component {
  check = (event) => {
    event.preventDefault();
    var answers = [];
    let marks = 0;
    for (let i = 0; i < 5; i++) {
      let q = 'input[name=question' + i + ']:checked';
      answers.push(document.querySelector(q).value);
      if (answers[i] === answer.posttest[i]) {
        marks++;
      }
    }
    alert("Your Score: " + marks + "/5");
  }
  render() {
    return (
      <Container>
      <div className="container" align="center">
        <br />
        <h4>Post-Test</h4>
        <br />
        <form onSubmit={this.check}>
          <div className="row" id="quiz">
            <div className="col-md-9 offset-md-1 col-12" align="left">
              <div className="question">
                <b>Q1. What will be bandwidth requirement for Binary Phase Shift Keying system if the
                  bit frequency is 2 MHz ?</b>
              </div>
              <div className="answers">
                <label>
                  <input type="radio" name="question0" value="a" autocomplete="off" required /> a : 2 MHz
                </label>
                <br />
                <label>
                  <input type="radio" name="question0" value="b" autocomplete="off" /> b : 4 MHz
                </label>
                <br />
                <label>
                  <input type="radio" name="question0" value="c" autocomplete="off" /> c : 1 MHz
                </label>
                <br />
                <label>
                  <input type="radio" name="question0" value="d" autocomplete="off" /> d : 6 MHz
                </label>
              </div>
              <br />
              <div className="question">
                <b>Q2. The receiver for Binary Phase Shift Keying signal is __________.</b>
              </div>
              <div className="answers">
                <label>
                  <input type="radio" name="question1" value="a" autocomplete="off" required /> a : Coherent
                </label>
                <br />
                <label>
                  <input type="radio" name="question1" value="b" autocomplete="off" /> b : Non-coherent
                </label>
                <br />
                <label>
                  <input type="radio" name="question1" value="c" autocomplete="off" /> c : Duplexer
                </label>
                <br />
                <label>
                  <input type="radio" name="question1" value="d" autocomplete="off" /> d : Orthogonal
                </label>
              </div>
              <br />
              <div className="question">
                <b>Q3. The Euclidean distance for Binary Phase Shift Keying signal is __________.</b>
              </div>
              <div className="answers">
                <label>
                  <input type="radio" name="question2" value="a" autocomplete="off" required /> a : 2 (E<sub>b</sub>)<sup>0.5</sup>
                </label>
                <br />
                <label>
                  <input type="radio" name="question2" value="b" autocomplete="off" /> b : 2 E<sub>b</sub>
                </label>
                <br />
                <label>
                  <input type="radio" name="question2" value="c" autocomplete="off" /> c : E<sub>b</sub><sup>0.5</sup>
                </label>
                <br />
                <label>
                  <input type="radio" name="question2" value="d" autocomplete="off" /> d : 4 (E<sub>b</sub>)<sup>0.5</sup>
                </label>
              </div>
              <br />
              <div className="question">
                <b>Q4. The centre frequency of the Band Pass Filter (BPF) used in Binary Phase Shift Keying receiver is __________.</b>
              </div>
              <div className="answers">
                <label>
                  <input type="radio" name="question3" value="a" autocomplete="off" required /> a : 2 (f<sub>0</sub>)<sup>0.5</sup>
                </label>
                <br />
                <label>
                  <input type="radio" name="question3" value="b" autocomplete="off" /> b : 2 f<sub>0</sub>
                </label>
                <br />
                <label>
                  <input type="radio" name="question3" value="c" autocomplete="off" /> c : f<sub>0</sub><sup>0.5</sup>
                </label>
                <br />
                <label>
                  <input type="radio" name="question3" value="d" autocomplete="off" /> d : 4 (f<sub>0</sub>)<sup>0.5</sup>
                </label>
              </div>
              <br />
              <div className="question">
                <b>Q5. What is b(t) in the following Binary Phase Shift Keying signal equation?<br></br>V<sub>BPSK</sub>(t) = b(t) (2P<sub>s</sub>)<sup>0.5</sup> Cos (w<sub>0</sub>t)</b>
              </div>
              <div className="answers">
                <label>
                  <input type="radio" name="question4" value="a" autocomplete="off" required /> a : Bipolar Signal
                </label>
                <br />
                <label>
                  <input type="radio" name="question4" value="b" autocomplete="off" /> b : Unipolar Signal
                </label>
                <br />
                <label>
                  <input type="radio" name="question4" value="c" autocomplete="off" /> c : Sine Function
                </label>
                <br />
                <label>
                  <input type="radio" name="question4" value="d" autocomplete="off" /> d : Cosine Function
                </label>
              </div>
              <br />
              <div align="center">
                <button type={'submit'} className='btn btn-primary'>Submit</button>
              </div>
              <br />
            </div>
          </div>
        </form>
      </div>
      </Container>
    )
  }
}

export default Post_test