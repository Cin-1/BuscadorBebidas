import Axios from "axios";
import React, { createContext, useState, useEffect } from "react";

export const RecetasContext = createContext();

const RecetasProvider = (props) => {
  const [tecetas, buscarRecetas] = useState([]);

  const [busqueda, guardarBusqueda] = useState({
    nombre: "",
    categoria: "",
  });
  const [consultar, guardarConsultar] = useState(false);
  const { nombre, categoria } = busqueda;
  console.log(nombre);

  useEffect(() => {
    if (consultar) {
      const obtenerRecetas = async () => {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&${categoria}`;
        //const resultado = Axios.get(url);
        console.log(url);
      };
      obtenerRecetas();
    }
  }, [busqueda]);
  return (
    <RecetasContext.Provider value={{ buscarRecetas, guardarConsultar }}>
      {props.children}
    </RecetasContext.Provider>
  );
};
export default RecetasProvider;
