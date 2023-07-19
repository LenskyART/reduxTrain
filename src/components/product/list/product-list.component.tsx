import React, {memo} from 'react';
import {ProductCard} from "../card/product-card.component";
import {useAppSelector} from "../../../hooks/useDispatch";

export const ProductList = () => {
    const products = useAppSelector(state => state.products.productsState)

    return (
        <>
            {products.map(elem => elem ? <ProductCard key={elem.id} {...elem}/> : null)}
        </>
    );
};

