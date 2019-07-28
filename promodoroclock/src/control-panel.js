module.exports =  {
  decrement : function(type , length ){
    
    if(  type === 'breaklength' ){
        if(  length < 2 ){
                return 1;// this.setState({ breaklength : 1 });
          }else{
                length  = length - 1;
                return length;// this.setState({ breaklength : this.state.breaklength  - 1   });
        }
      }else{
        if( length < 2 ){
                return 1;
          }else{
              length = length - 1;
              return length;
          }
      }
},

 increment : function( type ,length ){
   if(  type === 'breaklength' ){
       if( length >= 1 && length < 60){
              length  = length  + 1 ;
              return length;//this.setState({ breaklength : this.state.breaklength  + 1   });
         }else if( length >= 60){
              return 60;
         }
     }else{
       if( length >= 1 && length < 60){
              length  = length  + 1 ;
              return length;//this.setState({ breaklength : this.state.breaklength  + 1   });
         }else if( length >= 60){
              return 60;
         }
     }
   }

}
