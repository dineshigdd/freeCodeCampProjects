import React from 'react';
import './styles.css'

let result = 0;
let valueStr ='';
let tempStr ='';
var temp =[];
var isAddingZero = false;
var isOpearationAdded = false;
class Calstructure extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      idForNumbers:["zero", "one", "two","three","four", "five", "six", "seven","eight", "nine"],
      numPad:[1,2,3,4,5,6,7,8,9,0],
      idForOtherPads:["add", "subtract","multiply","divide","decimal","clear",'equals'],
      otherPads:["+","-","*","/",".","clear","="],
      subDisplay:0,
      mainDisplay:0
      };

  }


  getInput( value ) {

  if( value !== '='){


       if(!(value === '+' || value === '-' || value === '*' || value === '/')){
         var zeros = '';
                if( tempStr[0] === '0' &&  tempStr.length === 1 && (value > 0 || value.toString() !== '.')){ //replace leading zeros in tempStr
                    tempStr = value.toString();

                     if( !isAddingZero){

                        valueStr =  value.toString();

                      }else{

                        valueStr = valueStr.split('');
                        valueStr[valueStr.length - 1] = value;
                        valueStr = valueStr.join('');
                        isOpearationAdded = false;

                      }



                }else{

                      if( !(tempStr.indexOf('.') > -1 && value === '.')){

                            if( tempStr === '' && value === '.' ){
                               tempStr = '0';
                            }

                              tempStr = tempStr + value;

                            if( valueStr === '' && value === '.' ){
                               valueStr = '0';
                            }


                            valueStr = valueStr + value;

                            if( valueStr[valueStr.length - 1] === '.' &&
                            (valueStr[valueStr.length - 2] === '+' || valueStr[valueStr.length - 2] === '-' ||
                             valueStr[valueStr.length - 2] === '*' || valueStr[valueStr.length - 2] === '/')){

                               valueStr = valueStr.split('');
                               valueStr[valueStr.length - 1] = '0.';
                               valueStr = valueStr.join('');

                            }

                      }



                     if( isOpearationAdded  ){

                       zeros = valueStr.match(/[+]0+|[-]0+|[*]0+|[/]0+/g);


                    if(zeros !== null){
                       if( zeros.length >= 1 ){

                                 isAddingZero  = true;
                        }
                      }
                    }
              }


            this.setState({ mainDisplay:tempStr });
            this.setState({ subDisplay:valueStr });


         }else{
           tempStr = value;

           if(  (valueStr[ valueStr.length - 1 ] === '+' ||
           valueStr[ valueStr.length - 1 ] === '-' ||
           valueStr[ valueStr.length - 1 ] === '*' ||
           valueStr[ valueStr.length - 1 ] === '/' ) && !value >= 0 ) {

             valueStr = valueStr.split('');
             valueStr[valueStr.length - 1] = value;
             valueStr = valueStr.join('');
           }else{
             valueStr = valueStr + tempStr;//adding the sign
           }
           isOpearationAdded = true;
           sign = tempStr;
           this.setState({ mainDisplay:tempStr });
           this.setState({ subDisplay:valueStr });
           tempStr ='';
           value = '';
         }


  }else{
        //search for * and /
        var operatorArr = [];
        var operand_1= '';
        var operand_2= '';
        var sign = '';
        var index = 0;

        for(let i = 0; i < valueStr.length; i++ ){
              if( valueStr.charAt(i) === '*' ){
                  index = valueStr.indexOf('*')
                  operatorArr.push(valueStr.charAt(index));

                  for(let i = index - 1; i >=0 && !(valueStr.charAt(i) === '-' || valueStr.charAt(i) === '+' )  ; i-- ){
                       operand_1= (valueStr.charAt(i)) + operand_1;
                       sign = valueStr.charAt(i - 1);

                  }
                  tempStr = tempStr + operand_1;

                  sign = '';
                  for(let i = index + 1; i < valueStr.length && !(valueStr.charAt(i) === '-' || valueStr.charAt(i) === '+' )  ; i++ ){
                       operand_2 = operand_2 + (valueStr.charAt(i)) ;
                       sign = valueStr.charAt(index + 1);
                  }

                  tempStr = tempStr + '*' + operand_2;

                  temp.push(operand_1 * operand_2);

                  tempStr = valueStr.replace(tempStr,temp.pop());
                  valueStr = '';
                  valueStr = tempStr;

              }

              sign = '';
              operand_1 = '';
              operand_2 = '';
              tempStr ='';

              if( valueStr.charAt(i) === '/' ){
                  index = valueStr.indexOf('/')
                  operatorArr.push(valueStr.charAt(index));


                  for(let i = index - 1; i >=0 && !(valueStr.charAt(i) === '-' || valueStr.charAt(i) === '+'  )  ; i-- ){
                       operand_1= (valueStr.charAt(i)) + operand_1;
                       sign = valueStr.charAt(i - 1);
                  }

                  tempStr = tempStr + operand_1;

                  sign = '';
                  for(let i = index + 1; i < valueStr.length && !(valueStr.charAt(i) === '-' || valueStr.charAt(i) === '+' )   ; i++ ){
                       operand_2 = operand_2 + (valueStr.charAt(i)) ;
                       sign = valueStr.charAt(index + 1);
                  }

                    tempStr = tempStr + '/' + operand_2;

                  temp.push((Number(operand_1) / Number(operand_2)).toFixed(2));

                  tempStr = valueStr.replace(tempStr,temp.pop())
                  valueStr = '';
                  valueStr = tempStr;

                  }

        }
        operand_1 = 0;
        operand_2 = 0;
        let negativeNum;
        let positiveNum;

        negativeNum = valueStr.match(/-\d+(\.\d*)|-\d*/g);

        positiveNum = valueStr.match(/^[^-]\d+(\.\d*)|^[^-]\d*|[+]\d+(\.\d*)|[+]\d*/g);

        if( positiveNum != null){
            for(let i = 0; i < positiveNum.length; i++ ){
               if( positiveNum[i].charAt(0) === '+'){

                  operand_1 = operand_1 +  Number(positiveNum[i].substring(1,positiveNum[i].length));

               }else{
                 operand_1 = operand_1 +  Number(positiveNum[i]);
               }
            }
        }


          if( negativeNum != null){
            for(let i = 0; i < negativeNum.length; i++ ){
               if( negativeNum[i].charAt(0) === '-'){

                  operand_2 = operand_2 +  Number(negativeNum[i].substring(1,negativeNum[i].length));

               }else{
                 operand_2 = operand_2 +  Number(negativeNum[i]);
               }
            }
         }


        result = operand_1 + (-1 * operand_2);
        this.setState({ mainDisplay: result });

      }

      if( value === 'clear'){
          this.setState({ mainDisplay:0 });
          this.setState({ subDisplay:0 })
          operatorArr = [];
          operand_1= '';
          operand_2= '';
          sign = '';
          index = 0;
          result = 0;
          valueStr ='';
          tempStr ='';
          temp =[];
      }
 }


 render(){
    const numbers = this.state.numPad.map( (num ) =>
    { return <li key = { num.toString() } className = 'numbers' id={ this.state.idForNumbers[num] } onClick={ this.getInput.bind(this, num ) }>{ num }</li> });

    //adding operator list
    const operators = this.state.otherPads.map( ( operator ) =>
    { return <li id= {  this.state.idForOtherPads[this.state.otherPads.indexOf(operator)]}  onClick={ this.getInput.bind(this, operator ) }>{ operator }</li>});

    return(
      <div id='outer-wrapper'>
        <div id='inner-wrapper'>
            <div id='sub-display'> { this.state.subDisplay }</div>
            <div id='display'>{ this.state.mainDisplay }</div>
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
