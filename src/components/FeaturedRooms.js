// import React, { Component } from "react";
// import { RoomContext } from "../context";

// export default class FeaturedRooms extends Component {
//   static contextType = RoomContext;
//   render() {
//     const { greeting, name } = this.context;
//     return (
//       <div>
//         <h1>
//           {greeting}
//           {name} from Context
//         </h1>
//       </div>
//     );
//   }
// }

// import React, { Component } from "react";
// import { RoomContext } from "../context";
// export default class FeaturedRooms extends Component {
//   static contextType = RoomContext;

//   render() {
//     const { greeting, name } = this.context;
//     return (
//       <div>
//         <h1>
//           {greeting}, {name}
//         </h1>
//       </div>
//     );
//   }
// }

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
