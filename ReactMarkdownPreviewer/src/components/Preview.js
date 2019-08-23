import React from 'react';
import '../styles/styles.css';

class Preview extends React.Component {

  render() {

    return(
      <div id ='preview-wrapper'>
          <div id='preview-title-bar'>preview</div>
              <div id='preview' dangerouslySetInnerHTML={{__html:this.props.toPreview}} ></div>
      </div>

    );
  };

}

export default Preview;
