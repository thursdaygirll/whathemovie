import MainPage from './pages/MainPage';
import MenuPage from './pages/MenuPage';
import GenrePage from './pages/GenrePage';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/genre/:genreName" element={<GenrePage />} />
      </Routes>
  );
}

export default App;