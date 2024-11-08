import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import Detail from "./components/Detail";
import Sales from "./components/Sales";
import { ProductsProvider } from './context/Products/ProductsState';

const App = () => {
    return (
      <ProductsProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/items" element={<Products />} />
            <Route path="/item/:id" element={<Detail />} />
            <Route path="/sales" element={<Sales />} />
          </Routes>
        </Router>
      </ProductsProvider>
      
    );
}

export default App;
