import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import emailjs from "emailjs-com";

import "./screen-six.css";

const ScreenSix = (props) => {
  // Estados para los inputs
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_number: "",
    user_cons: "",
  });

  const [errors, setErrors] = useState({});

  // Función para manejar los cambios en los inputs
  const handleChange = (e) => {
    const { name, value, maxLength } = e.target;

    // Aplicar el límite de caracteres en tiempo real
    if (value.length <= maxLength) {
      setFormData({
        ...formData,
        [name]: value,
      });

      validateField(name, value); // Validamos cada campo después de la escritura
    }
  };

  // Evitar que se puedan pegar más caracteres de los permitidos
  const handlePaste = (e) => {
    const { name, maxLength } = e.target;
    const pastedText = e.clipboardData.getData("Text");

    if (pastedText.length + formData[name].length > maxLength) {
      e.preventDefault(); // Bloqueamos el pegado si excede el límite
      alert(`No puedes pegar más de ${maxLength} caracteres.`);
    }
  };

  // Validación por campo
  const validateField = (name, value) => {
    let error = "";

    switch (name) {
      case "user_name":
        if (value.length > 35) {
          error = "El nombre no debe tener más de 25 caracteres.";
        } else if (/[^a-zA-Z\s]/.test(value)) {
          error = "El nombre solo puede contener letras y espacios.";
        }
        break;
      case "user_email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (value.length > 45) {
          error = "El correo no debe tener más de 45 caracteres.";
        } else if (value === "") {
          error = "";
          return;
        } else if (!emailRegex.test(value)) {
          error = "Por favor ingrese un correo electrónico válido.";
        }
        break;
      case "user_number":
        const phoneRegex = /^\+?\d{0,12}$/; // Permite el "+" opcional seguido de hasta 12 dígitos
        if (!phoneRegex.test(value)) {
          error =
            "El número debe contener solo números y un máximo de 12 dígitos.";
        }
        break;
      case "user_cons":
        if (value.length > 250) {
          error = "El mensaje no debe exceder los 250 caracteres.";
        }
        break;
      default:
        break;
    }

    setErrors({
      ...errors,
      [name]: error,
    });

    return !error; // Retorna true si no hay error
  };

  // Validación general antes de enviar el formulario
  const validateForm = () => {
    let isValid = true;
    let newErrors = {};

    // Validar todos los campos
    for (const field in formData) {
      if (!validateField(field, formData[field])) {
        isValid = false;
        newErrors[field] = errors[field];
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  // Manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      alert("Por favor corrige los errores antes de enviar el formulario.");
      return;
    }

    emailjs
      .sendForm(
        "service_ud2z4yp", // Reemplaza con tu Service ID de EmailJS
        "template_gf3416a", // Reemplaza con tu Template ID de EmailJS
        e.target,
        "CT5kP4v32JV5C9g_K" // Reemplaza con tu User ID de EmailJS
      )
      .then(
        (result) => {
          console.log(result, "result");
          alert("Correo enviado correctamente");
          setFormData({
            user_name: "",
            user_email: "",
            user_number: "",
            user_cons: "",
          });
        },
        (error) => {
          console.log("Error al enviar el correo", error);
        }
      );
  };

  return (
    <div className={`screen-six-container1 ${props.rootClassName} `}>
      <div className="screen-six-container2">
        <div className="screen-six-container3">
          <div className="screen-six-container4">
            <span>
              {props.text2 ?? (
                <Fragment>
                  <span className="screen-six-text14">
                    <span className="screen-six-text15">¡Empieza hoy!</span>
                    <br></br>
                  </span>
                </Fragment>
              )}
            </span>
          </div>
        </div>
        <div className="screen-six-container5">
          <div className="screen-six-container6">
            <span>
              {props.text21 ?? (
                <Fragment>
                  <span className="screen-six-text18">
                    Si estás listo para dar el primer paso en el mundo de las
                    inversiones o deseas evaluar cuál de nuestros productos se
                    adapta mejor a tu perfil, no dudes en contactarnos.
                    <span dangerouslySetInnerHTML={{ __html: " " }} />
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="screen-six-container7">
            <span>
              {props.text211 ?? (
                <Fragment>
                  <span className="screen-six-text19">
                    <span className="screen-six-text20">
                      Nuestro equipo de expertos está aquí para ofrecerte un
                      asesoramiento personalizado que te guiará en cada etapa de
                      tu camino hacia el éxito financiero.
                    </span>
                    <span>
                      <span dangerouslySetInnerHTML={{ __html: " " }} />
                    </span>
                  </span>
                </Fragment>
              )}
            </span>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="screen-six-container2derecha">
        <div className="screen-six-inputlabel">
          <label className="screen-six-container2derechaLabel">
            Nombre y apellido
          </label>
          <input
            name="user_name"
            className="screen-six-container2derechaInput"
            value={formData.user_name}
            maxLength={35}
            onChange={handleChange}
            onPaste={handlePaste} // Manejo del pegado
          />
          {errors.user_name && (
            <span className="error-message">{errors.user_name}</span>
          )}
        </div>

        <div className="screen-six-inputlabel">
          <label className="screen-six-container2derechaLabel">Correo</label>
          <input
            name="user_email"
            className="screen-six-container2derechaInput"
            value={formData.user_email}
            maxLength={45} // Limitar a 45 caracteres
            onChange={handleChange}
            onPaste={handlePaste} // Manejo del pegado
          />
          {errors.user_email && (
            <span className="error-message">{errors.user_email}</span>
          )}
        </div>

        <div className="screen-six-inputlabel">
          <label className="screen-six-container2derechaLabel">
            Número de contacto
          </label>
          <input
            name="user_number"
            className="screen-six-container2derechaInput"
            value={formData.user_number}
            maxLength={12}
            onChange={handleChange}
            onPaste={handlePaste} // Manejo del pegado
            inputMode="numeric"
            pattern="[0-9+]*" // Permite solo números y el símbolo "+"
          />
          {errors.user_number && (
            <span className="error-message">{errors.user_number}</span>
          )}
        </div>

        <div className="screen-six-inputlabel">
          <label className="screen-six-container2derechaLabel">
            Dejanos tu mensaje o consulta
          </label>
          <textarea
            name="user_cons"
            style={{ height: "100px", resize: "none" }}
            className="screen-six-container2derechaInput"
            value={formData.user_cons}
            maxLength={250}
            onChange={handleChange}
            onPaste={handlePaste} // Manejo del pegado
          ></textarea>
          {errors.user_cons && (
            <span className="error-message">{errors.user_cons}</span>
          )}
        </div>

        <button type="submit" className="screen-six-button button">
          <span>
            {props.button ?? (
              <Fragment>
                <span className="screen-six-text17">solicitar asesoría</span>
              </Fragment>
            )}
          </span>
        </button>
      </form>
    </div>
  );
};

ScreenSix.defaultProps = {
  text2: undefined,
  button: undefined,
  text21: undefined,
  rootClassName: "",
  text211: undefined,
};

ScreenSix.propTypes = {
  text2: PropTypes.element,
  button: PropTypes.element,
  text21: PropTypes.element,
  rootClassName: PropTypes.string,
  text211: PropTypes.element,
};

export default ScreenSix;
