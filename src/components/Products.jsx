import { useContext, useState } from "react";
import ProductContext from "../context/Products/ProductsContext";
import { useNavigate } from "react-router-dom";
import './Animacion.css'

const Products = () => {
    const {products, getproducts} = useContext(ProductContext);
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');


    if (!products || products.length === 0) {
        return <div className="loader"></div>;
    }

    const getDetail = (id) => {
        navigate(`/item/${id}`);
    };

    const handleInput = (e) => {
      setSearchTerm(e.target.value);
    };

    const handleSearch = () => {
      const data = { q: searchTerm };
      getproducts(data);
      navigate("/items"); 
  };
    
  return (
    <>
    <section className="flex flex-col items-center justify-center bg-gray-100 p-6">
            <input
            type="text"
            placeholder="Busca tu producto"
            id="search"
            value={searchTerm}
            onChange={handleInput}
            />
      
            <button
              type="button"
              className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5"
              onClick={handleSearch}
            >
              Buscar
            </button>
      </section>

    <section className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className='list-group h-100'>
            {
                products.map(product => (
                  <>
                  <div className="w-full max-w-sm bg-white border border-gray-500 rounded-lg shadow dark:bg-gray-300 dark:border-gray-530"
                  key={product.id}
                  onClick={(e) => {e.preventDefault(); getDetail(product.id);}}>
                    <a className="nav-link active" aria-current="page">
                      <img className="p-8 rounded-t-lg h-60 w-full object-contain object-center" src={product.thumbnail} alt="product image" />
                    </a>
                    <div className="px-5 pb-5">
                      <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-black line-clamp-1">{ product.title }</h5>
                      <p className="text-sm font-semibold tracking-tight text-gray-900 dark:text-black line-clamp-3">{ product.description }</p>
                      <div className="flex items-center mt-2.5 mb-5">
                          <div className="flex items-center space-x-1 rtl:space-x-reverse">
                              <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                              </svg>
                              <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                              </svg>
                              <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                              </svg>
                              <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                              </svg>
                              <svg className="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                              </svg>
                          </div>
                          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">{product.rating}</span>
                      </div>
                      <div className="flex items-center justify-between">
                          <span className="text-xl font-bold text-gray-900 dark:text-black">${ product.price }</span>
                      </div>
                    </div>
                  </div>
                  <br />
                  </>
                    
                ))
            }
        </div>
    </section>
    </>
  )
  }
  
  export default Products;