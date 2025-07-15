import AppRouter from './Routes/AppRouter';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import './App.css';

function App() {
  return (
    <>
      <div className="app">
        <div className="header-styles">
          <Header className="header-component" />
        </div>
        <AppRouter />
        <Footer />
      </div>
    </>
  );
}

export default App;
