import Header from './Components/Header/Header.jsx';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';

function App() {
  return (
    <section className="app">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </section>
  );
}

export default App;
