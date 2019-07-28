import React from 'react';
import { decrement } from './control-panel';
import { increment } from './control-panel';

class Session extends React.Component {
  constructor(props){
    super(props);

    this.state = { sessionlength: this.props.sessionlength };
    console.log("I am the seesion constructor")
    this.getSessionLength = this.getSessionLength.bind(this);
}
  
  
  getSessionLength(incrementDecrement){
      let  length = 0;
      console.log("sessionlength insession:" + this.state.sessionlength);
      if( !this.props.timerStatus ){
             if( incrementDecrement === "decrement" ){
                 length = decrement( "sessionlength",this.state.sessionlength );
             }else{
                 length = increment( "sessionlength",this.state.sessionlength );
             }
           this.setState( { sessionlength: length });

           this.props.getLength( length, 'session');
     }
  }

  
  componentWillReceiveProps(nextProps) {
  
    if( nextProps.sessionlength !==  this.props.sessionlength)
      this.setState({ sessionlength : nextProps.sessionlength }) ;
    
  }

  render(){
    
    
   
    let sessionlength  = '';
    if( this.props.resetStatus === true ){
      console.log("this.props.resetStatus "+this.props.resetStatus );
      sessionlength  = this.props.sessionlength ;
    }else{
      sessionlength  = this.state.sessionlength;
    }

    return(
      <div>
        <div id="session-label">Session Length</div>
        <div className="settings-btn-move" id="settings-session-btn-move">
            <button id="session-decrement" onClick={ () => this.getSessionLength("decrement") }>
            <i className="angle down icon"></i></button>
            <div id="session-length"  className="div-padding">{ sessionlength  }</div>
            <button id="session-increment" onClick={ () => this.getSessionLength("increment") }>
            <i className="angle up icon"></i></button>
        </div>
      </div>
    );
  }
}

export default Session;
