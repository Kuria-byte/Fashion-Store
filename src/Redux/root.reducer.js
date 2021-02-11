import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

// Reducers
import mobileReducer from './Mobile/mobile.reducer'
import userReducer from './User/user.reducer'
import cartReducer from './Cart/cart.reducer'
import wishReducer from './Wish/wish.reducers'
import directoryReducer from './Directory/directory.reducer'
import shopReducer from './Shop/shop.reducer'

// Firebase is persisting the user, so we don't need to persist it in our config
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart', 'user', 'wish' ]
}


const rootReducer = combineReducers({
    menu: mobileReducer,
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer,
    wish: wishReducer
});

export default persistReducer(persistConfig, rootReducer)