import {ProductModel} from "../../models/product.model";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchProductsApi} from "../../services/product-api.service";

interface ProductsState {
    productsState: Partial<ProductModel[]>;
    isLoading: boolean,
    error: string
}

const initialState: ProductsState = {
    productsState: [],
    isLoading: false,
    error: ''
};

export const productReducer = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProductToStart(state, {payload: product}: PayloadAction<ProductModel>){
            state.productsState.push(product)
        }
    },
    extraReducers: {
        [fetchProductsApi.fulfilled.type]: (state, {payload: products}: PayloadAction<ProductModel[]>) => {
            state.isLoading = false
            state.productsState = products
            state.error = ''
        },
        [fetchProductsApi.pending.type]: (state) => {
            state.isLoading = true
        },
        [fetchProductsApi.rejected.type]: (state, {payload: string}: PayloadAction<string>) => {
            state.error = string
        },
    }
})

export const {actions} = productReducer
export default productReducer.reducer
