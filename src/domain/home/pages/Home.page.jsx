import { useState, useEffect } from 'react';
import {getProductApi} from '../api/product.api';
import {CardSkeletonProduct} from '../../../components/carSkeletonProduct';
import {CarProduct} from '../../../components/carProduct';
import {NavBar} from '../../../components/navbar';
import './Home.css';


function App() {
  const [products , setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  //hace la petición de pedir los datos del servidor.
const fetchProducts = async () => {
  setLoading (true);

  try {
      const dataProducts = await getProductApi(); //hace la acción  y trae datos  del servidor.
      console.log('products', dataProducts);
      setProducts (dataProducts); //guatda los datos en el estado

  } catch (error) {
    alert(error.message);
  } finally {
    setLoading(false);
  }
}

// Se ejecuta cuando se monta el componente
    useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
    <NavBar />
    <section className="hero"></section>
            <div className="p-4">
            <nav aria-label="Breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <a href="#">Inicio</a>
                    </li>
                    <li className="breadcrumb-item">
                        <a href="#">Productos</a>
                    </li>
                </ol>
            </nav>

            <h2 className="font-weigth-bold fs-5">64 Resultados</h2>


            <section className="container-fluid mt-4 p-4 border-1 border-top border-secondary">
                <div className="row" id="products-list">
                  {loading ? [1,2,3,4] .map(item => <CardSkeletonProduct key={item}/>) : null}
                  {products.map(product => <CarProduct producto={product} key={product.id} />)}
                  </div>
            </section>
        </div>
    </>
  )
}

export default App
