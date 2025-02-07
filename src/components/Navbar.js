import { Link } from "react-router";
import './Nav.css'

function Navbar() {
  return (
    <>
      <nav className="navbar blue navbar-expand-lg" >
        <div className="container py-2">
          <Link className="navbar-brand fs-2 mx-5 text-white" to="/">E-Commerce</Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link fs-5 text-white" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-5 text-white" to="/About">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-5 text-white" to="/">Contact US</Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-primary" type="submit">Search</button>
            </form>
          </div>
          <button className="navbar-toggler text-light border-0" type="button" data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar" aria-controls="#offcanvasNavbar"
            aria-expanded="false" aria-label="Toggle navigation"
          ><span className="navbar-toggler-icon"></span></button>
        </div>
      </nav>
      <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasLabel">Offcanvas</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link className="nav-link fs-5 text-black" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fs-5 text-black" to="/About">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fs-5 text-black" to="/">Contact US</Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-primary" type="submit">Search</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Navbar;