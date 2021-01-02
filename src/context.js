import React, { Component } from "react";
import items from "./data";

const RoomContext = React.createContext();
class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    type: "all",
    capacity: 0,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false,
  };

  componentDidMount() {
    let rooms = this.formatData(items);
    let featuredRooms = rooms.filter((room) => room.featured === true);
    let maxPrice = Math.max(...rooms.map((item) => item.price));
    let maxSize = Math.max(...rooms.map((item) => item.size));

    this.setState({
      rooms,
      featuredRooms,
      sortedRooms: rooms,
      loading: false,
      price: maxPrice,
      maxPrice,
      maxSize,
    });
  }

  filterRooms = () => {
    console.log("Hello From filterRoomas in context");
  };

  formatData(items) {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);
      let room = { ...item.fields, images, id };
      return room;
    });

    return tempItems;
  }

  // getRoom = (slug) => {
  //   let tempRooms = this.state.rooms;
  //   const room = tempRooms.find((room) => room.slug === slug);
  //   return room;
  // };

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState(
      {
        [name]: value,
      },
      //callback function
      //we only run this when state is changed
      this.filterRooms
    );
  };

  filterRooms = () => {
    let {
      rooms,
      capacity,
      price,
      minSize,
      maxSize,
      breakfast,
      pets,
      type,
    } = this.state;

    //All the rooms
    let tempRooms = [...rooms];

    //Transform Values
    capacity = parseInt(capacity);
    price = parseInt(price);

    //Filter by Type
    if (type !== "all") {
      tempRooms = tempRooms.filter((room) => room.type === type);
    }

    //Filter by Capacity
    if (capacity !== "1") {
      tempRooms = tempRooms.filter((room) => room.capacity >= capacity);
    }

    //Filter by Price
    tempRooms = tempRooms.filter((room) => room.price <= price);

    //Filter by Size
    tempRooms = tempRooms.filter(
      (room) => room.size <= maxSize && room.size >= minSize
    );

    //Filter by Breackfast
    if (breakfast) {
      tempRooms = tempRooms.filter((room) => room.breakfast === true);
    }

    //Filter by Pets
    if (pets) {
      tempRooms = tempRooms.filter((room) => room.pets === true);
    }

    tempRooms = tempRooms.filter(
      (room) => room.size <= maxSize && room.size >= minSize
    );

    this.setState({
      sortedRooms: tempRooms,
    });
  };

  render() {
    return (
      <RoomContext.Provider
        value={{ ...this.state, handleChange: this.handleChange }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}
const RoomConsumer = RoomContext.Consumer;
export { RoomContext, RoomProvider, RoomConsumer };

// import React, { Component } from "react";
// import items from "./data";
// const RoomContext = React.createContext();
// class RoomProvider extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       rooms: [],
//       featuredRooms: [],
//       sortedRooms: [],
//       loading: true,
//     };
//   }

//   componentDidMount() {
//     let rooms = this.formatData(items);
//     let featuredRooms = rooms.filter((room) => room.featured === true);
//     this.setState({
//       rooms,
//       featuredRooms,
//       sortedRooms: rooms,
//       loading: false,
//     });
//   }

//   formatData(items) {
//     let tempItems = items.map((item) => {
//       let id = item.sys.id;
//       let images = item.fields.images.map((image) => image.fields.file.url);
//       let room = { ...item.fields, id, images };
//       return room;
//     });
//     return tempItems;
//   }

//   render() {
//     return (
//       <RoomContext.Provider value={{ ...this.state }}>
//         {this.props.children}
//       </RoomContext.Provider>
//     );
//   }
// }

// const RoomConsumer = RoomContext.Consumer;
// export { RoomContext, RoomProvider, RoomConsumer };

// import React, { Component } from "react";
// import items from "./data";
// const RoomContext = React.createContext();

// class RoomProvider extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       rooms: [],
//       featuredRooms: [],
//       sortedRooms: [],
//       loading: true,
//     };
//   }

//   componentDidMount() {
//     let rooms = this.formatData(items);
//     let featuredRooms = room.filter((room) => room.featured === true);

//     this.setState({
//       rooms,
//       featuredRooms,
//       sortedRooms: rooms,
//       loading: false,
//     });
//   }

//   formatData(items) {
//     const formatedData = items.map((item) => {
//       let id = item.sys.id;
//       let images = item.fields.images.map((image) => image.fields.file.url);
//       let room = { ...item.fields, id, images };
//       return room;
//     });
//     return formatedData;
//   }

//   render() {
//     return (
//       <RoomContext.Provider value={{ ...this.state }}>
//         {this.props.children}
//       </RoomContext.Provider>
//     );
//   }
// }

// const RoomConsumer = RoomContext.Consumer;
// export { RoomContext, RoomProvider, RoomConsumer };
