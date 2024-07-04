// FirstYear.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./firstyear.css"; // Import your CSS file

const TeacherTab = () => {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState("");
  const [allImage, setAllImage] = useState([]);

  useEffect(() => {
    getPdf();
  }, []);

  const getPdf = async () => {
    try {
      const result = await axios.get("http://localhost:5000/get-files");
      setAllImage(result.data.data);
    } catch (error) {
      console.error("Error fetching PDF:", error);
    }
  };

  const submitImage = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("file", file);
    try {
      await axios.post("http://localhost:5000/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      getPdf(); // Refresh the list after upload
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const deletePdf = async (pdfId) => {
    try {
      await axios.delete(`http://localhost:5000/delete/${pdfId}`);
      getPdf(); // Refresh the list after deletion
    } catch (error) {
      console.error("Error deleting PDF:", error);
    }
  };

  const showPdf = (pdf) => {
    window.open(`http://localhost:5000/files/${pdf}`, "_blank", "noreferrer");
  };

  return (
    <div className="App">
      <div className="header">
        <h1 className="title">CIRCULAR</h1>
        <p>Hi, welcome to the circular section!</p>
      </div>

      <form className="formStyles" onSubmit={submitImage}>
        <div className="book">
          <label className="label">Title</label>
          <div className="control">
            <input
              type="text"
              className="input"
              placeholder="Title"
              required
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
        </div>

        <div className="note">
          <label className="label">Choose PDF file</label>
          <div className="control">
            <input
              type="file"
              className="input"
              accept="application/pdf"
              required
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <br />
          <div className="has-text-centered">
            <button className="submition" type="submit">Submit</button>
          </div>
        </div>
      </form>

      <div className="uploaded">
        <h4>Uploaded PDF:</h4>
        <div className="output-div">
          <div className="columns is-multiline">
            {allImage.map((data) => (
              <div className="column is-half" key={data._id}>
                <div className="inner-div">
                  <h6>Title: {data.title}</h6>
                  <button className="showing" onClick={() => showPdf(data.pdf)}>Show Pdf</button>
                  <button className="deleting" onClick={() => deletePdf(data._id)}>Delete</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherTab;
