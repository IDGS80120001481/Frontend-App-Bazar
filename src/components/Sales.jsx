import ProductsContext from "../context/Products/ProductsContext";
import { useContext } from "react";

const Sales = () => {
  const {products} = useContext(ProductsContext);

  if (!products || products.length === 0) {
      return <div>No products found.</div>;
  }
  
return (
  <section>
    <h2 className="text-2xl font-semibold text-gray-800 text-center">Historial de compras</h2>
    <section className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className='list-group h-100'>
          {
              products.map(product => (

                <div
                className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6"
                style={{ backgroundColor: "#f1efe6" }}
                key={product.id}
              >
                <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                  <div className="w-20 shrink-0 md:order-1">
                    <img className="hidden h-20 w-20 dark:block" src={product.product.thumbnail} alt="Product image" />
                  </div>
                  <div className="flex items-center justify-between md:order-3 md:justify-end">
                    <div className="text-end md:order-4 md:w-32">
                      <p className="text-base font-bold text-gray-900 dark:text-black">{product.product.title}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between md:order-3 md:justify-end">
                    <div className="text-end md:order-4 md:w-32">
                      <p className="text-base font-bold text-gray-900 dark:text-black">{product.product.price}</p>
                    </div>
                  </div>
                  <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                    <div className="text-base font-medium text-gray-900 dark:text-black">{new Date(product.date_sale).toLocaleDateString("es-ES", {
                      year: "numeric",
                      month: "long",
                      day: "numeric"
                    })}</div>
                    <div className="flex items-center gap-4"></div>
                  </div>
                </div>
              </div>
              ))
          }
      </div>
  </section>
  </section>
)

}

  
  export default Sales;