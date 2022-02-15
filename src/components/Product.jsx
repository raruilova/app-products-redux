import { useNavigate } from "react-router-dom";
//redux
import { useDispatch } from "react-redux";
import { deleteProduct, editProduct } from "../actions/actionProducts";
import swal from "sweetalert";

const Product = ({ product }) => {
  const dispatch = useDispatch();

  //confirmar eliminar
  const deleteProductConfirm = (id) => {
    //preguntar
    swal({
      title: "Estas seguro?",
      text: "Un producto que se elimina no se puede recuperar!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        //pasarle el id y la accion
        dispatch(deleteProduct(id));
       
      } else {
        swal("Tu producto no ha sido eliminado!");
      }
    });
  };
  //redirigir 
  const navigate = useNavigate();
  const handleClick = (product) => {
    dispatch(editProduct(product));
    navigate(`/productos/editar/${product.id}`);
  }
  return (
    <tr>
      <td>{product.nombre}</td>
      <td>${product.precio}</td>
      <td className="acciones">
        <button 
        onClick={() => handleClick(product)}
          className="btn btn-primary mr-2"
        >
          Editar
        </button>

        <button
          className="btn btn-danger"
          onClick={() => deleteProductConfirm(product.id)}
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default Product;
