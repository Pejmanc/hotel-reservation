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

export default class FeaturedRooms extends Component {
  static contextType = RoomContext;
  render() {
    const { featuredRooms: rooms } = this.context;
    console.log(rooms);
    return (
      <div>
        <h1>Hello </h1>
      </div>
    );
  }
}
