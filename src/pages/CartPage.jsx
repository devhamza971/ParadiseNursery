import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import "./styles/CartPage.css";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalCost = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleCheckout = () => {
    alert("Thank you for your purchase! 🌱");
    clearCart();
  };

  return (
    <div className="cart">
      <h1 className="cart__title">Your Shopping Cart</h1>

      {cart.length === 0 ? (
        <p>
          Your cart is empty. <Link to="/products">Continue shopping</Link>
        </p>
      ) : (
        <>
          <div className="cart__items">
            {cart.map(item => (
              <div
                key={item.id}
                className="cart__item"
                style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap" }}
              >
                {/* Product Info */}
                <div className="cart__item-info" style={{ flex: "2 1 200px" }}>
                  <img src={item.image} alt={item.name} />
                  <span className="cart__item-name">{item.name}</span>
                </div>

                {/* Unit Price */}
                <div style={{ flex: "1 1 90px", textAlign: "center", color: "#2d572c" }}>
                  <strong>Unit:</strong> ${item.price.toFixed(2)}
                </div>

                {/* Quantity Controls */}
                <div className="cart__item-controls" style={{ flex: "1 1 120px", justifyContent: "center" }}>
                  <button
                    className="cart__button"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                  >
                    −
                  </button>
                  {item.quantity}
                  <button
                    className="cart__button"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>

                {/* Item Total */}
                <div style={{ flex: "1 1 90px", textAlign: "center", fontWeight: "bold", color: "#2d572c" }}>
                  ${ (item.price * item.quantity).toFixed(2) }
                </div>

                {/* Remove Button */}
                <div style={{ flex: "1 1 80px", textAlign: "center" }}>
                  <button
                    className="cart__button"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="cart__summary">
            <p><strong>Total Items:</strong> {totalItems}</p>
            <p><strong>Total Cost:</strong> ${totalCost.toFixed(2)}</p>
          </div>

          {/* Actions */}
          <div className="cart__actions" style={{ textAlign: "right", marginTop: "20px" }}>
            <Link to="/products" className="cart__button">Continue Shopping</Link>
            <button onClick={clearCart} className="cart__button">Clear Cart</button>
            <button onClick={handleCheckout} className="cart__button">Checkout</button>
          </div>
        </>
      )}
    </div>
  );
}
