import React, { Fragment } from "react";

import PropTypes from "prop-types";

import "./screen-seven.css";

const ScreenSeven = (props) => {
  return (
    <div
      id="bolsa-laboral"
      className={`screen-seven-container1 ${props.rootClassName} `}
    >
      <div className="screen-seven-container2">
        <div className="screen-seven-container3">
          <div className="screen-seven-container4">
            <span>
              {props.text2 ?? (
                <Fragment>
                  <span className="screen-seven-text13">
                    <span>Únete a nosotros</span>
                    <br></br>
                  </span>
                </Fragment>
              )}
            </span>
          </div>
        </div>
        <div className="screen-seven-container5">
          <div className="screen-seven-container6">
            <span>
              {props.text21 ?? (
                <Fragment>
                  <span className="screen-seven-text17">
                    <span>
                      ¡Únete a Kapuy Soluciones y sé parte de un equipo líder en
                      inversiones! Aquí, te ayudamos a potenciar tu crecimiento
                      profesional mientras maximizas oportunidades financieras
                      para nuestros clientes. ¡Conéctate con nosotros y comienza
                      tu carrera hoy mismo!
                    </span>
                    <br></br>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: " ",
                        }}
                      />
                    </span>
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="screen-seven-container7"></div>
        </div>
        <a
          href="https://www.linkedin.com/jobs/view/4045266320/ "
          target="_blank"
          className="screen-seven-button button"
        >
          <button type="button">
            <span>
              {props.button ?? (
                <Fragment>
                  <span className="screen-seven-text16">Postula aquí</span>
                </Fragment>
              )}
            </span>
          </button>
        </a>
      </div>
      <div className="screen-seven-container8">
        <img
          alt={props.imageAlt1}
          src={props.imageSrc1}
          className="screen-seven-image"
        />
      </div>
    </div>
  );
};

ScreenSeven.defaultProps = {
  text2: undefined,
  button: undefined,
  imageSrc1: "screenSide.png",
  rootClassName: "",
  imageAlt1: "image",
  text21: undefined,
};

ScreenSeven.propTypes = {
  text2: PropTypes.element,
  button: PropTypes.element,
  imageSrc1: PropTypes.string,
  rootClassName: PropTypes.string,
  imageAlt1: PropTypes.string,
  text21: PropTypes.element,
};

export default ScreenSeven;
