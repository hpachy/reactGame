import React, { Component } from "react";
import styled from "styled-components";

interface Props {
  mapSwitcher: Function;
  listMap: {
    [key: string]: number[][];
  };
  mapSelected: number[][];
}
interface State {}

export default class NavMenu extends Component<Props, State> {
  state = {};

  // componentDidUpdate(prevProps : Props) {
  //   if (prevProps.mapSelected !== this.props.mapSelected)

  // }

  render() {
    const { listMap, mapSwitcher } = this.props;
    console.log("this.props", this.props);
    return listMap ? (
      <NavMenuWrapper>
        <div className="container nav-menu my-2">
          <h3>Map : </h3>
          <div className="row">
            {Object.keys(this.props.listMap).map(
              (map: string, index: number) => (
                <div key={index} className="col-1">
                  <span onClick={() => mapSwitcher(map)} className='button p-1'>{map}</span>
                </div>
              )
            )}
          </div>
        </div>
      </NavMenuWrapper>
    ) : null;
  }
}

const NavMenuWrapper = styled.div`
  .nav-menu {
    background-color: white;
  }
  .button {
    background-color: white;
    border : 1px solid darkgrey;
    border-radius: 50px;
    box-shadow: 0 0px 0px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
    transition-duration: 0.4s;
  }
  
  .button:hover {
    border-radius: 50px;
    border : 1px solid blue;
    background-color: darkgrey;
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
  }
`;
