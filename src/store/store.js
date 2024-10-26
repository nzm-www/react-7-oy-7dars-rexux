import { combineReducers, createStore } from "redux";
import cartReducer from "./cartReducer";

const rooteReduscer = combineReducers({
    cart: cartReducer,

}) 

export const store = createStore(rooteReduscer) 