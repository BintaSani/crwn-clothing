import OrderActionTypes from "./order.types";

export const updateQuantity = orderItems => ({
    type: OrderActionTypes.INCREASE_QUANTITY,
    payload: orderItems
});