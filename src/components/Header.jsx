import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "./Header.css";

export default function Header() {
  const { cart } = useContext(CartContext);
  const location = useLocation();

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">🌱 Paradise Nursery</Link>
      </div>

      <nav className="header__nav">
        {location.pathname !== "/" && (
          <Link to="/" className="nav-link">
            Home
          </Link>
        )}
        {location.pathname !== "/products" && (
          <Link to="/products" className="nav-link">
            Products
          </Link>
        )}
        {location.pathname !== "/cart" && (
          <Link to="/cart" className="nav-link">
            Cart
          </Link>
        )}
      </nav>

      {/* Cart Icon with Badge */}
      <div className="header__cart">
        <Link to="/cart" className="cart-link">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="cart-icon"
          >
            <path d="M7 4h-2l-3 9v2h2a4 4 0 1 0 8 0h4a4 4 0 1 0 8 0h2v-2l-3-9h-14zm-3.16 9l2.1-6h11.12l2.1 6h-15.32z" />
          </svg>
          {totalItems > 0 && (
            <span className="cart-badge">{totalItems}</span>
          )}
        </Link>
      </div>
    </header>
  );
}
