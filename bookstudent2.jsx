import React, { useState, useEffect } from "react";
import axios from "axios";
import './student.css';

const Bookstudent2 = () => {
  const [allImage, setAllImage] = useState([]);

  useEffect(() => {
    getPdf();
  }, []);

  const getPdf = async () => {
    try {
      const result = await axios.get("http://localhost:5000/get-files6");
      setAllImage(result.data.data);
    } catch (error) {
      console.error("Error fetching PDF:", error);
    }
  };

  const showPdf = (pdf) => {
    window.open(`http://localhost:5000/files/${pdf}`, "_blank", "noreferrer");
  };

  return (
    <div className="App">
      <div className="content">
        <p>hi student second year reference book are available here, check out!</p>
      </div>
      
      <div className="uploaded">
        <h1 className="title">SECOND YEAR REFERENCE BOOK</h1>
        <div className="output-div">
          <div className="columns is-multiline">
            {allImage == null
              ? ""
              : allImage.map((data) => (
                  <div className="column is-half" key={data.title}>
                    <div className="inner-div">
                      <h6>Title: {data.title}</h6>
                      <button
                        className="firstbutton"
                        onClick={() => showPdf(data.pdf)}
                      >
                        Show Pdf
                      </button>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookstudent2;