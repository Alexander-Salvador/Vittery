import AppRouter from './Routes/AppRouter';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import './App.css';

function App() {
  return (
    <>
      <div className="app">
        <Header />
        <AppRouter />
        <Footer />
      </div>
    </>
  );
}

export default App;
