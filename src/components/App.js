import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';

function mapStateToProps(state) {
  return {
    header: state.header,
    cart: state.cart,
    collection: state.collection,
    product: state.product,
    data: state.data,
    homepage: state.homepage,
    page: state.page,
    search: state.search
  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const App = withRouter(connect(mapStateToProps, mapDispachToProps)(Main));

export default App;
