import Axios from "axios";
import React, { createContext, useState, useEffect } from "react";

export const RecetasContext = createContext();

const RecetasProvider = (props) => {
  const [recetas, guardarRecetas] = useState([]);

  const [busqueda, buscarRecetas] = useState({
    nombre: "",
    categoria: "",
  });
  const [consultar, guardarConsultar] = useState(false);
  const { nombre, categoria } = busqueda;

  useEffect(() => {
    if (consultar) {
      const obtenerRecetas = async () => {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&${categoria}`;
        const resultado = await Axios.get(url);
        guardarRecetas(resultado.data.drinks);
      };
      obtenerRecetas();
    }
  }, [busqueda]);
  return (
    <RecetasContext.Provider
      value={{ buscarRecetas, guardarConsultar, recetas }}
    >
      {props.children}
    </RecetasContext.Provider>
  );
};
export default RecetasProvider;
