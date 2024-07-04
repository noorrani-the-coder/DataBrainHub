import React from 'react';

const Slideshow = () => {
  const slides = [
    {
      src: "https://picsum.photos/seed/img1/600/400",
      alt: "Image 1 for carousel"
    },
    {
      src: "https://picsum.photos/seed/img2/600/400",
      alt: "Image 2 for carousel"
    },
    {
      src: "https://picsum.photos/seed/img3/600/400",
      alt: "Image 3 for carousel"
    }
  ];

  return (
    <div className="slideshow">
      {slides.map((slide, index) => (
        <div key={index}>
          <img src={slide.src} alt={slide.alt} />
        </div>
      ))}
    </div>
  );
}

export default Slideshow;
