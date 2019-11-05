import React, { Component } from 'react';
import PDFViewer from 'pdf-viewer-reactjs';
class Resume extends Component {
  render() {
      return (
          <div>
            <PDFViewer
            document = {{url: 'http://www.pdf995.com/samples/pdf.pdf'}}
            />
          </div>
      )
  }

}

export default Resume;