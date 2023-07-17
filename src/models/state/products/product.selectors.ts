import {ProductModel} from "../../product.model";
import {useSelector} from "react-redux";

export const products = useSelector(
    (state: { products: { products: ProductModel[] } }) => state.products.products
);

