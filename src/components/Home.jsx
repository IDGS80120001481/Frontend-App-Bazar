import ProductsContext from '../context/Products/ProductsContext';
import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import './Home.css'


const Home = () => {
    const {getproducts, mysales} = useContext(ProductsContext);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleInput = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearch = () => {
        const data = { q: searchTerm };
        getproducts(data);
        navigate("/items"); 
    };

    const handleMySales = () => {
        mysales()
        navigate("/sales");
    }

    return (
        <section className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="text-center">
                <figure className="max-w-lg">
                    <img
                        className="h-auto max-w-full rounded-lg mb-6 mx-auto img-300"
                        src="/store.png"
                        alt="image description"
                    />
                    <figcaption className="mt-2 text-sm text-center text-gray-900 dark:text-gray-900">
                        Online Shopping
                    </figcaption>
                </figure>
    
            <input
            type="text"
            placeholder="Busca tu producto"
            id="search"
            value={searchTerm}
            onChange={handleInput}
            />
    
    <br /><br />
    <div className="flex flex-col sm:flex-row gap-2 justify-center">
      <button
        type="button"
        className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5"
        onClick={handleSearch}
      >
        Buscar
      </button>
      <button
        type="button"
        className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5"
        onClick={handleMySales}
      >
        Compras
      </button>
    </div>
  </div>
</section>

      
    );
  }
  
  export default Home;