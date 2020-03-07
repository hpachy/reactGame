import { connect } from "react-redux";
import { IStore } from "../IncludeStore";
import { compose } from "redux";

const mapStateToProps = (state: IStore): {tiles: number[][]} => {
    return {
        tiles: state.maps.mapSelected
    }
};

// const mapDispatchToProps = {
// }

export default compose<any>(connect(mapStateToProps, null));
