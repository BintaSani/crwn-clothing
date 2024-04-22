import { createSelector } from "reselect";

const selectOrder = state => state.order

export const selectOrderItems = createSelector(
    [selectOrder],
    order => order.orderItems
);

export const selectOrderQuantity = createSelector(
    [selectOrderItems],
    orderItems => orderItems.reduce((accumulatedQuantity, orderItem) => accumulatedQuantity + orderItem.quantity * orderItem.price,0)
)

