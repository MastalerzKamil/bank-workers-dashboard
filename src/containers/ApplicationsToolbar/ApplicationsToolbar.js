import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as DialogActions from 'actions/DialogActions/pure';
import { ApplicationsToolbar } from 'views/ApplicationsList/components';

const mapStateToProps = (state) => state.DialogReducer;

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ ...DialogActions }, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ApplicationsToolbar)