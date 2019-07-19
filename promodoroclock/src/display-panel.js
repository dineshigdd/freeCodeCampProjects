import React from 'react';

class DisplayPanel extends React.Component {

  render(){
    return(
          <div>
              <ul id="display">
                    <li><div id="timer-label">Session</div>
                    <div id="time-left">{ this.props.minute }:{this.props.seconds}</div></li>
                </ul>
                <ul id="control">
                    <button id="start_stop" onClick = { this.props.timerController  }><i className="play icon"></i><i className="stop icon"></i></button>
                    <button id="reset" onClick = { this.props.resetter }><i className="sync icon"></i></button>
                </ul>
          </div>
    );
  }
}

export default DisplayPanel;
