import React, { Component } from "react";
import { RoomContext } from "../context";

export default class FeaturedRooms extends Component {
  static contextType = RoomContext;
  render() {
    let value = this.context;
    return (
      <div>
        <h1>{value}</h1>
      </div>
    );
  }
}
