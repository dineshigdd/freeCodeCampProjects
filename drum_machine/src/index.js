import React from 'react';
import ReactDom from 'react-dom';

class DrumMachine extends React.Component{
  constructor(props){
    super(props);
    this.myref = React.createRef();
  }
  state = { selectedDrum : null };


    render(){
      return(
        <div>
          <div id='drum-machine'>
              <ul>
                <li className='drum-pad' id='q-trig'>Q
                      <audio myref={ this.myref }>
                          <source src="https://s3.amazonaws.com/freecodecamp/simonSound1.mp3" type="audio/mpeg" >
                          </source>
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
