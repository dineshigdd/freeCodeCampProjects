import React from 'react';
import ReactDOM from 'react-dom';
import Break from './break';
import Session from './session';
import DisplayPanel from './display-panel';
import './index.css';

let isMytimerRuning = 'off';
let mytimer = '';
let isReset = false;

class App extends React.Component{
  constructor(props){
    super(props);

    this.mytimer = setInterval( () => this.timer(),1000);

    this.state = {
      breaklength:5,
      sessionlength:25,
      minute:25,
      seconds:'00'
    };

    this.reset = this.reset.bind(this);
    this.timer = this.timer.bind(this);
    this.timerController = this.timerController.bind(this);
    this.addLeadingZerosTOSeconds = this.addLeadingZerosTOSeconds.bind(this);
    this.addLeadingZerosTOSession = this.addLeadingZerosTOSession.bind(this);
}

reset(){
  isReset = true;
  this.setState( { sessionlength : 25 });
  this.setState( { breaklength : 5 });
  this.setState( { minute : '25' });
  this.setState( { seconds: '00'});
  clearInterval( this.mytimer);
}

addLeadingZerosTOSeconds( stateValue ){
  let num = (Number(stateValue) + 59)%60 ;

  if( num < 10 ){
     num = '0' + num;
  }
  return num;
}

addLeadingZerosTOSession( stateValue ){
  let session = Number(stateValue);
  if( session < 10 ){
    session = '0' + session;
  }

  return session;
}


 timer(){
  console.log("this is timer");
       if( isMytimerRuning === 'on'){

           this.setState( { seconds:  this.addLeadingZerosTOSeconds(this.state.seconds) });
                   if( this.state.seconds === "00" ){
                         this.setState( { minute:this.addLeadingZerosTOSession(this.state.minute - 1) });
                   }
        }else{
            clearInterval(mytimer);

        }

}

timerController(){
  if( isReset ){
    clearInterval(this.mytimer);
    this.mytimer = setInterval( () => this.timer(),1000);

  }else{
    if( isMytimerRuning === 'off'){
      isMytimerRuning = 'on';
    }else{
      isMytimerRuning = 'off';
    }
  }
    isReset = false;
}

  render(){
    return(
      <div id="timer-container">
      <DisplayPanel
          minute = { this.state.minute }
          seconds ={ this.state.seconds }
          timerController = { this.timerController }
          resetter = { this.reset }/>
      <ul id='settings'>
        <li><Break breaklength = { this.state.breaklength }/></li>
        <li><Session sessionlength = { this.state.sessionlength }/></li>
      </ul>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('root'));
