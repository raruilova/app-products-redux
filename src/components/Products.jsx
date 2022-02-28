import { useEffect } from "react";
//redux
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../actions/actionProducts";
import Product from "./Product";

const Products = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    //consulta api
    const loadginProducts = () => dispatch(getProducts());
    loadginProducts();
  }, []);

  const products = useSelector((state) => state.products.products);
  const error = useSelector(state => state.products.error);

  return (
    <div className="container mt-5">
      <h2 className="text-center my5">Listado de productos</h2>
      {error && <p className="font-weight-bold alert alert-danger text-center">Hubo un error</p>}
      <table className="table table-striped">
        <thead className="bg-primary table-dark">
          <tr>
            <td scope="col">Nombre</td>
            <td scope="col">Precio</td>
            <td scope="col">Acciones</td>
          </tr>
        </thead>
        <tbody>
          {products.length === 0 ? (
            <tr>
              <td colSpan="3">No hay productos</td>
            </tr>
          ) : (
            products.map((product) => (
              <Product product={product} key={product.id} />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
