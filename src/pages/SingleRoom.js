import React, { Component } from "react";
import { RoomContext } from "../context";
import defaultBcn from "../images/room-1.jpeg";
export default class SingleRoom extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slug: this.props.match.params.slug,
      defaultBcn,
    };
  }
  static contextType = RoomContext;

  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    const { name } = room;
    return (
      <div>
        <h3>{name}</h3>
      </div>
    );
  }
}
