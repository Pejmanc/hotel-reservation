import React, { Component } from "react";

const RoomContext = React.createContext();
class RoomProvider extends Component {
  state = {};
  render() {
    return (
      <RoomProvider value="HELLO From Provider">
        {this.props.children}
      </RoomProvider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;
export { RoomProvider, RoomConsumer, RoomContext };
