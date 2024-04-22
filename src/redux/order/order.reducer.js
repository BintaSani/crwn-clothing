import OrderActionTypes from "./order.types";
import { increaseOrderQuantity } from "./order.utils";


const INITIAL_STATE = {
    orderItems: []
};

const orderReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case OrderActionTypes.INCREASE_QUANTITY:
            return {
                ...state,
                orderItems: increaseOrderQuantity(state.orderItems,action.payload) 
            };
        default:
            return state;
    }
}

export default orderReducer;