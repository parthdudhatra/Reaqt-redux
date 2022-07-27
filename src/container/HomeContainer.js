/* eslint-disable no-undef */
import Home from '../component/Home';
import { connect } from 'react-redux';
import { addToCart,removeToCart} from '../Service/Actions/action'


const mapStateToProps = state => ({
    // cardData : state
})  

const mapDispatchToProps = dispatch => ({
    addToCartHandler : data => dispatch(addToCart(data)),
    removeToCartHandler : data =>dispatch(removeToCart(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(Home) 