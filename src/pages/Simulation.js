import React, { Component } from 'react'
import Wave from '../components/wave'
import './Simulation.css';


export class Simulation extends Component {
    constructor(){
      super()
      this.state={
          input:false,
          amplitude:1,
          frequency:2,
          userdata:[]
      }
  }
  assign = (event) =>{
      event.preventDefault();
      let val =document.getElementById('inp').value;
      let amplitude =document.getElementById('amp').value;
      let frequency =document.getElementById('freq').value;
      for(let i =0; i <val.length;i++){
          if(parseInt(val[i])!==0 && parseInt(val[i])!==1){
              alert('Invalid Input');
              return;
          }
      }
      if(val.length>10){
        alert('Max input allowed is 10 bits');
        return;
      }
      const user=[];
      for(let i =0; i <val.length;i++){
          user.push(parseInt(val[i]));
      }
      this.setState({
          input:true,
          amplitude:amplitude,
          frequency:frequency,
          userdata:user
      });
  }
  check = () =>{
    document.getElementById('val').innerText=document.getElementById('amp').value;
    document.getElementById('freq-val').innerText=document.getElementById('freq').value;
  }
  render() {
    var msg=<Wave user={this.state.userdata} amp={this.state.amplitude} freq={this.state.frequency}/>;
    return (
        <>
        <div className='container'>
          <div className='row' id='simul'>
            <h4>Simulation</h4>
          </div>
          <div className='row' id='bd'>
            <div className='col-12 col-lg-6'>
              <form onSubmit={this.assign}>
                <div className='row'>
                  <div className='col-5'>
                  <br/>
                  <b id='ampli'>Select Amplitude:</b>
                  <br/>
                  <input id='amp' type='range' min='-100' max='100'onInput={this.check} required></input><br/>
                  <b id='slctdampli'>Selected Value: </b>
                  <label id='val'>50</label><br/>
                  </div>
                  <div className='col-6'>
                    <img src={require("../img/diag.png")} width="100%" alt="circuit"/>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-5'>
                  <br/>
                  <b id='freqi'>Select Frequency:</b>
                  <br/>
                  <input id='freq' type='range' min='1' max='10' onInput={this.check} required></input><br/>
                  <b id='slctdfreqi'>Selected Value: </b>
                  <label id='freq-val'>10</label> PI<br/>

                  </div>
                  <div className='col-6'>
                  <b id='data'>Binary Data: </b>
                  <br/>
                  <input id='inp' size="10" required></input>
                  <br/><br/>
                  <button type='submit' className='btn btn-primary'>Submit</button>
                  <br></br>
                </div>
                </div>
                <div className='row'>
                <div className='col-6'/>
                </div>
              </form>
            </div>
            <div className='col-11 col-lg-6' >
                {msg}
            </div>
          </div>
        </div>
        </>
    )
  }
}

export default Simulation
