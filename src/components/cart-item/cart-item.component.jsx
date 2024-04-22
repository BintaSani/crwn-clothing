import React from 'react';

import { CartItemContainer, CartItemImage, CartItemDetails, CartItemName } from './cart-item.styles'; 

const CartItem = ({ item: { imageUrl, price, name, quantity}}) => (
    <CartItemContainer>
        <CartItemImage src={imageUrl} alt='item' />
        <CartItemDetails className='item-details'>
            <CartItemName className='name'>{name}</CartItemName>
            <span className='price'>
                {quantity} x ${price}
            </span>
        </CartItemDetails>
    </CartItemContainer>
)

export default CartItem;