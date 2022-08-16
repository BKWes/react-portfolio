import React, { useState } from "react";
import resume from './assets/resume.pdf';
import './Resume.css';
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Resume() {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return(
        
        <div>
            <a href={resume} download>
                <button target="_blank" className="m-2">Download Resume</button>
            </a>
        <Document
            file={resume}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={console.error}
          >
            <Page pageNumber={1} />
        </Document>

        </div>
    );
}

export default Resume;