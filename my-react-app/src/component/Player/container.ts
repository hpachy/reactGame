//@ts-ignore
import { connect } from "react-redux";
import { compose } from "redux";
import { IStore } from "../IncludeStore";

const mapStateToProps = (state: IStore) => {
  return {...state.player} ;
};

// const mapDispatchToProps = {

// }

export default compose<any>(connect(mapStateToProps)); //, mapDispatchToProps)
