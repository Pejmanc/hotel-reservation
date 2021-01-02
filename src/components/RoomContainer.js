import React from "react";
import RoomList from "./RoomList";
import RoomFilter from "./RoomFilter";

export default function RoomContainer() {
  return (
    <div>
      <>
        <RoomFilter />
        <RoomList />
      </>
    </div>
  );
}
