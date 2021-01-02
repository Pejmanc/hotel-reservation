import React, { Component } from "react";
import { RoomContext } from "../context";
import Title from "./Title";
import Room from "./Room";
import Loading from "./Loading";
export default class FeaturedRooms extends Component {
  static contextType = RoomContext;

  render() {
    const { loading, featuredRooms } = this.context;
    const tempFeaturedRooms = featuredRooms.map((featuredRoom) => {
      return <Room key={featuredRoom.id} room={featuredRoom} />;
    });

    return (
      <section className="featured-rooms">
        <Title title="Featured Rooms" />
        <div className="featured-rooms-center">
          {loading ? <Loading /> : tempFeaturedRooms}
        </div>
      </section>
    );
  }
}

// import React, { Component } from "react";
// import { RoomContext } from "../context";
// import Title from "./Title";
// import Loading from "./Loading";
// import Room from "./Room";
// export default class FeaturedRooms extends Component {
//   static contextType = RoomContext;
//   render() {
//     const { loading, featuredRooms } = this.context;
//     const tempFeaturedRooms = featuredRooms.map((featuredRoom) => (
//       <Room key={featuredRoom.id} room={featuredRoom} />
//     ));

//     return (
//       <section>
//         <Title title="Featured Rooms" />
//         {loading ? <Loading /> : tempFeaturedRooms}
//       </section>
//     );
//   }
// }
