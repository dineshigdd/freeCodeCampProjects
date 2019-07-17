//https://reactjs.org/docs/state-and-lifecycle.html#adding-lifecycle-methods-to-a-class
import React from 'react';
import ReactDom from 'react-dom';
import '../src/styles.css';

var isMytimer = 'off';
let mytimer = '';
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

  }



timer(){
 if( isMytimer === 'on'){
   while( !isMytimer ){
   console.log("isMytimer:" +isMytimer)
   this.setState( { seconds: (this.state.seconds + 59)%60 });
             if( this.state.seconds === 0 ){
                   this.setState( { seconds: '00'});
                   this.setState( { sessionlength: this.state.sessionlength - 1});
             }

             // if( isMytimer === 'off'){
             //   clearInterval(this.mytimer);
             // }
  }

  //   isMytimer = "off";
  // }else{
  //   console.log("isMytimer:" +isMytimer)
  //   clearInterval(this.mytimer);
  //   isMytimer = "on";
  //   }
  }


reset(){
  this.setState({ sessionlength: 25 })
  this.setState({ breaklength: 5 })
}

breaklengthDrecrease(type ){

if(  type === 'breaklength' ){
    if(  this.state.breaklength < 2 ){
            this.setState({ breaklength : 1 });
      }else{
            this.setState({ breaklength : this.state.breaklength  - 1   });
    }
  }else{
    if(  this.state.sessionlength < 2 ){
            this.setState({ sessionlength : 1 });
      }else{
            this.setState({ sessionlength : this.state.sessionlength  - 1   });
    }
  }
}

 breaklengthIncrease(type){
   if(  type === 'breaklength' ){
       if(  this.state.breaklength < 2 ){
               this.setState({ breaklength : 1 });
         }else{
               this.setState({ breaklength : this.state.breaklength  + 1   });
       }
     }else{
       if(  this.state.sessionlength < 2 ){
               this.setState({ sessionlength : 1 });
         }else{
               this.setState({ sessionlength : this.state.sessionlength  + 1   });
       }
     }
 }

render(){
  return(
    <div id="timer-container">
        <ul id="display">
            <li><div id="timer-label">Session</div>
            <div id="time-left">{ this.state.sessionlength}: { this.state.seconds } </div></li>
        </ul>
        <ul id="control">
            <button id="start_stop" onClick={ this.timer.bind(this) }><i className="play icon"></i><i className="stop icon"></i></button>
            <button id="reset" onClick={ this.reset }><i className="sync icon"></i></button>
        </ul>
        <ul id='settings'>
          <li>
              <div id="break-label">Break Length</div>
                <div className='settings-btn-move'>
                    <button id="break-decrement" onClick={ this.breaklengthDrecrease.bind(this,'breaklength') }><i className="angle down icon"></i></button>
                    <div id="break-length" className="div-padding">{ this.state.breaklength }</div>
                    <button id="break-increment" onClick={ this.breaklengthIncrease.bind(this,'breaklength')}><i className="angle up icon"></i></button>
                </div>
          </li>
          <li>
              <div id="session-label">Session Length</div>
              <div className='settings-btn-move' id="settings-session-btn-move">
                  <button id="session-decrement" onClick={ this.breaklengthDrecrease.bind(this)}><i className="angle down icon"></i></button>
                  <div id="session-length"  className="div-padding">{ this.state.sessionlength }</div>
                  <button id="session-increment" onClick={ this.breaklengthIncrease.bind(this)}><i className="angle up icon"></i></button>
              </div>
          </li>
      </ul>
    </div>
    );
  };

}
ReactDom.render(<PomodoroClock />, document.querySelector('#root'));
