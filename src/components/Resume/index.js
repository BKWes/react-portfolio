import React, { useState } from "react";
// import resume from assets
import './Resume.css';
// import { Document, Page } from "react-pdf";
// import { pdfjs } from 'react-pdf';

// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Resume() {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return(
        <div className="mt-3 p-3">
            <p>Resume coming soon...</p>    
        </div>
        // <div>
        //     <a href={resume} download>
        //         <button target="_blank" className="m-2">Download Resume</button>
        //     </a>
        // <Document
        //     file={resume}
        //     onLoadSuccess={onDocumentLoadSuccess}
        //     onLoadError={console.error}
        //   >
        //     <Page pageNumber={1} />
        // add more pages if needed
        // </Document>

        // </div>
    );
}

export default Resume;