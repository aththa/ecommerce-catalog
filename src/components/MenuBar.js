import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContextProvider";

function SearchBar() {
  const { cart } = useContext(CartContext);
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary py-3 shadow-sm">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            E-Commerce Product Catalog
          </a>
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
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
          
            </ul>
            <form className="d-flex" role="search">
              <Link to="/cart" className="btn btn-outline-dark ms-2">
                <i className="fa fa-shopping-cart"></i>{" "}Cart {" "} {cart.length}
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default SearchBar;
