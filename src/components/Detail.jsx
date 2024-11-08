import ProductsContext from "../context/Products/ProductsContext";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Detail = () => {

    const { selectedProduct, details, sales, getproducts } = useContext(ProductsContext);
    const { id } = useParams();
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        details(id);
    }, []);

    const add = (id) => {
        const data = {'product_id': id}
        alert(JSON.stringify(data))
        sales(data)
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
        {
            selectedProduct ? (
                <section className="py-8 bg-white md:py-16 dark:white antialiased">
                    <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
                        <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
                            <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
                                <img className="w-full hidden dark:block" src={selectedProduct.thumbnail} alt="" />
                            </div>
                            
                            <div className="mt-6 sm:mt-8 lg:mt-0">
                                <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-black">{selectedProduct.title}</h1>
                                    <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
                                        <p className="text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-black">${selectedProduct.price}</p>

                                            <div className="flex items-center gap-2 mt-2 sm:mt-0">
                                            <div className="flex items-center gap-1">
                                                <svg className="w-4 h-4 text-yellow-500"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                                >
                                                <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 
                                                2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 
                                                3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/>
                                                </svg>
                                                <svg
                                                className="w-4 h-4 text-yellow-500"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                                >
                                                <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 
                                                2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 
                                                3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/>
                                                </svg>
                                                <svg
                                                className="w-4 h-4 text-yellow-500"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                                >
                                                <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 
                                                2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 
                                                3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/>
                                                </svg>
                                                <svg
                                                className="w-4 h-4 text-yellow-500"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                                >
                                                <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 
                                                2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 
                                                3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/>
                                                </svg>
                                                <svg
                                                className="w-4 h-4 text-yellow-500"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                                >
                                                <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 
                                                2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 
                                                3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/>
                                                </svg>
                                            </div>
                                            <p className="text-sm font-medium leading-none text-gray-900 dark:text-gray-900">(5.0)</p>
                                        </div>
                                    </div>

          <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
            <a
                onClick={() => add(selectedProduct.id)}
              title=""
              className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5"
              role="button"
            >
            <svg
            className="w-5 h-5 -ms-2 me-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
            >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
            />
          </svg>Agregar al carrito</a>
          </div>

          <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-900"/>
          <p className="mb-6 text-gray-900 dark:text-gray-900"> {selectedProduct.description}</p>
        </div>

                        </div>
                    </div>
                </section>
            ) : (
                <h1>No has seleccionado algún producto </h1>
            )
        }
        </>

        

        
    );
  }
  
  export default Detail;