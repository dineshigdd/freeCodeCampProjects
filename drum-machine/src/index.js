import React from 'react';
import ReactDom from 'react-dom';

let drum = null;
class DrumMachine extends React.Component{
  constructor(props){
    super(props);
    //this.test= this.test.bind(this,drum);
  }
  state = { selectedDrum : null,
            description:null };

  componentDidMount(){
    document.addEventListener('keydown', this.handleKeyPress.bind(this));
  }
  

  handleKeyPress(event){
      this.test(event.key.toUpperCase());
  }


  test(drum){
    let description = null;
    switch(drum){
      
      case 'Q' :
        this.Q.play();
        description = 'Heater 1';
        break;
      case 'W':
        this.W.play();
        description = 'Drums DSC OH';
        break;
      case 'E' :
        this.E.play();
        description = 'Heater 4';
        break;
      case 'A':
        this.A.play();
        description = 'Chord 2';
        break;
      case 'S':
        this.S.play();
        description = 'Drums Give us a light';
        break;
      case 'D':
        this.D.play();
        description = 'Drums Bld H1';
        break;
      case 'Z':
        this.Z.play();
        description = 'Drums punchy kick 1'
        break;
      case 'X':
        this.X.play();
        description = 'Chord 3';
        break;
      case 'C':
        this.C.play();
        description = 'Drums Brk Snr';
        break;
    }

       this.setState({description: description });
  }

    render(){
      return(
        <div>
            <div id='drum-machine'>
                <ul>
                  <li className='drum-pad' id='q-trig' onClick={ this.test.bind(this,'Q') }>Q
                        <audio ref={ Q => (this.Q = Q)} src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" type="audio/mpeg" className ='clip' id='Q'>
                        </audio>
                  </li>
                  <li className='drum-pad' id='w-trig' onClick={ this.test.bind(this,'W') }>W
                        <audio ref={ W => (this.W = W)} src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" type="audio/mpeg" className ='clip' id='W'>
                        </audio>
                  </li>
                  <li className='drum-pad' id='q-trig' onClick={ this.test.bind(this,'E') }>E
                        <audio ref={ E => (this.E = E)} src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" type="audio/mpeg" className ='clip' id ='E'>
                        </audio>
                  </li>
                  <li className='drum-pad' id='w-trig' onClick={ this.test.bind(this,'A') }>A
                        <audio ref={ A => (this.A = A)} src="https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3" type="audio/mpeg" className ='clip' id= 'A'>
                        </audio>
                  </li>
                  <li className='drum-pad' id='q-trig' onClick={ this.test.bind(this,'S') }>S
                        <audio ref={ S => (this.S = S)} src="https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3" type="audio/mpeg" className ='clip' id='S'>
                        </audio>
                  </li>
                  <li className='drum-pad' id='w-trig' onClick={ this.test.bind(this,'D') }>D
                        <audio ref={ D => (this.D = D)} src="https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3" type="audio/mpeg" className ='clip' id='D'>
                        </audio>
                  </li>
                  <li className='drum-pad' id='q-trig' onClick={ this.test.bind(this,'Z') }>Z
                        <audio ref={ Z => (this.Z = Z)} src="https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3" type="audio/mpeg" className ='clip' id='Z'>
                        </audio>
                  </li>
                  <li className='drum-pad' id='w-trig' onClick={ this.test.bind(this,'X') }>X
                        <audio ref={ X => (this.X = X)} src="https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3" type="audio/mpeg" className ='clip' id='X'>
                        </audio>
                  </li>
                  <li className='drum-pad' id='w-trig' onClick={ this.test.bind(this,'C') }>C
                        <audio ref={ C => (this.C = C)} src="https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3" type="audio/mpeg" className ='clip' id='C'>
                        </audio>
                  </li>

                </ul>
            </div>
          <div id='display'> { this.state.description }</div>
        </div>
      );
    };
  }

ReactDom.render(<DrumMachine />, document.querySelector('#root'));
