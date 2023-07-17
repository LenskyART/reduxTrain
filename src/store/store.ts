import {createStore} from '@reduxjs/toolkit'
import {productReducer} from './product/product.slice'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    productsRoot: productReducer,
});

export const store = createStore(
    rootReducer
)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch