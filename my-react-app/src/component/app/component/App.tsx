import React, { ReactElement } from 'react';
import World from "../../World";
import NavMenu from "../../Menu";
import { IStore } from '../../IncludeStore';

interface Props {
  store: IStore
}

export default function App({}: Props): ReactElement {
  return (
    <div>
      <NavMenu />
      <World />
    </div>
  )
}
