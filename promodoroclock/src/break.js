import React from 'react';
import { decrement } from './control-panel';
import { increment } from './control-panel';
//let breaklength = 0;
class Break extends React.Component {
  constructor(props){
    super(props);

    this.state = { breaklength: this.props.breaklength };
    // decrement.bind(this,"breaklength",this.state.breaklength );
    // increment.bind(this,"breaklength",this.state.breaklength );
    this.getBreakLength = this.getBreakLength.bind(this);
  }



   getBreakLength(incrementDecrement){
       let  length = 0;
          if( incrementDecrement === "decrement" ){
              length = decrement( "breaklength",this.state.breaklength );
          }else{
              length = increment( "breaklength",this.state.breaklength );
          }
        this.setState( { breaklength: length });

        this.props.getLength( length , 'break');
   }

  render(){

    return(
      <div>
          <div id="break-label">Break Length</div>
            <div className='settings-btn-move'>
                <button id="break-decrement" onClick={ () => this.getBreakLength("decrement")}><i className="angle down icon"></i></button>
                <div id="break-length" className="div-padding">{ this.state.breaklength }</div>
                <button id="break-increment" onClick={ () => this.getBreakLength("increment")}><i className="angle up icon"></i></button>
            </div>
        </div>
    );
  }
}

export default Break;
