import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component'
import { addOrderDoc } from '../../firebase/firebase.utils';

const OrdersPage = ({cartItems}) => (
    <div>
        { StripeCheckoutButton === true ?
         (addOrderDoc('orders', cartItems.map(({name, imageUrl, quantity}) => ({name, imageUrl,quantity}))))
        : ''
        }  
    </div>
)

const mapStateToProps = createStructuredSelector({

    cartItems: selectCartItems

});

export default connect(mapStateToProps)(OrdersPage);