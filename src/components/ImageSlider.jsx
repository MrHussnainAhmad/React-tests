import React, { useEffect, useState } from "react";
import "./ImageSlider.css";

// Dynamically import all images from the assets directory
const importAll = (requireContext) => {
  return requireContext.keys().map((key) => {
    return requireContext(key);
  });
};

const images = importAll(
  require.context("../assets/ImgSlider", false, /\.(png|jpe?g|svg)$/)
);

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <center>
      <div className="image-slider">
        <img src={images[currentIndex]} alt="slideshow" />
      </div>
    </center>
  );
};

export default ImageSlider;
