import React from "react";
import Slider from "react-slick";
import styles from "./autoSlider.module.css"; // Import custom CSS module for styles
import { companyImages } from "../../../dummyData";

const AutoSlider = () => {
  const settings = {
    infinite: true, // Enable infinite scroll for a continuous loop
    speed: 800, // Set transition speed
    slidesToShow: 7, // Number of visible images at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 500, // Adjust for 1-second interval per image
    cssEase: "ease-in-out",
    arrows: false, // Hide default arrows
  };

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.gradientLeft} />
      <Slider {...settings} className={styles.slider}>
        {companyImages.map((image, index) => (
          <div key={index} className={styles.imageContainer}>
            <img src={image} alt={`Company logo ${index + 1}`} />
          </div>
        ))}
      </Slider>
      <div className={styles.gradientRight} />
    </div>
  );
};

export default AutoSlider;
