import React from 'react';
import {ProductModel} from "../../../models/product.model";
import {ProductCard} from "../card/product-card.component";
import {useSelector} from "react-redux";

export const ProductList = () => {
    const products = useSelector(
        (state: {productsRoot: {productsState: ProductModel}}) => state.productsRoot.productsState
    )

    return (
        <>
            {Object.values(products).map(elem => <ProductCard key={elem.id} {...elem}/>)}
        </>
    );
};

