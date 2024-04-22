import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import managementReducer from './management/management.reducer';
import CartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';
import orderReducer from './order/order.reducer';

const persistConfig ={
    key: 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    user: userReducer,
    management: managementReducer,
    cart: CartReducer,
    directory: directoryReducer,
    shop: shopReducer,
    order: orderReducer
});

export default persistReducer(persistConfig, rootReducer);