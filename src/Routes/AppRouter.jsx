import { Routes, Route } from 'react-router-dom';
import HomePage from '../Pages/HomePage/HomePage';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};

export default AppRouter;
