import { GET_PRODUCTS, GET_DETAIL, GET_SHOP } from "../types";

export default (state, action) => {
    const {payload, type} = action;


    switch(type) {
        case GET_PRODUCTS:
            return {
                ...state, products: payload
            }
        case GET_DETAIL:
            return {
                ...state, selectedProduct: payload
            }
        case GET_SHOP:
                return {
                    ...state, products: payload
                }

        default:
            return state;
    }
};