import React, { ReactElement } from "react";
import MapTile from "./MapTile";

interface Props {
  tiles: number[];
}

export default function MapRow({ tiles }: Props): ReactElement {
  return (
    <div className="">
      {tiles.map((tile: number, index: number) => (
        <MapTile key={index} tile={tile} />
      ))}
    </div>
  );
}
