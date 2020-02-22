import React, { Component } from "react";
import walkerSprite from "../../../Sprite/player_walk.png";

interface Props {
  position: {
    x: number;
    y: number;
  };
}

interface State {}

export default class Player extends Component<Props, State> {
  state = {};

  render() {
    return (
      <div
        style={{
          position: "absolute",
          top: this.props.position.y,
          left: this.props.position.x,
          backgroundImage: `url('${walkerSprite}')`,
          backgroundPosition: "0 0",
          width: "40px",
          height: "40px"
        }}
      />
      //     <h1>toto</h1>
      //   </div>
    );
  }
}
