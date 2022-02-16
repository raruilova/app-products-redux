import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
//useDispatch es para mandar a ejecutar las acciones que tengamos y useSelector es una forma de acceder al estado dentro del componente
//actions of redux
import { createNewProductAction } from "../actions/actionProducts";
import {showAlert, hideAlert} from '../actions/alertActions';

const NewProducts = () => {
  const [product, setProduct] = useState({
    nombre: "",
    precio: 0,
  });
  const navigate = useNavigate();

  const dispatch = useDispatch(); //este es el que une el actionProducts con el productsReducers desde el store

  //acceder al state del store
  const loading = useSelector((state) => state.products.loading); //accediendo al state, useSelector se le pasa una arrow function y de ese parametro state accedo al objeto products y voy sacando lo que quiero
  const error = useSelector((state) => state.products.error); //products es porque asi le puse al reducer, ver index.js de reducers
  const alert = useSelector(state => state.alert.alert);

  const handleOnChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const addProduct = (product) => {
    //llamar el action de productAction
    dispatch(createNewProductAction(product));
  };
  const { nombre, precio } = product;

  const handleSubmit = (e) => {
    e.preventDefault();
    //validar
    if (nombre.trim() === "" || precio <= 0) {
      const response = {
        message: 'Ambos campos son obligatorios',
        clases: 'alert alert-danger text-center text-uppercase p-3',
      }
      dispatch(showAlert(response));
      return;
    }
    //si no hay errores
    dispatch(hideAlert());
    //crear nuevo producto
    addProduct({
      nombre,
      precio,
    });
    //redireccionar

    navigate("/");
  };
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h2 className="text-center mb-4 font-weight-bold">
                Agregar nuevo producto
              </h2>
              {alert ? <p className={alert.clases}>{alert.message}</p> : null}
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="nombre">Nombre producto</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nombre producto"
                    name="nombre"
                    value={nombre}
                    onChange={handleOnChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="precio">Precio producto</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Nombre producto"
                    name="precio"
                    value={precio}
                    onChange={handleOnChange}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                >
                  Agregar
                </button>
              </form>
              {loading && <p>Cargando</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
