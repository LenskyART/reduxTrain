import axios from "axios";
import {PRODUCTS_URL} from "../constants/api.constants";
import {ProductModel} from "../models/product.model";
import {createAsyncThunk} from "@reduxjs/toolkit";
//
// export const fetchProductsApi = async (): Promise<AxiosResponse<ProductModel[]>> => {
//     try {
//         return await axios.get(PRODUCTS_URL)
//     } catch (e) {
//         throw new Error(e instanceof Error ? e.message : 'error in fetchProductsApi')
//     }
// }

export const fetchProductsApi = createAsyncThunk(
    'product/fetchAll',
    async (_, thunkApi) => {
        try {
            const response = await axios.get<ProductModel[]>(PRODUCTS_URL)
            return response.data
        } catch (e) {
            return thunkApi.rejectWithValue('error in fetchProductsApi')
        }
    }
)