
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="App">

      <NavBar/>
      <ItemListContainer greeting="¡Bienvenido, Nerd!"/>

    </div>
  );
}

export default App;
