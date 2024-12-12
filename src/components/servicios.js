import React, { Fragment, useState } from "react";

import PropTypes from "prop-types";

import "./servicios.css";

const Servicios = (props) => {
  const [flippedCards, setFlippedCards] = useState(
    new Array(10).fill(false) // Cambiar este número si hay más o menos tarjetas
  );

  const handleCardClick = (index) => {
    const newFlippedCards = [...flippedCards];
    newFlippedCards[index] = !newFlippedCards[index]; // Alterna el estado de la tarjeta clickeada
    setFlippedCards(newFlippedCards);
  };
  return (
    <div id="servicios" className="new-servicios-container">
      {/* Título con logo e imagen de flecha */}

      {/* Columnas de tarjetas */}
      <div className="new-servicios-column">
        <div className="new-servicios-card-container">
          {/* Tarjeta 1 */}
          <div className="new-servicios-title-container">
            <span className="new-servicios-title">Principales Servicios</span>
          </div>
          <div
            className={`new-servicios-card ${
              flippedCards[0] ? "new-flipped" : ""
            }`}
            onClick={() => handleCardClick(0)}
          >
            <div className="new-card-inner">
              <div className="new-card-front">
                <div
                  style={{ display: "flex", alignItems: "center", gap: "15px" }}
                >
                  <img
                    alt={props.imageAlt1}
                    src={props.imageSrc1}
                    className="new-servicios-image"
                  />
                  <span className="new-card-title">
                    {props.text1 ?? "Herramientas de inversión"}
                  </span>
                </div>
                <img src="arrow.png"></img>
              </div>
              <div className="new-card-back">
                <span className="new-card-info">
                  {props.text2 ??
                    "Fondos privados, notas estructuradas, bonos y otras herramientas para optimizar tu rendimiento financiero."}
                </span>
              </div>
            </div>
          </div>

          {/* Tarjeta 2 */}
          <div
            className={`new-servicios-card ${
              flippedCards[1] ? "new-flipped" : ""
            }`}
            onClick={() => handleCardClick(1)}
          >
            <div className="new-card-inner">
              <div className="new-card-front">
                <div
                  style={{ display: "flex", alignItems: "center", gap: "15px" }}
                >
                  <img
                    alt={props.imageAlt2}
                    src={props.imageSrc2}
                    className="new-servicios-image"
                  />
                  <span className="new-card-title">
                    {props.text3 ?? "Protección Patrimonial"}
                  </span>
                </div>
                <img src="arrow.png"></img>
              </div>
              <div className="new-card-back">
                <span className="new-card-info">
                  {props.text4 ??
                    "Protegemos tus activos y patrimonio contra riesgos financieros y legales."}
                </span>
              </div>
            </div>
          </div>

          {/* Tarjeta 3 */}
          <div
            className={`new-servicios-card ${
              flippedCards[2] ? "new-flipped" : ""
            }`}
            onClick={() => handleCardClick(2)}
          >
            <div className="new-card-inner">
              <div className="new-card-front">
                <div
                  style={{ display: "flex", alignItems: "center", gap: "15px" }}
                >
                  <img
                    alt={props.imageAlt3}
                    src={"b3.png"}
                    className="new-servicios-image"
                  />
                  <span className="new-card-title">
                    {props.text5 ?? "Ahorro previsional"}
                  </span>
                </div>
                <img src="arrow.png"></img>
              </div>
              <div className="new-card-back">
                <span className="new-card-info">
                  {props.text6 ??
                    `Asesoría a personas y empresas en la planificación de un futuro financiero sólido, asegurando una jubilación segura y opciones de ahorro eficientes.
`}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="new-servicios-column">
        <div className="new-servicios-card-container">
          {/* Tarjeta 5 */}
          <div
            className={`new-servicios-card ${
              flippedCards[4] ? "new-flipped" : ""
            }`}
            onClick={() => handleCardClick(4)}
          >
            <div className="new-card-inner">
              <div className="new-card-front">
                <div
                  style={{ display: "flex", alignItems: "center", gap: "15px" }}
                >
                  <img
                    alt={props.imageAlt5}
                    src={"b2.png"}
                    className="new-servicios-image"
                  />
                  <span className="new-card-title">
                    {props.text9 ?? "Financiamiento para empresas"}
                  </span>
                </div>
                <img src="arrow.png"></img>
              </div>
              <div className="new-card-back">
                <span className="new-card-info">
                  {props.text10 ??
                    "Nos adaptamos a las necesidades específicas de cada empresa, accediendo a capital que impulse su crecimiento y  brindando estrategias que mejoren su liquidez."}
                </span>
              </div>
            </div>
          </div>

          {/* Tarjeta 6 */}
          <div
            className={`new-servicios-card ${
              flippedCards[5] ? "new-flipped" : ""
            }`}
            onClick={() => handleCardClick(5)}
          >
            <div className="new-card-inner">
              <div className="new-card-front">
                <div
                  style={{ display: "flex", alignItems: "center", gap: "15px" }}
                >
                  <img
                    alt={props.imageAlt6}
                    src={"b5.png"}
                    className="new-servicios-image"
                  />
                  <span className="new-card-title">
                    {props.text11 ?? "Asesoramiento Jurídico"}
                  </span>
                </div>
                <img src="arrow.png"></img>
              </div>
              <div className="new-card-back">
                <span className="new-card-info">
                  {props.text12 ??
                    "Asesoramiento legal para la gestión empresarial."}
                </span>
              </div>
            </div>
          </div>

          {/* Tarjeta 7 */}
          <div
            className={`new-servicios-card ${
              flippedCards[6] ? "new-flipped" : ""
            }`}
            onClick={() => handleCardClick(6)}
          >
            <div className="new-card-inner">
              <div className="new-card-front">
                <div
                  style={{ display: "flex", alignItems: "center", gap: "15px" }}
                >
                  <img
                    alt={props.imageAlt7}
                    src={"b3.png"}
                    className="new-servicios-image"
                  />
                  <span className="new-card-title">
                    {props.text13 ?? "Análisis de Mercado"}
                  </span>
                </div>
                <img src="arrow.png"></img>
              </div>
              <div className="new-card-back">
                <span className="new-card-info">
                  {props.text14 ?? "Estudios de mercado y análisis sectorial."}
                </span>
              </div>
            </div>
          </div>

          {/* Tarjeta 8 */}
          <div
            className={`new-servicios-card ${
              flippedCards[7] ? "new-flipped" : ""
            }`}
            onClick={() => handleCardClick(7)}
          >
            <div className="new-card-inner">
              <div className="new-card-front">
                <div
                  style={{ display: "flex", alignItems: "center", gap: "15px" }}
                >
                  <img
                    alt={props.imageAlt8}
                    src={"b3.png"}
                    className="new-servicios-image"
                  />
                  <span className="new-card-title">
                    {props.text15 ?? "Optimización Fiscal"}
                  </span>
                </div>
                <img src="arrow.png"></img>
              </div>
              <div className="new-card-back">
                <span className="new-card-info">
                  {props.text16 ??
                    "Servicios para reducir la carga fiscal de tu empresa."}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Servicios.defaultProps = {
  text22: undefined,
  imageAlt25: "image",
  imageAlt2: "image",
  text16: undefined,
  imageAlt1: "image",
  imageAlt22: "image",
  imageSrc25: "copy%20of%20kapuy%20soluciones%20(2)-200w.png",
  imageSrc15: "b3.png",
  imageAlt16: "image",
  text2: undefined,
  text: undefined,
  imageSrc2: "b2.png",
  imageAlt23: "image",
  imageAlt21: "image",
  imageSrc16: "b3.png",
  imageAlt12: "image",
  imageSrc13: "b1.png",
  imageSrc23: "copy%20of%20kapuy%20soluciones%20(2)-200w.png",
  imageAlt15: "image",
  imageSrc1: "b1.png",
  imageSrc14: "b3.png",
  imageAlt24: "image",
  text1: undefined,
  imageSrc11: "b3.png",
  text13: undefined,
  text23: undefined,
  imageAlt26: "image",
  text14: undefined,
  imageSrc21: "copy%20of%20kapuy%20soluciones%20(2)-200w.png",
  imageSrc26: "copy%20of%20kapuy%20soluciones%20(2)-200w.png",
  imageSrc22: "copy%20of%20kapuy%20soluciones%20(2)-200w.png",
  imageAlt14: "image",
  text21: undefined,
  text15: undefined,
  text25: undefined,
  imageSrc24: "copy%20of%20kapuy%20soluciones%20(2)-200w.png",
  text11: undefined,
  text12: undefined,
  rootClassName: "",
  imageAlt13: "image",
  imageAlt11: "image",
  text24: undefined,
  text26: undefined,
  imageSrc12: "b2.png",
};

Servicios.propTypes = {
  text22: PropTypes.element,
  imageAlt25: PropTypes.string,
  imageAlt2: PropTypes.string,
  text16: PropTypes.element,
  imageAlt1: PropTypes.string,
  imageAlt22: PropTypes.string,
  imageSrc25: PropTypes.string,
  imageSrc15: PropTypes.string,
  imageAlt16: PropTypes.string,
  text2: PropTypes.element,
  text: PropTypes.element,
  imageSrc2: PropTypes.string,
  imageAlt23: PropTypes.string,
  imageAlt21: PropTypes.string,
  imageSrc16: PropTypes.string,
  imageAlt12: PropTypes.string,
  imageSrc13: PropTypes.string,
  imageSrc23: PropTypes.string,
  imageAlt15: PropTypes.string,
  imageSrc1: PropTypes.string,
  imageSrc14: PropTypes.string,
  imageAlt24: PropTypes.string,
  text1: PropTypes.element,
  imageSrc11: PropTypes.string,
  text13: PropTypes.element,
  text23: PropTypes.element,
  imageAlt26: PropTypes.string,
  text14: PropTypes.element,
  imageSrc21: PropTypes.string,
  imageSrc26: PropTypes.string,
  imageSrc22: PropTypes.string,
  imageAlt14: PropTypes.string,
  text21: PropTypes.element,
  text15: PropTypes.element,
  text25: PropTypes.element,
  imageSrc24: PropTypes.string,
  text11: PropTypes.element,
  text12: PropTypes.element,
  rootClassName: PropTypes.string,
  imageAlt13: PropTypes.string,
  imageAlt11: PropTypes.string,
  text24: PropTypes.element,
  text26: PropTypes.element,
  imageSrc12: PropTypes.string,
};

export default Servicios;
