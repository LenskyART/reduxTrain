import {ProductModel} from "../../models/product.model";

interface ProductsReducerState {
    productsState: ProductModel[];
}

const defState: ProductsReducerState = {
    productsState: [],
};

interface SetProductsAction  {
    type: 'setProducts';
    payload: ProductModel[];
}

interface SetProductAction  {
    type: 'setProduct';
    payload: Partial<ProductModel>;
}

export type ActionProduct = SetProductsAction | SetProductAction


export const productReducer = (state = defState, action: ActionProduct) => {
    switch (action.type) {
        case 'setProducts':
            return { ...state, productsState: [...action.payload] };
        case 'setProduct':
            return { ...state, productsState: [action.payload, ...state.productsState] };
        default:
            return state;
    }
};

export const setProductsActions = (payload: ProductModel[]) => ({
    type: 'setProducts',
    payload
});

export const setProductActions = (payload: Partial<ProductModel>) => ({
    type: 'setProduct',
    payload
});