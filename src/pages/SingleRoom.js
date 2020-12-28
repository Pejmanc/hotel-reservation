import React, { Component } from "react";
import { RoomContext } from "../context";
import defaultBcn from "../images/room-1.jpeg";
export default class SingleRoom extends Component {
  static contextType = RoomContext;

  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     // slug: this.props.match.params.slug,
  //     defaultBcn,
  //   };
  // }

  render() {
    console.log(this.props);
    const { getRoom } = this.context;
    let slug = this.props.match.params.slug;
    // const room = getRoom(this.state.slug);
    const room = getRoom(slug);
    const { name } = room;
    return (
      <div>
        <h3>{name}</h3>
      </div>
    );
  }
}
