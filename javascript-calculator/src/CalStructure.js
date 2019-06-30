import React from 'react';
import './styles.css'

class Calstructure extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      idForNumbers:["zero", "one", "two","three","four", "five", "six", "seven","eight", "nine"],
      numPad:[1,2,3,4,5,6,7,8,9,0],
      idForOtherPads:["add", "subtract","multiply","divide","decimal","clear",'equals'],
      otherPads:["+","-","*","/",".","clear","="]
    };


  }


 render(){
    const numbers = this.state.numPad.map( (num ) =>
    { return <li key = { num.toString() } className = 'numbers' id={ this.state.idForNumbers[num] }>{ num }</li> });

    //adding operator list
    const operators = this.state.otherPads.map( ( operator ) =>
    { return <li id= {  this.state.idForOtherPads[this.state.otherPads.indexOf(operator)]}>{ operator }</li>});

    return(
      <div id='outer-wrapper'>
        <div id='inner-wrapper'>
            <div id='display'>DISPLAY</div>
            <ul>{ operators[ this.state.otherPads.indexOf('clear')] }  { operators[ this.state.otherPads.indexOf('/')] } </ul>
            <ul>{ numbers.slice(6,9)} { operators[ this.state.otherPads.indexOf('*')]}</ul>
            <ul>{ numbers.slice(3,6)} { operators[ this.state.otherPads.indexOf('-')]}</ul>
            <ul>{ numbers.slice(0,3)} { operators[ this.state.otherPads.indexOf('+')]}</ul>
            <ul>{ numbers[numbers.length - 1]} { operators[this.state.otherPads.indexOf('.')]} { operators[this.state.otherPads.indexOf('=')]}</ul>


        </div>
       </div>
    );
  }
};


export default Calstructure;
