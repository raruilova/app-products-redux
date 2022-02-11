import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between">
      <div className="container">
        <Link to='/' className="text-light">CRUD Redux</Link>
      </div>
      <Link
        to="/productos/nuevo"
        className="btn btn-danger nuevo-post d-block d-md-inline-block"
      >
        Agregar producto &#43;
      </Link>
    </nav>
  );
};

export default Header;