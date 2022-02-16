import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editProductAction } from '../actions/actionProducts';
import { useNavigate } from 'react-router-dom';

const EditProduct = () => {
  const [productEdit, setProductEdit] = useState({
    nombre: '',
    precio: '',
  });

  const navigate = useNavigate();

  const product = useSelector(state => state.products.editProduct);
  const dispatch = useDispatch();

  useEffect(() => {
    setProductEdit(product);
  }, [product]);

  //leer datos del formulario 
  const handleOnChnage = e => {
    setProductEdit({
      ...productEdit,
      [e.target.name]: e.target.value
    });
  }

  const { nombre, precio } = product;

  const handleSubmitEdit = e => {
    e.preventDefault();
    dispatch(editProductAction(productEdit));
    navigate('/');
  }
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h2 className="text-center mb-4 font-weight-bold">
                Editar nuevo producto
              </h2>
              <form onSubmit={handleSubmitEdit}>
                <div className="form-group">
                  <label htmlFor="product">Nombre producto</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nombre producto"
                    name="nombre"
                    defaultValue={nombre}
                    onChange={handleOnChnage}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="price">Precio producto</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nombre producto"
                    name="precio"
                    defaultValue={precio}
                    onChange={handleOnChnage}
                  />
                </div>
                <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">Guardar</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditProduct;