import React from "react";
import Slider from "react-slick"; // Import React Slick
import "slick-carousel/slick/slick.css"; // Import Slick CSS
import "slick-carousel/slick/slick-theme.css"; // Import Slick theme CSS
import "./TrendingOffers.css"; // Import custom CSS

const TrendingOffers = () => {
  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Infinite scrolling
    speed: 500, // Transition speed
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Autoplay speed in milliseconds
  };

  return (
    <section className="trending-offers">
      <h2>Trending Offers</h2>
      <div className="offers-slider">
        <Slider {...settings}>
          <div className="offer-banner">Offer 1</div>
          <div className="offer-banner">Offer 2</div>
          <div className="offer-banner">Offer 3</div>
          {/* Add more banners as needed */}
        </Slider>
      </div>
    </section>
  );
};

export default TrendingOffers;
