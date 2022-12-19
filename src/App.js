import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.scss";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import MainPage from "./components/MainPage/MainPage";
import Nosotros from "./components/Nosotros/Nosotros";
import Contacto from "./components/Contacto/Contacto";
import { createContext } from "react";
import { useState } from "react";

export const valueContext = createContext();

function App() {

  const [contextValue, setContextValue] = useState([]);
  
  console.log(contextValue);

  return (
    <div className="App">
      <valueContext.Provider value={{ contextValue, setContextValue }}>
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
              path="/producto/:filterProduct"
              element={<ItemListContainer />}
            />

            <Route
              path="/producto/:category/:productId"
              element={<ItemDetailContainer />}
            />

            <Route
              path="/contacto"
              element={<Contacto />}
            />
          </Routes>

        </BrowserRouter>
      </valueContext.Provider>
    </div >
  );
}

export default App;
