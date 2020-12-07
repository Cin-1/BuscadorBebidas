import React from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import Listado from "./components/ListaRecetas";
import CategoriasProvider from "./context/CategoriasContext";
import RecetasProvider from "./context/RecetasContext";
import ModalProvider from "./context/ModalContext";

function App() {
  return (
    <CategoriasProvider>
      <ModalProvider>
        <RecetasProvider>
          <Header />
          <div className="container mt-5">
            <div className="row">
              <Formulario />
            </div>
            <Listado />
          </div>
        </RecetasProvider>
      </ModalProvider>
    </CategoriasProvider>
  );
}

export default App;
