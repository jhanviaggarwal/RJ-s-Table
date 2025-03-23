import React from "react";
import "./PictureWall.css"; // Import the CSS file for styling

const PictureWall = () => {
  return (
    <div className="picture-wall">
      <h2>Picture Wall</h2>
      <div className="collage">
        <img src="path/to/image1.jpg" alt="Description 1" />
        <img src="path/to/image2.jpg" alt="Description 2" />
        <img src="path/to/image3.jpg" alt="Description 3" />
        <img src="path/to/image4.jpg" alt="Description 4" />
        <img src="path/to/image5.jpg" alt="Description 5" />
        {/* Add more images as needed */}
      </div>
    </div>
  );
};

export default PictureWall;
