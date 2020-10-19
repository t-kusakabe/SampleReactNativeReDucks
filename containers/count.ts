import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import CountComponent from '../components/count';
import * as countReducer from '../modules/count';

const mapStateToProps = (state: countReducer.ICountState) => {
  return {
    count: state.count
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    ...bindActionCreators(countReducer, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CountComponent);
