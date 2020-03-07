import React, { Component } from "react";
import Map from "../../Map";
import Player from "../../Player";

interface Props {}
interface State {}

export default class World extends Component<Props, State> {
  state = {};

  render() {
    return (
      <div
        className="mx-auto"
        style={{
          position: "relative",
          width: "808px",
          height: "608px",
          border: "4px solid brown"
        }}
      >
        <Map />
        <Player />
      </div>
    );
  }
}
