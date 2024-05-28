import React, { useContext } from "react";
import { CartContext } from "../context/CartContextProvider";
import { Link } from "react-router-dom";
import '../styles/CartItem.css';

export const CartItem = ({ product }) => {
  const { cart, dispatch } = useContext(CartContext);

  const Increase = (id) => {
    dispatch({ type: "INCREASE_QUANTITY", id });
  };

  const Decrease = (id) => {
    dispatch({ type: "DECREASE_QUANTITY", id });
  };

  const Remove = (id) => {
    dispatch({ type: "REMOVE", id });
  };

  return (
    <div className="cart-item">
      <img src={product.image} alt={product.title} />
      <div className="details">
        <h4>{product.title}</h4>
        <h5>${product.price}</h5>
        <div className="buttons-abc">
          <button
            className="btn btn-outline-dark"
            onClick={() => Decrease(product.id)}
          >
            <b>-</b>
          </button>
          <button className="rounded">
            {product.quantity}
          </button>
          <button
            className="btn btn-outline-dark"
            onClick={() => Increase(product.id)}
          >
            <b>+</b>
          </button>
        </div>
        <button className="btn-remove" onClick={() => Remove(product.id)}>
          Remove
        </button>
        <Link to={`/`} className="btn-continue">
        <i className="fa fa-arrow-left"></i> {''}
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default CartItem;
