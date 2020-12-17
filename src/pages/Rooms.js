import React from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import Hero from "../components/Hero";

export default function Rooms() {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="Rooms" subtitle="start from $200 per night">
          <Link to="/" className="btn-primary">
            Back to Home
          </Link>
        </Banner>
      </Hero>
    </>
  );
}
