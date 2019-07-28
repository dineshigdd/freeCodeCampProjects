import React from 'react';
import ReactDOM from 'react-dom';
import Break from './break';
import Session from './session';
import DisplayPanel from './display-panel';
import './index.css';

//let isMytimerRuning = false;
let mytimer = '';

let test = 0;
let counter = 1;
let length = 0;

class App extends React.Component{
  constructor(props){
    super(props);

    this.mytimer = setInterval( () => this.timer(),1000);

    this.state = {
      isReset : false,
      isMytimerRuning:false,
      isSession : true,
      timerLabel:'Session',
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
    this.getLength = this.getLength.bind(this);
    //this.changeSessionBreak = this.changeSessionBreak.bind(this);
    // length = this.state.sessionlength;
}

reset(){
  
  this.setState( { isReset : true });
  this.setState( { isSession: true });
  this.setState( { isMytimerRuning : false });
  this.setState( { timerLabel: 'Session'});
  this.setState( { sessionlength : 25 });
  this.setState( { breaklength : 5 });
  this.setState( { minute : 25 });
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
  let session = Number(stateValue );
  if( session < 10 ){

    if( session < 0 ){
      return -1;
    }
    session = '0' + session;
  }
 

  return session;
}


 timer(){     

       if( this.state.isMytimerRuning ){
        console.log("this is timer");
           this.setState( { seconds:  this.addLeadingZerosTOSeconds(this.state.seconds) });
                   if( this.state.seconds === 59 ){                  
                         this.setState( { minute:this.addLeadingZerosTOSession(this.state.minute - 1)} );
                         this.changeSessionBreak();
                   }

                  
        }else{
           clearInterval(mytimer);

        }

}

changeSessionBreak(){
   if( this.state.minute === -1 && this.state.seconds === 59 && this.state.timerLabel === 'Session' ){
    
          this.setState( { minute:this.addLeadingZerosTOSession(this.state.breaklength ) }) 
          this.setState( { timerLabel : 'Break' } );        
          this.setState( { isSession : false } );
          this.setState( { seconds: '00'});
          
      }else if( this.state.minute === -1 && this.state.seconds === 59 && this.state.timerLabel === 'Break' ){
    
          this.setState( { minute:this.addLeadingZerosTOSession(this.state.sessionlength) });
          this.setState( { timerLabel : 'Session' } );
          this.setState( { isSession : true } );
          this.setState( { seconds: '00'});
      }
}

timerController(){

  if( this.state.isReset ){
    clearInterval(mytimer);
    this.mytimer = setInterval( () => this.timer(),1000);
    this.setState( { isMytimerRuning : true });
  }else{
    if( !this.state.isMytimerRuning ){
      this.setState( { isMytimerRuning : true});
    }else{
      this.setState( { isMytimerRuning : false});
    }
  }
      this.setState( { isReset : false });
       console.log("this.state.isMytimerRuning:" +this.state.isMytimerRuning );
}


getLength( length , type ){


    if( this.state.isSession && type === 'session' ){
        this.setState( { seconds:'00'});
        this.setState( { sessionlength : length });
        this.setState( {minute : this.addLeadingZerosTOSession(length) });

    }else if( !this.state.isSession && type === 'session' ){

        this.setState( { sessionlength : length });

    } else if( !this.state.isSession && type === 'break' ){
        this.setState( { seconds:'00'});
        this.setState( { breaklength: length })
        this.setState( {minute : this.addLeadingZerosTOSession(length) });

    } else {        
        this.setState( { breaklength: length })
    }
  
 
}

  render(){
    
      return(
      <div id="timer-container">
      <DisplayPanel
          timerLabel = { this.state.timerLabel }
          minute = { this.state.minute }
          seconds ={ this.state.seconds }
          timerController = { this.timerController }
          resetter = { this.reset }/>
      <ul id='settings'>
        <li><Break 
          breaklength = { this.state.breaklength } 
          getLength = { this.getLength }
          timerStatus = { this.state.isMytimerRuning }
          resetStatus = { this.state.isReset }/></li>
        <li><Session 
          sessionlength = { this.state.sessionlength } 
          getLength = { this.getLength }
          timerStatus = { this.state.isMytimerRuning }
          resetStatus = { this.state.isReset }/></li>
      </ul>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
