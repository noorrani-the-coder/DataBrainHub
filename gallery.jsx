import React, { useState, useEffect } from "react";
import axios from "axios";
import './gallery.css'

const Gallery = ({ updateImages }) => {
  const [allImages, setAllImages] = useState([]);

  useEffect(() => {
    getImages();
  }, []);

  const getImages = async () => {
    try {
      const result = await axios.get("http://localhost:5000/get-images");
      setAllImages(result.data.data);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    try {
      await axios.post("http://localhost:5000/upload-image", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      // After successful upload, refresh images
      getImages();

      // Call the updateImages function to update the images in the Home component
      updateImages();
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const showImage = (image) => {
    window.open(`http://localhost:5000/images/${image}`, "_blank", "noreferrer");
  };

  const deleteImage = async (imageId) => { // Fix variable name here
    try {
      await axios.delete(`http://localhost:5000/delete5/${imageId}`); // Fix variable name here
      getImages(); // Refresh the list after deletion
    } catch (error) {
      console.error("Error deleting image:", error);
    }
  };

  return (
    <div className="App">
      <div style={{ marginTop: '70px' }}></div>
      <div className="uploaded">
        <h4>Uploaded Images:</h4>
        <input type="file" accept="image/*" onChange={uploadImage} />
        <div className="output-div">
          {allImages.map((image, index) => (
            <div key={index} className="column is-half">
              <div className="inner-div">
                <h6>Title: {image.title}</h6>
                <button
                  className="gallery"
                  onClick={() => showImage(image.image)} // Utilize the showImage function
                >
                  Show Image
                </button>
                <button
                  className="picture"
                  onClick={() => deleteImage(image._id)} // Utilize the deleteImage function
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;






















