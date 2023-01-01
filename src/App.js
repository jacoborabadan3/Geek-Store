import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.scss";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import MainPage from "./components/MainPage/MainPage";
import Nosotros from "./components/Nosotros/Nosotros";
import Contacto from "./components/Contacto/Contacto";
import CartItems from "./components/CartItems/CartItems";
import { CartContextProvider } from "./context/CartContext";
import LogInPage from "./components/LogInPage/LogInPage";
import { AuthProvider } from "./context/AuthContext";
import Checkout from "./components/CheckOut/Checkout";

function App() {

  return (
    <div className="App">
      <AuthProvider>
        <CartContextProvider>
          <BrowserRouter>
            <Routes>
              <Route
                path="/"
                element={<MainPage />}
              />

              <Route
                path="/checkout"
                element={<Checkout />}
              />

              <Route
                path="/cartItems"
                element={<CartItems />}
              />

              <Route
                path="/LogInPage"
                element={<LogInPage />}
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
        </CartContextProvider>
      </AuthProvider>
    </div >
  );
}

export default App;
