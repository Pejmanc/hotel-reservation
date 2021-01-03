import React from "react";
import { useContext } from "react";
import { RoomContext } from "../context";
import Room from "./Room";

export default function RoomList() {
  const context = useContext(RoomContext);
  console.log(context.sortedRooms);
  const { sortedRooms } = context;
  if (sortedRooms.length === 0) {
    return (
      <div className="empty-search">
        <h4>Please Search with different Filters</h4>
      </div>
    );
  }
  return (
    <section className="roomslist">
      <div className="roomslist-center">
        {sortedRooms.map((room) => (
          <Room key={room.id} room={room} />
        ))}
      </div>
    </section>
  );
}
