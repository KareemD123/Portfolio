import React, { Component } from "react";

// import jsPDF from "jspdf";
// import { Document } from "react-pdf";
// import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
// import { PDFtoIMG } from "react-pdf-to-image";
// import file from "./resumePDF/kareemresume.pdf";

export class Resume extends Component {
  render() {
    return (
      <div className="resume">
        <h1>Resume Page</h1>
        <a href="https://www.linkedin.com/in/kareem-draz" target="_blank">
          LinkedIn Profile
        </a>
        <br />
        <img
          className="myresume"
          src={require("./pictures/kareemresume.JPG")}
        />
      </div>
    );
  }
}

export default Resume;
