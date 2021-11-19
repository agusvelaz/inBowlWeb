import "./App.css";

import NavBar from "./components/navbar/navbar";
import ItemListContainer from "./components/itemListContainer/itemListContainer";
import Home from "./components/home/home";

import { StyledEngineProvider } from "@mui/material/styles";
// da prioridad a mis estilos

function App() {
  return (
    <div className="App">
      <StyledEngineProvider injectFirst>
        <Home/>
        <NavBar />
        <ItemListContainer action="!" />
      </StyledEngineProvider>
    </div>
  );
}

export default App;
