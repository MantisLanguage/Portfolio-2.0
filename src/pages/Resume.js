import React, { Component } from 'react';
import {Document, Page} from 'react-pdf';
import {rImage} from '../images/shortcut.png'
class Resume extends Component {
  render() {
      return (
          <div>
           {/* <Document
           file ="../images/ConnorResume.pdf"
           onLoadSuccess={this.onDocumentLoadSuccess}
        ></Document> */}
         <iframe src="https://drive.google.com/file/d/1qwH-1G3NnFuCDNaVr6eLX5-olnGauvec/preview" width="100%" height="1000"></iframe>
                      
          </div>
      )
  }

}

export default Resume;