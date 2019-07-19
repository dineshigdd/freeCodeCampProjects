import React from 'react';
import ReactDOM from 'react-dom';
import Break from 'Break'


class App extends React.Component {

  render(){
    return(
          <div>
              <Break />

          </div>
    );
  }
}

ReactDOM.render(<App /> , document.querySelector('#root'));
