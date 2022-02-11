import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "../components/Products";
import NewProducts from "../components/NewProducts";
import Layout from "../container/Layout";
import EditProduct from "../components/EditProduct";
//redux
import { Provider } from "react-redux";
import store from "../store";

function App() {

  return (
    <div>
      <BrowserRouter>
        <Layout>
          <Provider store={store}>
            <Routes>
              <Route path="/" element={<Products />} />
              <Route path="/productos/nuevo" element={<NewProducts />} />
              <Route path="/productos/editar/:id" element={<EditProduct />} />
            </Routes>
          </Provider>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
