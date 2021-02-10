import React, { useContext } from "react";
import { RoomContext } from "../context";
import Title from "./Title";

const getUniqueValues = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};
export default function RoomFilter() {
  const context = useContext(RoomContext);
  const {
    rooms,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets,
    handleChange,
  } = context;

  //Types (Single, Duble,...)
  let uniqueTypes = getUniqueValues(rooms, "type");
  uniqueTypes = ["all", ...uniqueTypes];
  uniqueTypes = uniqueTypes.map((type, index) => {
    return (
      <option key={index} value={type}>
        {type}
      </option>
    );
  });

  //Capacity (Number of Guests)
  let people = getUniqueValues(rooms, "capacity");
  people = people.map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });
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
              {uniqueTypes}
            </select>
          </div>
          {/* End Of Select Type */}
          {/* Select Capacity */}
          <div className="form-group">
            <label htmlFor="capacity">Number of Guests</label>
            <select
              name="capacity"
              id="capacity"
              value={capacity}
              className="form-control"
              onChange={handleChange}
            >
              {people}
            </select>
          </div>
          {/* End Of Select Capacity */}
          {/* Select Price */}
          <div className="form-group">
            <label htmlFor="price">room price ${price}</label>
            <input
              type="range"
              name="price"
              min={minPrice}
              max={maxPrice}
              id="price"
              value={price}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          {/* End Of Price */}
          {/* Select Size */}
          <div className="form-group">
            <label htmlFor="size">room size</label>
            <div className="size-inputs">
              <input
                type="number"
                name="minSize"
                id="size"
                value={minSize}
                onChange={handleChange}
                className="size-input"
              />
              <input
                type="number"
                name="maxSize"
                id="size"
                value={maxSize}
                onChange={handleChange}
                className="size-input"
              />
              sqm
            </div>
          </div>
          {/* End Of Size */}
          {/* Select Extras */}
          <div className="form-group">
            <div className="single-extra">
              <input
                type="checkbox"
                name="breakfast"
                id="breakfast"
                checked={breakfast}
                onChange={handleChange}
              />
              <label htmlFor="breakfast">breakfast</label>
            </div>
            {/* End Of Breakfast */}

            <div className="single-extra">
              <input
                type="checkbox"
                name="pets"
                id="pets"
                checked={pets}
                onChange={handleChange}
              />
              <label htmlFor="pets">pets</label>
            </div>
            {/* End Of Pets */}
          </div>
          {/* End Of Extras */}
        </form>
      </section>
    </>
  );
}
