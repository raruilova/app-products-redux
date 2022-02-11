const EditProduct = () => {
    return(
        <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h2 className="text-center mb-4 font-weight-bold">
                Editar nuevo producto
              </h2>
              <form>
                <div className="form-group">
                  <label htmlFor="product">Nombre producto</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nombre producto"
                    name="product"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="price">Precio producto</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nombre producto"
                    name="price"
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