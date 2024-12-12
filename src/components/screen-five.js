import React, { Fragment } from "react";

import PropTypes from "prop-types";

import "./screen-five.css";

const ScreenFive = (props) => {
  return (
    <div className={`screen-five-container1 ${props.rootClassName} `}>
      <div className="screen-five-container2">
        <div className="screen-five-container3">
          <div className="screen-five-container4">
            <div className="screen-five-container5">
              <video className="screen-four-container9" autoPlay loop muted playsInline style={{pointerEvents:"none"}}>
                <source src={"est.mp4"} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
        <div className="screen-five-container6">
          <div className="screen-five-container7">
            <span>
              {props.text2 ?? (
                <Fragment>
                  <span className="screen-five-text2">
                    <span>
                      Al contar con empresas de prestigio internacional,
                      garantizamos el acceso a herramientas de inversión tanto
                      en dólares como en soles, adaptadas a diferentes perfiles
                      de inversionistas.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: " ",
                        }}
                      />
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      De esta manera, podemos ofrecer soluciones personalizadas
                      que se ajustan a las necesidades de grandes y pequeños
                      inversionistas, asegurando una gestión integral y de alto
                      valor
                    </span>
                    <br></br>
                  </span>
                </Fragment>
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

ScreenFive.defaultProps = {
  rootClassName: "",
  imageAlt1: "image",
  imageSrc1: "6-1500w.png",
  text2: undefined,
};

ScreenFive.propTypes = {
  rootClassName: PropTypes.string,
  imageAlt1: PropTypes.string,
  imageSrc1: PropTypes.string,
  text2: PropTypes.element,
};

export default ScreenFive;
