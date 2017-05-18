import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/actionCreators';
import ProductsGrid from './ProductsGrid';

function mapStateToProps(state) {
  return {
    homeCollection: state.homeCollection
  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const ProductsConnector = connect(mapStateToProps, mapDispachToProps)(ProductsGrid);

export default ProductsConnector;