import React, {useState, useEffect} from 'react';
import {fetchProductsApi} from "../../../services/product-api.service";
import {ProductList} from "./product-list.component";
import {useDispatch} from "react-redux";
import {setProductsActions} from "../../../store/product/product.slice";

export const ProductListContainer = () => {
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch()

    const fetchProducts = () => {
        try {
            fetchProductsApi().then(productsResp => dispatch(setProductsActions(productsResp.data)))
        } catch (e) {
            setError(str => str + e)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
         fetchProducts();
    }, [])

    return (
        <>
            {loading ? 'Page is loading' : error ? error : <ProductList/>}
        </>
    )
};

