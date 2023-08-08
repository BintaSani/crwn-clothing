import React from 'react';
import { connect } from 'react-redux';
import { removeItem } from '../redux/cart/cart.actions';
import { OrderContainer,ImageContainer, QuantityValue, TextContainer, Button } from './orders.styles';



const Orders = ({cartItems, removeItem}) => {
    const {name, imageUrl, id, quantity } = cartItems;
    return(
    <OrderContainer>
        <ImageContainer>
        <img src={imageUrl} alt='item' />
        </ImageContainer>
        <div>
        <TextContainer>{name}</TextContainer>
        <TextContainer>{id}</TextContainer>
        <QuantityValue>{quantity}</QuantityValue>
        </div>
        <Button onClick={removeItem}>Pending</Button>
        
    </OrderContainer>)
};



const mapDispatchToProps = dispatch =>({
    removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(Orders);