import React from "react";
import { useDropzone } from "react-dropzone";
import "./Uploader.css";

function Uploader(props) {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map((file) => (
    <li class="li-files" key={file.path}>
      {file.path}
    </li>
  ));

  return (
    <section className="dropzone-container">
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <p>Drag and drop files here, or click to select files</p>
      </div>
      <aside>
        <h4>Files</h4>
        <ul class="ul-files">{files}</ul>
      </aside>
    </section>
  );
}
export default Uploader;
