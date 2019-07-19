import React from 'react';




class Break extends React.Component {

  render(){
    return(
      <div>
          <div id="break-label">Break Length</div>
            <div className='settings-btn-move'>
                <button id="break-decrement"><i className="angle down icon"></i></button>
                <div id="break-length" className="div-padding">5</div>
                <button id="break-increment"><i className="angle up icon"></i></button>
            </div>
        </div>
    );
  }
}

export default Break;
