import React from "react";
import Slider from "react-slick";
import styles from "./autoSlider.module.css"; // Import custom CSS module for styles
import { companyImages } from "../../../dummyData";

const AutoSlider = () => {
  const settings = {
    infinite: true, 
    speed: 800, 
    slidesToShow: 7, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 500,
    cssEase: "ease-in-out",
    arrows: false, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
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
