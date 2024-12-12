import React, { Fragment } from "react";

import PropTypes from "prop-types";

import "./screen-tree.css";

const ScreenTree = (props) => {
  return (
    <div
      id="nuestro-valor"
      className={`screen-tree-container1 ${props.rootClassName} `}
    >
      <video
        className="background-video2"
        autoPlay
        loop
        muted
        playsInline
        style={{ pointerEvents: "none" }}
      >
        <source src={"fvideo.mp4"} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="screen-tree-container2">
        <div className="screen-tree-container3">
          <div className="screen-tree-container4">
            <span>
              {props.text1 ?? (
                <Fragment>
                  <span className="screen-tree-text12">
                    <span>
                      Lo que
                      <span
                        dangerouslySetInnerHTML={{
                          __html: " ",
                        }}
                      />
                    </span>
                    <br></br>
                    <span>hacemos</span>
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="screen-tree-container5">
            <span>
              {props.text2 ?? (
                <Fragment>
                  <span className="screen-tree-text16">
                    <span>
                      Nuestro equipo de asesores expertos combina experiencia y
                      profundo conocimiento del mercado para ofrecerte un
                      enfoque personalizado y transparente.
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      Nos especializamos en identificar oportunidades de
                      inversión únicas, alineadas con tus objetivos financieros,
                      brindando seguridad y confianza en cada decisión.
                    </span>
                    <br></br>
                    <br></br>
                  </span>
                </Fragment>
              )}
            </span>
          </div>
        </div>
        <div className="screen-tree-container6">
          <img
            style={{ maxHeight: "600px" }}
            alt={props.imageAlt1}
            src={props.imageSrc1}
            className="screen-tree-image"
          />
        </div>
      </div>
    </div>
  );
};

ScreenTree.defaultProps = {
  text1: undefined,
  rootClassName: "",
  imageAlt1: "image",
  imageSrc1: "teamimage.png",
  text2: undefined,
};

ScreenTree.propTypes = {
  text1: PropTypes.element,
  rootClassName: PropTypes.string,
  imageAlt1: PropTypes.string,
  imageSrc1: PropTypes.string,
  text2: PropTypes.element,
};

export default ScreenTree;
