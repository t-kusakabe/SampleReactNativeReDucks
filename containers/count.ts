import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CountComponent from '../components/count';
import * as CountModule from '../modules/count';

const mapStateToProps = (state: any) => {
  return {
    count: state.count
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    ...bindActionCreators(CountModule, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CountComponent);
