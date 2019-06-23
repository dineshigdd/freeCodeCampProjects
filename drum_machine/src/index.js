import React from 'react';
import ReactDom from 'react-dom';

class DrumMachine extends React.Component{
  state = { selectedDrum : null };

  componentWillUpdate(prevProps, prevState){
    if(this.state.selectedDrum !== prevState.selectedDrum) {
      let track;

        switch (this.state.selectedDrum) {
            case 'Q':
                track = 'Q'
              break;
            case 'W':
                track = 'W'
              break;
            default:
              break;
        }

        if( track ){
           this.player.src = track;
           this.player.play();
        }
    }
  }

    render(){
      return(
        <div>
          <div id='drum-machine'>
              <ul>
                <li className='drum-pad' id='q-trig' onClick = { this.setState({ selectedDrum:'Q'})}>Q
                      <audio  ref={ref => this.player = ref } controls>
                      <source src='dog.mp3'  type='audio/mpeg' className='clip' id='Q'></source>
                    </audio>
                </li>
                <li className='drum-pad' id='w-trig' onClick = { this.setState({ selectedDrum:'Q'})}>W
                    <audio ref={ref => this.player = ref }  controls>
                      <source src="dog.mp3" type='audio/mpeg' className='clip' id='W'></source>
                    </audio>
                </li>
                <li className='drum-pad' id='e-trig'>E
                    <audio controls>
                      <source src="demo.mp3" className='clip' id='E'></source>
                    </audio>
                </li>
                <li className='drum-pad' id='a-trig'>A
                    <audio controls>
                      <source src="demo.mp3" className='clip' id='A'></source>
                    </audio>
                </li>
                <li className='drum-pad' id='s-trig'>S
                    <audio controls>
                      <source src="demo.mp3" className='clip' id='S'></source>
                    </audio>
                </li>
                <li className='drum-pad' id='d-trig'>D
                    <audio controls>
                      <source src="demo.mp3" className='clip' id='D'></source>
                    </audio>
                </li>
                <li className='drum-pad' id='z-trig'>Z
                    <audio controls>
                      <source src="demo.mp3" className='clip' id='Z'></source>
                    </audio>
                </li>
                <li className='drum-pad' id='x-trig'>X
                    <audio controls>
                      <source src="demo.mp3" className='clip' id='X'></source>
                    </audio>
                </li>
                <li className='drum-pad' id='c-trig'>C
                    <audio controls>
                      <source src="demo.mp3" className='clip' id='C'></source>
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
