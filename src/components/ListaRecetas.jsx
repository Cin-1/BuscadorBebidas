import React, { useContext } from "react";
import { RecetasContext } from "../context/RecetasContext";
import Receta from "./Receta";

const Listado = () => {
  const { recetas } = useContext(RecetasContext);

  return (
    <div className="row mt-5">
      {recetas === undefined ? (
        <p className="alert-danger">
          {" "}
          Doesn´t found the ingredient, please search for another one
        </p>
      ) : (
        recetas.map((receta) => <Receta ley={receta.idDrink} receta={receta} />)
      )}
    </div>
  );
};

export default Listado;
