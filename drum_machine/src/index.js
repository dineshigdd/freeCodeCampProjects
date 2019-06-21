import React from 'react';
import ReactDom from 'react-dom';

class DrumMachine extends React.Component{

    render(){
      return(
        <div>
          <div id='drum-machine'>
              <ul>
                <li className='drum-pad' id='q-trig'>Q
                    <audio controls className='clip' id='Q'>
                      <source src="demo.mp3" className='clip' id='Q'></source>
                    </audio>
                </li>
                <li className='drum-pad' id='w-trig'>W
                    <audio controls>
                      <source src="demo.mp3" className='clip' id='W'></source>
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
