import { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
//useDispatch es para mandar a ejecutar las acciones que tengamos y useSelector es una forma de acceder al estado dentro del componente
//actions of redux
import {createNewProductAction} from '../actions/actionProducts';

const NewProducts = () => {

  const [product, setProduct] = useState({
    name: '',
    price: 0
  });

  const handleOnChange = e => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value
    })
  }

  const dispatch = useDispatch();//este es el que une el actionProducts con el productsReducers desde el store

  const addProduct = (product) => {
    //llamar el action de productAction
    dispatch(createNewProductAction(product));
  }
const {name, price} = product;

  const handleSubmit = (e) => {
    e.preventDefault();
    //validar 
    if(name.trim() === '' || price <= 0 ){
      return;
    }
    //errores

    //crear nuevo producto
    addProduct({
      name,
      price
    });
  }
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h2 className="text-center mb-4 font-weight-bold">
                Agregar nuevo producto
              </h2>
              <form
              onSubmit={handleSubmit}
              >
                <div className="form-group">
                  <label htmlFor="name">Nombre producto</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nombre producto"
                    name="name"
                    value={name}
                    onChange={handleOnChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="price">Precio producto</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Nombre producto"
                    name="price"
                    value={price}
                    onChange={handleOnChange}
                  />
                </div>
                <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">Agregar</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
