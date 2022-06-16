import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk"
import { ProductReducer } from "./Product/reducer";

const RootReducer = combineReducers({
    product:ProductReducer
})
export const store =legacy_createStore(RootReducer, applyMiddleware(thunk))