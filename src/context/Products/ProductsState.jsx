import { useReducer } from "react";
import ProductsReducer from "./ProductsReducer";
import axios from "axios";
import ProductsContext from "./ProductsContext";
import Swal from "sweetalert2";

const servidor = 'https://web-production-ca2b5.up.railway.app/';
const ProductsState = (props) => {
    const initialState = {
        products: [],
        selectedProduct: null,
    };

    const [state, dispatch] = useReducer(ProductsReducer, initialState);
    const getproducts = async (data) => {
        const res = await axios.get(servidor + 'api/items', {
            params: data
        });

        dispatch({
            type: 'GET_PRODUCTS',
            payload: res.data
        });
    }

    const details = async (id) => {
        const res = await axios.get(servidor + 'api/items/'+ id);
        dispatch({
            type: 'GET_DETAIL',
            payload: res.data
        })
    }

    const sales = async (data) => {
        const res = await axios.post(servidor + 'api/addSale', data)
        Swal.fire({
            title: "Has realizado una compra",
            text: "Se ha agregado tu producto en tu historial de compras",
            icon: "success"
          });

        dispatch({
            type: 'ADD_SALE',
            payload: res.data
        })
    }

    const mysales = async () => {
        const res = await axios.get(servidor + 'api/sales')

        dispatch({
            type: 'GET_SHOP',
            payload: res.data
        });
    }

    return (
        <ProductsContext.Provider 
        value={{
            products: state.products,
            selectedProduct: state.selectedProduct,
            getproducts,
            details,
            sales,
            mysales
        }}
        >
            {props.children}
        </ProductsContext.Provider>
    )
}

export { ProductsState as ProductsProvider };