"use client";

import { FaFileDownload } from 'react-icons/fa';
import { saveAs } from "file-saver";

function saveFile() {
  saveAs(
    "/monCV.pdf",
    "CVPaulDecauchy.pdf"
  );
}
function DownloadCV() {
    
  return (
  <div className="flex items-center text-gray-800 hover:text-primary btn btn-ghost" onClick={saveFile}>
  
  <span className="normal-case text-xl">CV</span>
  <FaFileDownload key="nodejs"  className="text-2xl"/>
  </div>)
}

export default DownloadCV;