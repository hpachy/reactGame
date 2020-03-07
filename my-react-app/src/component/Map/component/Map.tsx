import React, { Component } from "react";
import MapRow from "./features/MapRow";

interface Props {
  tiles: number[][];
}
interface State {
  tiles: number[][];
}

export default class Map extends Component<Props, State> {
  state = {
    tiles: []
  };

  render() {
    const { tiles } = this.props;
    return tiles !== null ? (
      <div
        style={{
          width: "800px",
          height: "600px"
        }}
      >
        {tiles.map((row: number[]) => (
          <MapRow tiles={row} />
        ))}
      </div>
    ) : null;
  }
}
