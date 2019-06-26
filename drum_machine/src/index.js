import React from 'react';
import ReactDom from 'react-dom';

class DrumMachine extends React.Component{
  constructor(props){
    super(props);
    this.test= this.test.bind(this);
  }
  state = { selectedDrum : null };

  test(){
    this.Q.play();
    //this.props.setState({selectedDrum:"Q"});
  }

    render(){
      return(
        <div>
          <div id='drum-machine'>
              <ul>
                <li className='drum-pad' id='q-trig' onClick={ this.test }>Q
                      <audio  ref={ Q => (this.Q = Q)} src="https://s3.amazonaws.com/freecodecamp/simonSound1.mp3" type="audio/mpeg">

                      </audio>
                </li>
              </ul>
              </div>
              <div id='display'> </div>
        </div>
      );
    };
  }

ReactDom.render(<DrumMachine />, document.querySelector('#root'));
