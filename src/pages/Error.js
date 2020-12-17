import React from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import Hero from "../components/Hero";

const Error = () => {
  return (
    <>
      <Hero>
        <Banner title="404 Error">
          <Link to="/" hero="btn-primary">
            Back to Home
          </Link>
        </Banner>
      </Hero>
    </>
  );
};

export default Error;
