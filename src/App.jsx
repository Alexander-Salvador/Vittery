import Header from './Components/Header/Header.jsx';
import HomePage from './Pages/HomePage/HomePage.jsx';
import Footer from './Pages/Footer/Footer.jsx';
import { CartProvider } from './Context/CartContext';
import './App.css';

function App() {
  return (
    <CartProvider>
      <Header />
      <HomePage />
      <Footer />
    </CartProvider>
  );
}

export default App;
