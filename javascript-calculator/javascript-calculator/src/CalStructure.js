import React from 'react';
import './styles.css'

class Calstructure extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      idForNumbers:["zero", "one", "two","three","four", "five", "six", "seven","eight", "nine"],
      numPad:[1,2,3,4,5,6,7,8,9,0],
      idForOtherPads:["add", "subtract","multiply","divide","decimal","clear","display",'equals'],
      otherPads:["+","-","*","/",".","clear","display","="]
    };


  }


 render(){



    const numbers = this.state.numPad.map( (num ) =>
    { return <li key = { num.toString() } id={ this.state.idForNumbers[num] }>{ num }</li> });

    //adding operator list
    const operators = this.state.otherPads.map( ( operator ) =>
    { return <li id= {  this.state.idForOtherPads[this.state.otherPads.indexOf(operator)]}>{ operator }</li>});

    return(
      <div>
        <ul>{ numbers}</ul>
        <ul>{operators}</ul>

       </div>
    );
  }
};


export default Calstructure;
