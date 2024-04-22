import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CheckoutItem from '../../components/checkout-item/checkout-item.component.jsx';
import {selectCartItems,selectCartTotal} from '../../redux/cart/cart.selectors.js' 
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component.jsx';
import { addOrderDoc } from '../../firebase/firebase.utils.js';
// import { updateQuantity } from '../../redux/order/order.actions.js';
// import { firestore } from '../../firebase/firebase.utils.js';
import {
    CheckoutPageContainer,
    CheckoutHeaderContainer,
    HeaderBlockContainer,
    TotalContainer,
    WarningContainer,
    TotalSpan
} from './checkout.styles';

// const update = updateQuantity
// const orderRef= firestore.collection('orders');
// export const Shot = orderRef.onSnapshot(async snapshot => {
        
//         const orderItem= convertOrderSnapshotToMap(snapshot);
//         console.log(update(orderItem))
//     });
  
const  CheckoutPage = ({cartItems, total}) => {
    
    // const order =addOrderDoc('orders',cartItems.map(({id,name, imageUrl, quantity,price}) => ({id,name, imageUrl,quantity,price})));
    // console.log(order);
    
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
            <TotalSpan>TOTAL: ${total}</TotalSpan>
        </TotalContainer>

        <WarningContainer>
             *please use the following test credit card for payments*
            <br/>
            4242 4242 4242 4242 - Exp: 01/25 - Cvv:123
        </WarningContainer>
        <StripeCheckoutButton  onSubmit={()=>addOrderDoc('orders',cartItems.map(({id,name, imageUrl, quantity,price}) => ({id,name, imageUrl,quantity,price})))} price={total} />
        
    </CheckoutPageContainer>
)};

// const mapDispatchToProps = dispatch => ({
//     updateQuantity: orderItems => dispatch(updateQuantity(orderItems))
// });

const mapStateToProps = createStructuredSelector({

    cartItems: selectCartItems,
    total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);