import React from 'react';
import ReactDom from 'react-dom';
import '../src/styles.css';


class PomodoroClock extends React.Component{


render(){
  return(
    <div id="timer-container">
        <div id='top-label'>
          <div id="break-label">Break Length</div>
          <div id="session-label">Session Length</div>
        </div>
          <div id="break-length" onload="5"></div>
          <div id="session-length"></div>
          <div id="timer-label">Session</div>
          <div id="time-left"></div>
          <button id="break-decrement">Break Increase</button>
          <button id="session-decrement">Session Decrease</button>
          <button id="break-increment">Break Increase</button>
          <button id="session-increment">Session Increase</button>
          <button id="start_stop">Stop</button>
          <button id="reset">Reset</button>
    </div>
    );
  };

}
ReactDom.render(<PomodoroClock />, document.querySelector('#root'));
