import React, { Fragment } from "react";

import PropTypes from "prop-types";

import "./screen-tow.css";

const ScreenTow = (props) => {
  return (
    <div
      id="nosotros"
      className={`screen-tow-container10 ${props.rootClassName} `}
    >
      <div className="screen-tow-container11">
        <div className="screen-tow-container12">
          <div className="screen-tow-container13">
            <span>
              {props.text1 ?? (
                <Fragment>
                  <span className="screen-tow-text4">Quiénes somos</span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="screen-tow-container14">
            <span>
              {props.text2 ?? (
                <Fragment>
                  <span className="screen-tow-text5">
                    <span>
                      Con más de 20 años de experiencia, en Kapuy Soluciones nos
                      especializamos en el asesoramiento integral en gestión
                      patrimonial, planificación financiera y gestión de
                      instrumentos de inversiones. Aplicamos estrategias de
                      diversificación innovadoras y efectivas para maximizar la
                      rentabilidad de tus inversiones, mientras gestionamos los
                      riesgos con total transparencia.
                    </span>
                    <br></br>
                  </span>
                </Fragment>
              )}
            </span>
          </div>
        </div>
        <div className="screen-tow-container15">
          <div className="screen-tow-container16">
            <div className="screen-tow-container17">
              <img
                alt={props.imageAlt1}
                src={props.imageSrc1}
                className="screen-tow-image"
              />
            </div>
          </div>
          <div className="screen-tow-container18">
            <div className="screen-tow-container19">
              <span>
                {props.text3 ?? (
                  <Fragment>
                    <span className="screen-tow-text8">
                      {" "}
                      Nuestro equipo profesional te acompaña en cada etapa,
                      asegurando la protección de tus activos y el éxito a largo
                      plazo.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ScreenTow.defaultProps = {
  text1: undefined,
  imageSrc1: "6-1500w.png",
  text2: undefined,
  rootClassName: "",
  imageAlt1: "image",
  text3: undefined,
};

ScreenTow.propTypes = {
  text1: PropTypes.element,
  imageSrc1: PropTypes.string,
  text2: PropTypes.element,
  rootClassName: PropTypes.string,
  imageAlt1: PropTypes.string,
  text3: PropTypes.element,
};

export default ScreenTow;
