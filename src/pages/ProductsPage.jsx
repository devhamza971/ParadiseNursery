import { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import './styles/ProductsPage.css';

function ProductsPage() {
  const { cart, addToCart } = useCart();
  const [addedItems, setAddedItems] = useState([]);

  // Sync added items state with actual cart
  useEffect(() => {
    const idsInCart = cart.map(item => item.id);
    setAddedItems(idsInCart);
  }, [cart]);

  const products = [
    { id: 1, name: 'Pink Rose', price: 15, categories: ['Flower Plants', 'Rare Plants'], image: '/ParadiseNursery/images/pink_rose.jpg' },
    { id: 2, name: 'Red Tulip', price: 12, categories: ['Flower Plants'], image: '/ParadiseNursery/images/red_tulip.jpg' },
    { id: 3, name: 'White Lily', price: 18, categories: ['Flower Plants'], image: '/ParadiseNursery/images/white_lily.jpg' },
    { id: 4, name: 'Orchid', price: 25, categories: ['Flower Plants', 'Rare Plants'], image: '/ParadiseNursery/images/orchid.jpg' },
    { id: 5, name: 'Sunflower', price: 10, categories: ['Flower Plants', 'Common Plants'], image: '/ParadiseNursery/images/sunflower.jpg' },
    { id: 6, name: 'Hibiscus', price: 14, categories: ['Flower Plants'], image: '/ParadiseNursery/images/hibiscus.jpg' },
    { id: 7, name: 'Daisy', price: 9, categories: ['Flower Plants', 'Common Plants'], image: '/ParadiseNursery/images/daisy.jpg' },
    { id: 8, name: 'Marigold', price: 8, categories: ['Flower Plants'], image: '/ParadiseNursery/images/marigold.jpg' },
    { id: 9, name: 'Blue Lotus', price: 50, categories: ['Rare Plants'], image: '/ParadiseNursery/images/blue_lotus.jpg' },
    { id: 10, name: 'Ghost Orchid', price: 60, categories: ['Rare Plants'], image: '/ParadiseNursery/images/ghost_orchid.jpg' },
    { id: 11, name: 'Black Bat Flower', price: 45, categories: ['Rare Plants'], image: '/ParadiseNursery/images/black_bat.jpg' },
    { id: 12, name: 'Monkey Orchid', price: 55, categories: ['Rare Plants'], image: '/ParadiseNursery/images/monkey_orchid.jpg' },
    { id: 15, name: 'Parrot Flower', price: 65, categories: ['Rare Plants'], image: '/ParadiseNursery/images/parrot_flower.jpg' },
    { id: 16, name: 'Chameleon Plant', price: 35, categories: ['Rare Plants', 'Common Plants'], image: '/ParadiseNursery/images/chameleon_plant.jpg' },
    { id: 17, name: 'Spider Plant', price: 15, categories: ['Common Plants'], image: '/ParadiseNursery/images/spider.jpg' },
    { id: 18, name: 'Snake Plant', price: 18, categories: ['Common Plants'], image: '/ParadiseNursery/images/snake.jpg' },
    { id: 19, name: 'Peace Lily', price: 20, categories: ['Common Plants'], image: '/ParadiseNursery/images/peace_lily.jpg' },
    { id: 20, name: 'Pothos', price: 12, categories: ['Common Plants'], image: '/ParadiseNursery/images/pothos.jpg' },
    { id: 21, name: 'Aloe Vera', price: 12, categories: ['Common Plants'], image: '/ParadiseNursery/images/aloe.jpg' },
    { id: 22, name: 'Fern', price: 10, categories: ['Common Plants'], image: '/ParadiseNursery/images/fern.jpg' },
    { id: 24, name: 'Boston Fern', price: 11, categories: ['Common Plants'], image: '/ParadiseNursery/images/boston_fern.jpg' },
    { id: 25, name: 'Monstera Deliciosa', price: 25, categories: ['Tropical Plants'], image: '/ParadiseNursery/images/monstera.jpg' },
    { id: 26, name: 'Fiddle Leaf Fig', price: 30, categories: ['Tropical Plants'], image: '/ParadiseNursery/images/fiddle_leaf.jpg' },
    { id: 27, name: 'Bird of Paradise', price: 35, categories: ['Tropical Plants'], image: '/ParadiseNursery/images/bird_of_paradise.jpg' },
    { id: 28, name: 'Bromeliad', price: 20, categories: ['Tropical Plants'], image: '/ParadiseNursery/images/bromeliad.jpg' },
    { id: 29, name: 'Anthurium', price: 28, categories: ['Tropical Plants'], image: '/ParadiseNursery/images/anthurium.jpg' },
    { id: 30, name: 'Philodendron', price: 26, categories: ['Tropical Plants'], image: '/ParadiseNursery/images/philodendron.jpg' },
    { id: 31, name: 'Calathea', price: 24, categories: ['Tropical Plants'], image: '/ParadiseNursery/images/calathea.jpg' },
    { id: 32, name: 'Alocasia', price: 27, categories: ['Tropical Plants'], image: '/ParadiseNursery/images/alocasia.jpg' },
  ];

  const categories = ['Flower Plants', 'Rare Plants', 'Common Plants', 'Tropical Plants'];
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const filteredProducts = products.filter(product =>
    product.categories.includes(selectedCategory)
  );

  const handleAddToCart = (product) => {
    addToCart(product);
    // state will sync via useEffect
  };

  return (
    <div className="products-page">
      <h1>Available Plants</h1>

      <div className="category-tabs">
        {categories.map(cat => (
          <button
            key={cat}
            className={selectedCategory === cat ? 'active' : ''}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="products-grid">
        {filteredProducts.map(product => {
          const isAdded = addedItems.includes(product.id);
          return (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <h3>{product.name}</h3>
              <p>${product.price}</p>
              <button
                onClick={() => handleAddToCart(product)}
                disabled={isAdded}
                className={isAdded ? 'added-to-cart' : ''}
              >
                {isAdded ? 'Added to Cart' : 'Add to Cart'}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductsPage;
