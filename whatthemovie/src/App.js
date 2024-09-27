import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import MenuPage from './pages/MenuPage';
import GenrePage from './pages/GenrePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/genre/:genreName" element={<GenrePage />} />
      </Routes>
    </Router>
  );
}

export default App;