import React, { Component } from "react";
import { Link } from "react-router-dom";
import { RoomContext } from "../context";
import defaultBcn from "../images/room-1.jpeg";
import Hero from "../components/Hero";
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
      exteras,
      breakfast,
      pets,
      images,
    } = room;
    return (
      <Hero hero="roomsHero">
        <Banner title={`${name} Room`}>
          <Link to="/rooms" className="btn-primary">
            Back to Rooms
          </Link>
        </Banner>
      </Hero>
    );
  }
}
