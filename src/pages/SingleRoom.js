import React, { Component } from "react";
import { Link } from "react-router-dom";
import { RoomContext } from "../context";
import defaultBcn from "../images/room-1.jpeg";
import StyledHero from "../components/StyledHero";
import Banner from "../components/Banner";

export default class SingleRoom extends Component {
  static contextType = RoomContext;

  constructor(props) {
    super(props);

    this.state = {
      slug: this.props.match.params.slug,
      defaultBcn,
    };
  }

  getRoom = (slug) => {
    const { rooms } = this.context;
    let tempRooms = rooms;
    const room = tempRooms.find((room) => room.slug === slug);
    return room;
  };

  render() {
    const room = this.getRoom(this.state.slug);
    if (!room) {
      return (
        <div className="error">
          <h3>No Such Room Found...</h3>
          <Link to="/rooms" className="btn-primary">
            Back To Rooms
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images,
    } = room;
    const [mainImage, ...restOfImages] = images;
    return (
      <>
        <StyledHero img={mainImage || defaultBcn}>
          <Banner title={`${name} Room`}>
            <Link to="/rooms" className="btn-primary">
              Back to Rooms
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            {restOfImages.map((item, index) => {
              return <img key={index} src={item} alt={name} />;
            })}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>Details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>Info</h3>
              <h6>Price: ${price}</h6>
              <h6>size: {size} SQft</h6>
              <h6>
                Max Capacity: {capacity} {capacity < 2 ? "person" : "people"}
              </h6>
              <h6>{pets ? "Pets Allowed" : "No Pets Allowed"}</h6>
              <h6>{breakfast && "Free Breakfast Included"}</h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h6>extras</h6>
          <ul className="extras">
            {extras.map((item, index) => {
              return <li key={index}>- {item}</li>;
            })}
          </ul>
        </section>
      </>
    );
  }
}
