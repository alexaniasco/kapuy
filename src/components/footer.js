import React, { Fragment } from "react";

import PropTypes from "prop-types";

import "./footer.css";

const Footer = (props) => {
  return (
    <div className={`footer-container1 ${props.rootClassName} `}>
      <div className="footer-container2">
        <img
          src={props.imageSrc}
          alt={props.imageAlt}
          className="footer-image"
        />
      </div>
      <div className="footer-container3">
        <div className="footer-container4">
          <span>
            {props.text ?? (
              <Fragment>
                <span className="footer-text4">Correo Electrónico</span>
              </Fragment>
            )}
          </span>
          <span>
            {props.text1 ?? (
              <Fragment>
                <span className="footer-text5">INFO@KAPUY.COM</span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="footer-container5">
          <span>
            {props.text2 ?? (
              <Fragment>
                <span className="footer-text6">Contacto</span>
              </Fragment>
            )}
          </span>
          <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
            <a
              target="_blank"
              href=" https://www.instagram.com/kapuysoluciones/"
            >
              <img style={{ width: 40, height: 40 }} src="icon3.png"></img>
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/company/kapuy-soluciones/"
            >
              <img style={{ width: 40, height: 40 }} src="icon1.png"></img>
            </a>
            <a target="_blank" href="http://wa.link/tcygmw">
              <img style={{ width: 40, height: 40 }} src="icon2.png"></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

Footer.defaultProps = {
  imageSrc: "5.png",
  imageAlt: "image",
  text: undefined,
  text1: undefined,
  text2: undefined,
  rootClassName: "",
};

Footer.propTypes = {
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  text: PropTypes.element,
  text1: PropTypes.element,
  text2: PropTypes.element,
  rootClassName: PropTypes.string,
};

export default Footer;
