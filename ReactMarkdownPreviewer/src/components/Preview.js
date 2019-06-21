import React from 'react';
//import marked from 'marked';

//import ReactMarkDown from 'react-markdown';

class Preview extends React.Component {

  render() {
  //   const marked = require('marked');
  //   marked.setOptions({
  //   renderer: new marked.Renderer(),
  //   pedantic: false,
  //   gfm: true,
  //   tables: true,
  //   breaks: false,
  //   sanitize: true,
  //   smartLists: true,
  //   smartypants: false,
  //   xhtml: false
  // });
  //   const output = marked(this.props.toPreview);
    return(
      <div id='Preview' dangerouslySetInnerHTML={{__html:this.props.toPreview}}  >

      </div>

    );
  };

}

export default Preview;
