import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import LandingPage from "./pages/LandingPage";
import ProductsPage from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";
import "./App.css"; // optional global styles

function App() {
  return (
    <>
      <Routes>
        {/* Landing page has no header */}
        <Route path="/" element={<LandingPage />} />

        {/* Pages with header */}
        <Route
          path="/products"
          element={
            <>
              <Header />
              <ProductsPage />
            </>
          }
        />
        <Route
          path="/cart"
          element={
            <>
              <Header />
              <CartPage />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
