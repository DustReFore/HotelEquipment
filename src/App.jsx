import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import CatalogPage from './Pages/CatalogPage';
import AboutPage from './Pages/AboutPage';
import InformationPage from './Pages/InformationPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/Catalog' element={<CatalogPage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/information' element={<InformationPage />} />
    </Routes>
  );
}

export default App;