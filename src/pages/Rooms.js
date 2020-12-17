import React from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import Hero from "../components/Hero";

const Rooms = () => {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="Rooms">
          <Link to="/" className="btn-primary">
            Back to Home
          </Link>
        </Banner>
      </Hero>
    </>
  );
};

export default Rooms;
