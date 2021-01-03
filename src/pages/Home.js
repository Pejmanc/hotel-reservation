import React from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import Hero from "../components/Hero";
import Title from "../components/Title";
import Service from "../components/Service";
import services from "../components/ServicesData";
import FeaturedRooms from "../components/FeaturedRooms";
// import Loading from "../components/Loading";

const Home = () => {
  return (
    <>
      <Hero>
        <Banner
          title="Luxurious Resort"
          subtitle="Choose The Best Room in Your Favoite Area"
        >
          <Link to="/rooms/" className="btn-primary">
            Show Rooms
          </Link>
        </Banner>
      </Hero>
      <section className="services">
        <Title title="Services" />
        <div className="services-center">
          {services.map((service) => {
            const { title, id, explanation, logo } = service;
            return (
              <Service
                key={id}
                title={title}
                logo={logo}
                explanation={explanation}
              />
            );
          })}
        </div>
      </section>
      <section className="featured-rooms">
        <FeaturedRooms />
      </section>
    </>
  );
};

export default Home;
