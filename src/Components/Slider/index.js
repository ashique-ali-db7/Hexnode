import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./slider.module.css"; // Import CSS module
import Prev from "../../Assets/images/prev-arrow-icon-black.svg";
import Next from "../../Assets/images/next-arrow-icon-black.svg";
import { cardsData } from "../../dummyData";
import AutoSlider from "./AutoSlider";
function SimpleSlider() {
  function CustomNextArrow(props) {
    const { className, onClick, currentSlide, slideCount } = props;
    const isLastSlide = currentSlide === slideCount - 1;
    return (
      <div className={`${styles.customArrow} ${styles.next}`} onClick={onClick}>
        {/* Adding custom image for next arrow */}
        <img
          src={Next}
          alt="Next"
          className={isLastSlide ? styles.arrowImage : ""}
        />
      </div>
    );
  }

  function CustomPrevArrow(props) {
    const { className, onClick, currentSlide } = props;
    const firstSlide = currentSlide === 0;
    return (
      <div
        className={` ${styles.customArrow} ${styles.prev}`}
        onClick={onClick}
      >
        {/* Adding custom image for previous arrow */}
        <img
          src={Prev}
          alt="Previous"
          className={firstSlide ? styles.arrowImage : ""}
        />
      </div>
    );
  }

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  
  };

  return (
    <div className={styles.container}>
      <div className={styles.sliderContainer}>
        <h1>Why should you choose Hexnode?</h1>
        <Slider {...settings}>
          {/* <div className={styles.cardContainer}> */}
          {cardsData.map((card, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardData}>
                <div className={styles.cardImage}>
                  <img src={card.image} alt={card.title} />
                </div>
                <div className={styles.cardContent}>
                  <h3>{`"${card.title}"`}</h3>
                  <hr className={styles.divider} />
                  <p className={styles.name}>{card.name}</p>
                  <p className={styles.company}>{card.company}</p>
                </div>
              </div>
            </div>
          ))}
          {/* </div> */}
        </Slider>
      </div>
      <AutoSlider />
    </div>
  );
}

export default SimpleSlider;
