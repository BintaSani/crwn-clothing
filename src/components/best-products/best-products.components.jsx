import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import CheckoutItem from '../checkout-item/checkout-item.component';

const BestProduct = ({cartItems}) => {
const {imageUrl, name, quantity} = cartItems;
return(
    <div>
        
        
    </div>
)
}

const mapStateToProps = createStructuredSelector({
cartItem:selectCartItems
    

});

export default connect(mapStateToProps)(BestProduct);