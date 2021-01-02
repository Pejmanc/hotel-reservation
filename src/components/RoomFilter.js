import React, { useContext } from "react";
import { RoomContext } from "../context";
import Title from "./Title";
const getUniqueValues = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};
export default function RoomFilter({ rooms }) {
  const context = useContext(RoomContext);
  const {
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets,
  } = context;
  console.log();
  const handleChange = () => {
    console.log(type);
  };
  return (
    <>
      <section className="filter-container">
        <Title title="Search Rooms" />
        <form className="filter-form">
          {/* Select Type */}
          <div className="form-group">
            <label htmlFor="type">room type</label>
            <select
              name="type"
              id="type"
              value={type}
              className="form-control"
              onChange={handleChange}
            >
              <option value=""></option>
            </select>
          </div>
          {/* End Of Select Type */}
        </form>
      </section>
    </>
  );
}
