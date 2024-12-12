import React, { Fragment } from "react";

import PropTypes from "prop-types";

import "./screen-four.css";

const ScreenFour = (props) => {
  return (
    <div className={`screen-four-container1 ${props.rootClassName} `}>
      <video className="background-video3" autoPlay loop muted playsInline style={{pointerEvents:"none"}}>
        <source src={"afvideo.mp4"} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="screen-four-container2">
        <div className="screen-four-container3">
          <div className="screen-four-container4">
            <span>
              {props.text1 ?? (
                <Fragment>
                  <span className="screen-four-text3">Nuestros aliados</span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="screen-four-container5">
            <span>
              {props.text2 ?? (
                <Fragment>
                  <span className="screen-four-text4">
                    <span>
                      Nuestros aliados estratégicos son clave para ofrecer
                      soluciones financieras de calidad, ya que su respaldo nos
                      permite proporcionar productos de inversión confiables y
                      competitivos a nivel global.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: " ",
                        }}
                      />
                    </span>
                    <br></br>
                  </span>
                </Fragment>
              )}
            </span>
          </div>
        </div>
        <div className="screen-four-container6">
          <div className="screen-four-container7">
            <div className="screen-four-container8">
              {/* <div className="screen-four-container9"></div> */}
              <video className="screen-four-container9" autoPlay loop muted>
                <source src={"manos.mp4"} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ScreenFour.defaultProps = {
  rootClassName: "",
  text1: undefined,
  text2: undefined,
};

ScreenFour.propTypes = {
  rootClassName: PropTypes.string,
  text1: PropTypes.element,
  text2: PropTypes.element,
};

export default ScreenFour;
