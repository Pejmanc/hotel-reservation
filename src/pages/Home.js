import React from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <Hero>
      <Banner title="Luxurious Rooms" subtitle="Make Sure Visit All Rooms">
        <Link to="/rooms/" className="btn-primary">
          Show Rooms
        </Link>
      </Banner>
    </Hero>
  );
};

export default Home;
