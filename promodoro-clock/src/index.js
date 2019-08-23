//https://reactjs.org/docs/state-and-lifecycle.html#adding-lifecycle-methods-to-a-class
// https://stackoverflow.com/questions/8126466/how-do-i-reset-the-setinterval-timer
import React from 'react';
import ReactDom from 'react-dom';
import '../src/styles.css';

var isMytimerRuning = 'off';
let mytimer = '';
let isReset = false;

class PomodoroClock extends React.Component{
  constructor(props){
    super(props);

    mytimer = setInterval( () => this.timer(),1000);

    this.state = {
      mytimer:'',
      breaklength:5,
      sessionlength:25,
      seconds:'00'
    };

  this.reset = this.reset.bind(this);
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
       if( isMytimerRuning === 'on'){
           console.log("isMytimer:" +isMytimerRuning)

           // let second = (Number(this.state.seconds) + 59)%60 ;
           //
           // if( second < 10 ){
           //    second = '0' + second;
           // }
           this.setState( { seconds:  this.addLeadingZerosTOSeconds(this.state.seconds) });
                   if( this.state.seconds === "00" ){
                         // let session = Number(this.state.sessionlength) - 1;
                         // if( session < 10 ){
                         //   session = '0' + session;
                         // }
                         this.setState( { sessionlength:this.addLeadingZerosTOSession(this.state.sessionlength - 1) });
                   }
        }else{
            clearInterval(this.mytimer);
            console.log("isMytimer:" +isMytimerRuning)
        }

}


reset(){
  //isMytimer = 'off';
  isReset = true;
  clearInterval(mytimer);
  this.setState({ sessionlength: 25 })
  this.setState({ breaklength: 5 })
  this.setState({ seconds: '00' })
}

decrease(type ){

if(  type === 'breaklength' ){
    if(  this.state.breaklength < 2 ){
            this.setState({ breaklength : 1 });
      }else{
            this.setState({ breaklength : this.state.breaklength  - 1   });
    }
  }else{
        let session = this.state.sessionlength  - 1  ;
              if( this.state.sessionlength  <= 10 ){
                session = this.addLeadingZerosTOSession( session );

                if( Number(session) < 2 ){
                  session = '01';
                }
              }

              this.setState({ sessionlength : session });
  }
}

 increase(type){
   if(  type === 'breaklength' ){
       if(  this.state.breaklength < 2 ){
               this.setState({ breaklength : 1 });
         }else if( this.state.breaklength < 60){
               this.setState({ breaklength : this.state.breaklength  + 1   });
       }
     }else{
       let session = Number(this.state.sessionlength) + 1;
             if( session > 60 ){
               session = 60;
             }else
             if( this.state.sessionlength  <= 10 ){
               session = this.addLeadingZerosTOSession( session );

               if( Number(session) < 2 ){
                 session = '01';
               }
             }

             this.setState({ sessionlength : session });
     }
 }

render(){
  return(
    <div id="timer-container">
        <ul id="display">
            <li><div id="timer-label">Session</div>
            <div id="time-left">{ this.state.sessionlength}:{ this.state.seconds }</div></li>
        </ul>
        <ul id="control">
            <button id="start_stop" onClick={ this.timerController.bind(this) }><i className="play icon"></i><i className="stop icon"></i></button>
            <button id="reset" onClick={ this.reset }><i className="sync icon"></i></button>
        </ul>
        <ul id='settings'>
          <li>
              <div id="break-label">Break Length</div>
                <div className='settings-btn-move'>
                    <button id="break-decrement" onClick={ this.decrease.bind(this,'breaklength') }><i className="angle down icon"></i></button>
                    <div id="break-length" className="div-padding">{ this.state.breaklength }</div>
                    <button id="break-increment" onClick={ this.increase.bind(this,'breaklength')}><i className="angle up icon"></i></button>
                </div>
          </li>
          <li>
              <div id="session-label">Session Length</div>
              <div className='settings-btn-move' id="settings-session-btn-move">
                  <button id="session-decrement" onClick={ this.decrease.bind(this)}><i className="angle down icon"></i></button>
                  <div id="session-length"  className="div-padding">{ this.state.sessionlength }</div>
                  <button id="session-increment" onClick={ this.increase.bind(this)}><i className="angle up icon"></i></button>
              </div>
          </li>
      </ul>
    </div>
    );
  };

}
ReactDom.render(<PomodoroClock />, document.querySelector('#root'));
