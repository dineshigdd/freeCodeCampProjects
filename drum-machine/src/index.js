import React from 'react';
import ReactDom from 'react-dom';

let drum = null;
class DrumMachine extends React.Component{
  constructor(props){
    super(props);
    //this.test= this.test.bind(this,drum);
  }
  state = { selectedDrum : null };

  test(drum){
    switch(drum){
      case 'Q' :
        console.log(drum);
        this.Q.play();
        break;
      case 'W':
        this.W.play();
        break;
    }

    //this.props.setState({selectedDrum:"Q"});
  }

    render(){
      return(
        <div>
            <div id='drum-machine'>
                <ul>
                  <li className='drum-pad' id='q-trig' onClick={ this.test.bind(this,'Q') }>Q
                        <audio ref={ Q => (this.Q = Q)} src="https://s3.amazonaws.com/freecodecamp/simonSound1.mp3" type="audio/mpeg" >
                        </audio>
                  </li>
                  <li className='drum-pad' id='w-trig' onClick={ this.test.bind(this,'W') }>W
                        <audio ref={ W => (this.W = W)} src="https://s3.amazonaws.com/freecodecamp/simonSound3.mp3" type="audio/mpeg" >
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
