import React, { Fragment, useState } from "react";

import PropTypes from "prop-types";

import "./component.css";

const AppComponent = (props) => {
  // Manejar el estado de cada tarjeta
  const [flippedCards, setFlippedCards] = useState([false, false, false]);

  // Función para manejar el click en la tarjeta
  const handleCardClick = (index) => {
    const newFlippedCards = [...flippedCards];
    newFlippedCards[index] = !newFlippedCards[index]; // Alterna el estado de la tarjeta clickeada
    setFlippedCards(newFlippedCards);
  };
  return (
    <div
      id="soluciones"
      className={`component-container1 ${props.rootClassName} `}
    >
      <div className="component-container2">
        <div className="component-container3">
          <span>
            {props.text ?? (
              <Fragment>
                <span className="component-text17">Como lo hacemos</span>
              </Fragment>
            )}
          </span>
        </div>
      </div>
      <div className="component-container4">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className={`card ${flippedCards[i] ? "flipped" : ""}`}
            onClick={() => handleCardClick(i)}
          >
            <div className="card-inner">
              <div className="card-front">
                <span className="card-title">
                  {i === 0 &&
                    (props.text1 ?? "Asesoramiento en gestión del patrimonio")}
                  {i === 1 &&
                    (props.text14 ??
                      "Planificación Financiera y Gestión de Fondos")}
                  {i === 2 &&
                    (props.text13 ?? "Asesoramiento y Gestión del Riesgo")}
                </span>
              </div>
              <div className="card-back">
                <span className="card-info">
                  {i === 0 &&
                    (props.text2 ??
                      "Gestionamos la administración de tu patrimonio...")}
                  {i === 1 &&
                    (props.text24 ??
                      "Somos especialistas en planificación financiera integral...")}
                  {i === 2 &&
                    (props.text23 ??
                      "En Kapuy Soluciones, la gestión del riesgo es fundamental...")}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

AppComponent.defaultProps = {
  text: undefined,
  text1: undefined,
  text14: undefined,
  text2: undefined,
  text23: undefined,
  rootClassName: "",
  text13: undefined,
  text24: undefined,
};

AppComponent.propTypes = {
  text: PropTypes.element,
  text1: PropTypes.element,
  text14: PropTypes.element,
  text2: PropTypes.element,
  text23: PropTypes.element,
  rootClassName: PropTypes.string,
  text13: PropTypes.element,
  text24: PropTypes.element,
};

export default AppComponent;
