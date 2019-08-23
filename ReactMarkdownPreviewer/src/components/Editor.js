import React from 'react';
import Preview from './Preview';
import '../styles/styles.css';


class Editor extends React.Component{
  constructor(props){
    super(props);
  }
   state = { userdata:
              '# Welcome to my React Markdown Previewer!\r'+
                '## this is sub-heading\r'+
                '### And here\'s some other cool stuff:\r'+
                '[Visit google](https://www.google.com/)\r'+
                'this is a `<span></span>` used in html files\r'+
                 '``` \n'+
                 'function classicForLoop(){ \n' +
                       '\tvar i;\n'+
                       '\tfor (i = 0; i < names.length; i++) { \n'+
                       '\t\ttext += names[i] \n' +
                      '\t}\n' +
                    '}\n\n'+
                  '```' + '\r' +
                  '1. this\r1. is\r1. a numbered\r1. list\r' +
                  '> ### This is a sample blockquote\r' +
                  '> * sample bullet list\r' +
                  '> * within the blockquote\r' +
                  '> * This is a **Bold Text** and *italic* inside the blockquote in the list\r' +
                  '\rAnd this is how how you include an Image:\n' +
                  '![sample Image](https://cdn.pixabay.com/photo/2015/11/06/15/13/internet-1028794__340.jpg)'


            };

   render(){
       const marked = require('marked');
       marked.setOptions({
       renderer: new marked.Renderer(),
       pedantic: false,
       gfm: true,
       tables: true,
       breaks: true,
       sanitize: true,
       smartLists: true,
       smartypants: false,
       xhtml: false
     });

     return(
       <div>
       <div id='title-bar'>Editor</div>
          <textarea id='editor' rows='30' cols='100' value={ this.state.userdata}
          onChange={e => this.setState({userdata: e.target.value})}>
          </textarea>
          <Preview toPreview={ marked(this.state.userdata)}/>
       </div>
     );
   };
}

export default Editor;
