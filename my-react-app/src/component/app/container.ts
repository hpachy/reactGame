import { connect } from 'react-redux'
import { IStore } from '../IncludeStore';

const mapStateToProps = (state: IStore) => {
    return state;
}

// const mapDispatchToProps = {
// }

export default connect(mapStateToProps, null)
