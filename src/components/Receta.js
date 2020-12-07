import React, { useContext, useState } from "react";
import { ModalContext } from "../context/ModalContext";

import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 450,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius: theme.shape.borderRadius,
  },
  center: { display: "flex", justifyContent: "center" },
  img: {
    borderRadius: "2em",
    border: "solid 2px",
    borderColor: "#8a8381",
    maxWidth: "350px",
    maxHeigth: "350px",
  },
  modalImg: {
    borderRadius: "3em",
    border: "solid 2px",
    maxWidth: "75%",
    maxHeigth: "75%",
  },
}));

const Receta = ({ receta }) => {
  const { guardarIdReceta, recetaInfo, guardarReceta } = useContext(
    ModalContext
  );
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const mostarIngredientes = (recetaInfo) => {
    let ingredientes = [];
    for (let i = 1; i < 16; i++) {
      if (recetaInfo[`strIngredient${i}`]) {
        ingredientes.push(
          <li>
            {" "}
            {recetaInfo[`strIngredient${i}`]} {recetaInfo[`strMeasure${i}`]}
          </li>
        );
      }
    }
    return ingredientes;
  };

  return (
    <div className="col-md-4 mb-3">
      <div
        className="card"
        style={{
          borderRadius: "2em",
        }}
      >
        <h2
          className="card-header"
          style={{
            minHeight: "96px",
          }}
          className={classes.center}
          alt="foto bebida"
        >
          {receta.strDrink}
        </h2>
        <img
          className="card-img-top"
          className={classes.img}
          src={receta.strDrinkThumb}
          alt={`Imagen de ${receta.strDrink}`}
        />
        <div className="card-body">
          <button
            type="button"
            className="btn btn-block btn-primary"
            onClick={() => {
              guardarIdReceta(receta.idDrink);
              handleOpen();
            }}
          >
            Ver Receta
          </button>
          <Modal
            open={open}
            onClose={() => {
              guardarIdReceta(null);
              guardarReceta({});
              handleClose();
            }}
          >
            <div style={modalStyle} className={classes.paper}>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                {" "}
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => {
                    handleClose();
                  }}
                >
                  X
                </button>
              </div>
              <h2 className={classes.center}>{recetaInfo.strDrink}</h2>
              <h3 className="mt-4">Instructions</h3>

              <p>{recetaInfo.strInstructions}</p>
              <div className={classes.center}>
                <img
                  className="img-fluid my-4"
                  className={classes.modalImg}
                  src={recetaInfo.strDrinkThumb}
                  alt="foto bebida"
                />
              </div>
              <div className={classes.center}>
                <h3 className="mt-4">Ingredients</h3>
                <ul>{mostarIngredientes(recetaInfo)}</ul>
              </div>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Receta;
