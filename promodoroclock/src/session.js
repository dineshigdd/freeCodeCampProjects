import React from 'react';
import { decrement } from './control-panel';
import { increment } from './control-panel';

class Session extends React.Component {
  constructor(props){
    super(props);

    this.state = { sessionlength: this.props.sessionlength };
    this.getSessionLength = this.getSessionLength.bind(this);
}

  getSessionLength(incrementDecrement){
      let  length = 0;
         if( incrementDecrement === "decrement" ){
             length = decrement( "sessionlength",this.state.sessionlength );
         }else{
             length = increment( "sessionlength",this.state.sessionlength );
         }
       this.setState( { sessionlength: length });

       this.props.getLength( length, 'session');
  }

  render(){
    return(
      <div>
        <div id="session-label">Session Length</div>
        <div className="settings-btn-move" id="settings-session-btn-move">
            <button id="session-decrement" onClick={ () => this.getSessionLength("decrement") }>
            <i className="angle down icon"></i></button>
            <div id="session-length"  className="div-padding">{ this.state.sessionlength }</div>
            <button id="session-increment" onClick={ () => this.getSessionLength("increment") }>
            <i className="angle up icon"></i></button>
        </div>
      </div>
    );
  }
}

export default Session;
