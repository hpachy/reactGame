//@ts-ignore
import { connect } from "react-redux";
import { compose, Dispatch } from "redux";
import { IStore } from "../IncludeStore";
import { mapSwitcher } from "../../actions/map";

const mapStateToProps = (state: IStore) => {
  return { ...state.maps };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  mapSwitcher: (map: string) => dispatch(mapSwitcher(map))
});

export default compose<any>(connect(mapStateToProps, mapDispatchToProps)); //, mapDispatchToProps)
