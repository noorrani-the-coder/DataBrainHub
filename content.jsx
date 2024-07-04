import React from 'react';
import myImage from './assests/desktop-1 (2).png';
import myVideo from './assests/desktop-3.mp4';
import myVideo1 from './assests/Udesktop-3.mp4';

import './content.css'; // Import your CSS file for styling

const Content = () => {
  return (
    <div className="container">
      <div className="image-container">
        <img src={myImage} alt="description" className="my-image" />
        <a href="https://mailamengg.com/courses/b-tech-artificial-intelligence-and-data-science/" className="button1">Explore More</a>
      </div>

      <video src={myVideo1} autoPlay muted loop playsInline className="my-video1" />
      <video src={myVideo} autoPlay muted loop playsInline className="my-video" />
    </div>
  );
};

export default Content;

































