import React from "react";
import Navbar from "./components/Navbar";
import TrendingOffers from "./components/TrendingOffers";
import PopularItems from "./components/PopularItems";
import PictureWall from "./components/PictureWall";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <TrendingOffers />
      <PopularItems />
      <PictureWall />
      <Footer />
    </div>
  );
}

export default App;
