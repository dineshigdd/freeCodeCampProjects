import React from 'react';
import ReactDom from 'react-dom';
import '../src/styles.css';


class PomodoroClock extends React.Component{


render(){
  return(
    <div id="timer-container">
        <ul id="display">
            <li><div id="timer-label">Session</div>
            <div id="time-left">25:00</div></li>
        </ul>
        <ul id="control">
            <button id="start_stop"><i className="play icon"></i><i className="stop icon"></i></button>
            <button id="reset"><i className="sync icon"></i></button>
        </ul>
        <ul id='settings'>
          <li>
              <div id="break-label">Break Length</div>
                <div className='settings-btn-move'>
                    <button id="break-decrement"><i className="angle down icon"></i></button>
                    <div id="break-length" className="div-padding">5</div>
                    <button id="break-increment"><i className="angle up icon"></i></button>
                </div>
          </li>
          <li>
              <div id="session-label">Session Length</div>
              <div className='settings-btn-move' id="settings-session-btn-move">
                  <button id="session-decrement"><i className="angle down icon"></i></button>
                  <div id="session-length"  className="div-padding">25</div>
                  <button id="session-increment"><i className="angle up icon"></i></button>
              </div>
          </li>
      </ul>
    </div>
    );
  };

}
ReactDom.render(<PomodoroClock />, document.querySelector('#root'));
