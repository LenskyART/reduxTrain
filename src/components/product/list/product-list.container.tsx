import React, {useEffect} from 'react';
import {fetchProductsApi} from "../../../services/product-api.service";
import {ProductList} from "./product-list.component";
import {useAppDispatch} from "../../../hooks/useDispatch";

export const ProductListContainer = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchProductsApi())
    }, [])

    return (
        <ProductList/>
    )
};

