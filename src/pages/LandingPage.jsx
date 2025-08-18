import { Link } from 'react-router-dom';
import './styles/LandingPage.css';

function LandingPage() {
  return (
    <div className="landing">
      <div className="landing__overlay">
        <h1 className="landing__title">Paradise Nursery</h1>
        <p className="landing__description">
          Welcome to Paradise Nursery — your home for beautiful, healthy houseplants.
          We bring nature to your doorstep with a variety of plants to brighten your
          home and purify your air.
        </p>
        <Link to="/products" className="landing__btn">Get Started</Link>
      </div>
    </div>
  );
}

export default LandingPage;
