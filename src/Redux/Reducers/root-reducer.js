import { combineReducers } from "redux";
import { cartReducer } from "./cart.reducer";
import { productsReducers } from "./reducer";


export const rootReducer= combineReducers({
    all_data:productsReducers,
    cartItem:cartReducer
})