import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CheckoutItem from '../../components/checkout-item/checkout-item.component.jsx';
import {selectCartItems,selectCartTotal} from '../../redux/cart/cart.selectors.js' 
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component.jsx';
import { addOrderDoc, convertOrderSnapshotToMap } from '../../firebase/firebase.utils.js';
import { updateQuantity } from '../../redux/order/order.actions.js';
import { firestore } from '../../firebase/firebase.utils.js';
import {
    CheckoutPageContainer,
    CheckoutHeaderContainer,
    HeaderBlockContainer,
    TotalContainer,
    WarningContainer
} from './checkout.styles';



  
const  CheckoutPage = ({cartItems, total}) => {
    const update = updateQuantity
    const order =addOrderDoc('orders',cartItems.map(({id,name, imageUrl, quantity,price}) => ({id,name, imageUrl,quantity,price})));
    console.log(order);
    const orderRef= firestore.collection('orders');
    orderRef.onSnapshot(async snapshot => {
        
        const orderItem= convertOrderSnapshotToMap(snapshot)
        //console.log(quantity);
        console.log(update(orderItem));
    });
    return (
    <CheckoutPageContainer>
        <CheckoutHeaderContainer>
            <HeaderBlockContainer>
                <span>Product</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Description</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Quantity</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Price</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Remove</span>
            </HeaderBlockContainer>
        </CheckoutHeaderContainer>
        {
            cartItems.map(cartItem => 
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            )
        }
        <TotalContainer>
            <span>TOTAL: ${total}</span>
        </TotalContainer>

        <WarningContainer>
             *please use the following test credit card for payments*
            <br/>
            4242 4242 4242 4242 - Exp: 01/25 - Cvv:123
        </WarningContainer>
        <StripeCheckoutButton   price={total} />
        
    </CheckoutPageContainer>
)};

const mapDispatchToProps = dispatch => ({
    updateQuantity: orderItems => dispatch(updateQuantity(orderItems))
});

const mapStateToProps = createStructuredSelector({

    cartItems: selectCartItems,
    total: selectCartTotal
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);