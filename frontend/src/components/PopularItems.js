import React from "react";
import "./PopularItems.css";

const PopularItems = () => {
  const scrollLeft = () => {
    document.querySelector(".cards-container").scrollBy({
      left: -300, // Adjust scroll distance
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    document.querySelector(".cards-container").scrollBy({
      left: 300, // Adjust scroll distance
      behavior: "smooth",
    });
  };

  return (
    <div className="popular-items">
      <h2>Popular Items</h2>
      <div className="scroll-buttons">
        <button className="scroll-left" onClick={scrollLeft}>
          &#8592;
        </button>
        <button className="scroll-right" onClick={scrollRight}>
          &#8594;
        </button>
      </div>
      <div className="cards-container">
        <div className="card">Dish 1</div>
        <div className="card">Dish 2</div>
        <div className="card">Dish 3</div>
        <div className="card">Dish 4</div>
        <div className="card">Dish 5</div>
        <div className="card">Dish 6</div>
        {/* Add more cards as needed */}
      </div>
    </div>
  );
};

export default PopularItems;
