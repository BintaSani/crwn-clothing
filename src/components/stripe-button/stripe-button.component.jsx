import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe =price * 100;
    const publishableKey = 'pk_test_51NAcWgC8jhc3RI6fgzPCVm1TrIZuNQdgBl5DBIvDrpzeNEmmXUF9uNpJvLEEclTBkgHMJ8AWweKPdYik8xoy6Awq00acjtChg3';
    

    const onToken = token => {
        console.log(token);
        alert('Payment successful');   
    }
    
    return(
        <StripeCheckout 
        label='pay now'
        name='crwn clothing Ltd.'
        billingAddress
        shippingAddress
        image='https://i.ibb.co/p1CfLnC/crown.png'
        description ={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token ={onToken}
        stripeKey={publishableKey}
        
        />
    );

};


export default StripeCheckoutButton;