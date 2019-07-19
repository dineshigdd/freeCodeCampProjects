import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
=======
import Break from './break';
import Session from './session';
import DisplayPanel from './display-panel'
import './index.css';

let isMytimerRuning = 'off';
let mytimer = '';
let isReset = false;

class App extends React.Component{

  constructor(props){
    super(props);

    let mytimer = setInterval( () => this.timer(),1000);

    this.state = {
      mytimer:'',
      breaklength:5,
      sessionlength:25,
      minute:25,
      seconds:'00'
    };

    this.addLeadingZerosTOSeconds.bind(this);
    this.addLeadingZerosTOSession.bind(this);
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

timerController(){
  if( isReset ){
    mytimer = setInterval( () => this.timer(),1000);
  }else{
    if( isMytimerRuning === 'off'){
      isMytimerRuning = 'on';
    }else{
      isMytimerRuning = 'off';
    }
  }
}

timer(){
  console.log("this is timer");
       if( isMytimerRuning === 'on'){

           this.setState( { seconds:  this.addLeadingZerosTOSeconds(this.state.seconds) });
                   if( this.state.seconds === "00" ){

                         this.setState( { sessionlength:this.addLeadingZerosTOSession(this.state.sessionlength - 1) });
                   }
        }else{
            clearInterval(mytimer);

        }

}


  render(){
    return(
      <div id="timer-container">
      <DisplayPanel
          minute = { this.state.minute }
          seconds ={ this.state.seconds }
          timer = { this.timer}/>
      <ul id='settings'>
        <li><Break /></li>
        <li><Session /></li>
      </ul>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('root'));
>>>>>>> master
