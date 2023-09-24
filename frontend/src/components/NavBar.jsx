import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar bg-dark navbar-expand-lg border-bottom border-body" data-bs-theme="dark"
    >
      <div className="container d-flex justify-space-around">
        <div>
          <Link className="navbar-brand " to='/'>Crud Mern Stack</Link>
        </div>
        <div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to='/'>
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/agregarusuario'>
                  Agregar Usuario
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
