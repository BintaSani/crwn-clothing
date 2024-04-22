
export const increaseOrderQuantity = (orderItems, orderItemToAdd) => {
    const existingOrderItem = orderItems.find(
        orderItem => orderItem.id === orderItemToAdd.id
    );

    if(existingOrderItem){
        return orderItems.map(orderItem =>
            orderItem.id === orderItemToAdd.id
              ? {...orderItem, quantity: orderItem.quantity + orderItemToAdd.quantity}
              : orderItem
            )
    }

    return [...orderItems, {...orderItemToAdd, quantity: 1}]
};