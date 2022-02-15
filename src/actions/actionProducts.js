import {
  ADD_PRODUCT,
  SUCCES_ADD_PRODUCT,
  ERROR_ADD_PRODUCT,
  DOWNLOAD_START_PRODUCTS,
  DOWNLOAD_SUCESS_PRODUCTS,
  DOWNLOAD_ERROR_PRODUCTS,
  GET_PRODUCT_DELETE,
  DELETE_PRODUCT_ERROR,
  DELETE_PRODUCT_SUCCESS,
  EDIT_PRODUCT_ERROR,
  EDIT_PRODUCT_SUCCESS,
  GET_PRODUCT_EDIT,
  STAR_EDIT_PRODUCT
} from "../types";

import { axiosClient } from "../config/axios";

import swal from "sweetalert";

//crear nuevos productos
export function createNewProductAction(product) {
  return async (dispatch) => {
    dispatch(addProduct());

    try {
      //insertar la api
      await axiosClient.post("/productos", product); //le paso producto, porque es un objeto
      dispatch(succesAddProduct(product)); //se inserto correctamente
      //alerta
      swal("Correcto", "El proceso se agregó correctamente", "success");
    } catch (error) {
      console.log(error);
      dispatch(errorAddProduct(true));
      //alerta de error
      swal({
        title: "Error",
        text: "Intenta de nuevo",
        icon: "warning",
      });
    }
  };
}

const addProduct = () => ({
  type: ADD_PRODUCT,
  payload: true,
});

const succesAddProduct = (product) => ({
  type: SUCCES_ADD_PRODUCT,
  payload: product, //solo si se va a modificar el estado
});

const errorAddProduct = (state) => ({
  type: ERROR_ADD_PRODUCT,
  payload: state,
});

//descargar de la base de datos
export function getProducts() {
  return async (dispatch) => {
    dispatch(dowloadProducts());

    try {
      const response = await axiosClient.get("productos");
      dispatch(getProductsSuccess(response.data));
    } catch (error) {
      dispatch(dowloadProductsError());
    }
  };
}

const dowloadProducts = () => ({
  type: DOWNLOAD_START_PRODUCTS,
  payload: true,
});

const getProductsSuccess = (products) => ({
  type: DOWNLOAD_SUCESS_PRODUCTS,
  payload: products,
});

const dowloadProductsError = () => ({
  type: DOWNLOAD_ERROR_PRODUCTS,
  payload: true,
});

//selecciona y elimina el producto
export function deleteProduct(id) {
    return async (dispatch) => {
        dispatch(getProductDelete(id));

        try {
            await axiosClient.delete(`/productos/${id}`);
            dispatch(successDeleteProduct());
            //si se elimina
            swal("Tu producto ha sido eliminado correctamente!", {
                icon: "success",
              });
        } catch (error) {
            dispatch(deleteProductError());
        }
    }
}

const getProductDelete = (id) => ({
    type: GET_PRODUCT_DELETE,
    payload: id
});

const successDeleteProduct = () => ({
    type: DELETE_PRODUCT_SUCCESS
});

const deleteProductError = () => ({
    type: DELETE_PRODUCT_ERROR,
    payload: true
});

//colocar producto en edicion 
export function editProduct(product) {
    return async (dispatch) => {
        dispatch(getProductEdit(product));
    }
}

const getProductEdit = (product) => ({
    type: GET_PRODUCT_EDIT,
    payload: product
});

//editar producto en la api y state 
export function editProductAction(product) {
    return async (dispatch) => {
        dispatch(editProductStart(product));
        try {
          await axiosClient.put(`/productos/${product.id}`, product);
        } catch (error) {
          
        }
    }
}

const editProductStart = (product) => ({
    type: STAR_EDIT_PRODUCT,
    payload: product
});
