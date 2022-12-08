import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./index.scss";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import MainPage from "./components/MainPage/MainPage";
import Nosotros from "./components/Nosotros/Nosotros";
import Contacto from "./components/Contacto/Contacto";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<MainPage />}
          />

          <Route
            path="/nosotros"
            element={<Nosotros />}
          />

          <Route
            path="/producto"
            element={<ItemListContainer />}
          />

          <Route
            path="/producto/:productId"
            element={<ItemDetailContainer />}
          />

          <Route
            path="/contacto"
            element={<Contacto />}
          />
        </Routes>

      </BrowserRouter>
    </div >
  );
}

export default App;
