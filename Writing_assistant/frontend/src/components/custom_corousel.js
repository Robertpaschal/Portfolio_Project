import React, { useState, useEffect} from 'react'
import '../styles/corousel.css';
import landingpage from '../assets/images/landingpage_icon.png';
import image1 from '../assets/images/image1.png';
import image4 from '../assets/images/image4.png';


const images = [
  landingpage,
  image1,
  image4,
];

const CustomCorousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Set up interval to automatically change slide every second
  useEffect(() => {
    const intervalId = setInterval(nextSlide, 3000); // 1000 ms = 1 second

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div className="relative w-full h-64 overflow-hidden">
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="w-full h-full object-cover"
      />
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        &#10095;
      </button>
    </div>
  );
};

export default CustomCorousel