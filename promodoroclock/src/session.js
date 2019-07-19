import React from 'react';

class Session extends React.Component {

  render(){
    return(
      <div>
        <div id="session-label">Session Length</div>
        <div className="settings-btn-move" id="settings-session-btn-move">
            <button id="session-decrement"><i className="angle down icon"></i></button>
            <div id="session-length"  className="div-padding">25</div>
            <button id="session-increment"><i className="angle up icon"></i></button>
        </div>
      </div>
    );
  }
}

export default Session;
