import React from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import Hero from "../components/Hero";
import Title from "../components/Title";
import Service from "../components/Service";
import services from "../components/ServicesData";
import FeaturedRooms from "../components/FeaturedRooms";
import Loading from "../components/Loading";
const Home = () => {
  return (
    <>
      <Hero>
        <Banner title="Liked Bars" subtitle="Choose The Best Bar in Your Area">
          <Link to="/rooms/" className="btn-primary">
            Show A Bar
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
      <FeaturedRooms />
      <Loading />
    </>
  );
};

export default Home;
