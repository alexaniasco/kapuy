import React, { Fragment, useState } from "react";

import { Helmet } from "react-helmet";

import ScreenTow from "../components/screen-tow";
import ScreenTree from "../components/screen-tree";
import AppComponent from "../components/component";
import Servicios from "../components/servicios";
import ScreenFour from "../components/screen-four";
import ScreenFive from "../components/screen-five";
import ScreenSix from "../components/screen-six";
import ScreenSeven from "../components/screen-seven";
import Footer from "../components/footer";
import "./home.css";

const Home = (props) => {
  const [isMenu, setIsMenu] = useState();

  return (
    <div id="inicio" className="home-container1">
      <Helmet>
        <title>Kapuy soluciones</title>
        <meta property="og:title" content="Kapuy soluciones" />
        <link rel="icon" href="/favicon.png" type="image/x-icon" />
      </Helmet>
      <nav className="home-navbar">
        <nav className="home-container2">
          <div className="home-container3">
            <div className="home-container4">
              <img alt="image" src="lgo-200h.png" className="home-image" />
            </div>
          </div>
          <div
            className="navv"
            style={{
              color: "white",
              fontWeight: 600,
              display: "flex",
              gap: 25,
              alignItems: "center",
              height: "100%",
            }}
          >
            <a href="#inicio">Inicio</a>
            <a href="#nosotros">Nosotros</a>

            <a href="#nuestro-valor">Nuestro valor</a>
            <a href="#soluciones">Soluciones</a>
            <a href="#servicios">Servicios</a>
            <a href="#bolsa-laboral">Bolsa laboral</a>
          </div>
          <img
            onClick={() => setIsMenu(true)}
            className="burguer"
            src="burguer.png"
          ></img>
        </nav>
      </nav>
      {isMenu && (
        <div
          style={{
            position: "fixed",
            width: "100vw",
            height: "100vh",
            backgroundColor: "black",
            zIndex: 9999,
            opacity: 0.9,
          }}
        >
          <a
            onClick={() => setIsMenu(false)}
            style={{
              position: "absolute",
              top: 15,
              right: 20,
              color: "white",
              fontWeight: 600,
              padding: 20,
              cursor: "pointer",
            }}
          >
            X
          </a>
          <div
            style={{
              color: "white",
              fontWeight: 600,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: 25,
              alignItems: "center",
              height: "100%",
              width: "100%",
              paddingLeft: 10,
              paddingRight: 30,
            }}
          >
            <a
              style={{
                width: "100%",
                borderBottomWidth: 1,
                borderBottomColor: "white",
              }}
              onClick={() => setIsMenu(false)}
              href="#inicio"
            >
              Inicio
            </a>
            <a
              style={{
                width: "100%",
                borderBottomWidth: 1,
                borderBottomColor: "white",
              }}
              onClick={() => setIsMenu(false)}
              href="#nosotros"
            >
              Nosotros
            </a>

            <a
              style={{
                width: "100%",
                borderBottomWidth: 1,
                borderBottomColor: "white",
              }}
              onClick={() => setIsMenu(false)}
              href="#nuestro-valor"
            >
              Nuestro valor
            </a>
            <a
              style={{
                width: "100%",
                borderBottomWidth: 1,
                borderBottomColor: "white",
              }}
              onClick={() => setIsMenu(false)}
              href="#soluciones"
            >
              Soluciones
            </a>
            <a
              style={{
                width: "100%",
                borderBottomWidth: 1,
                borderBottomColor: "white",
              }}
              onClick={() => setIsMenu(false)}
              href="#servicios"
            >
              Servicios
            </a>
            <a
              style={{
                width: "100%",
                borderBottomWidth: 1,
                borderBottomColor: "white",
              }}
              onClick={() => setIsMenu(false)}
              href="#bolsa-laboral"
            >
              Bolsa laboral
            </a>
          </div>
        </div>
      )}
      <div className="home-container5"></div>
      <div className="home-container6">
        <video
          className="background-video"
          autoPlay
          loop
          muted
          playsInline
          style={{ pointerEvents: "none" }}
        >
          <source src={"vheader.mp4"} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="home-container7">
          <span className="home-text10">
            <span>
              Tu tranquilidad financiera, impulsada
              <span
                dangerouslySetInnerHTML={{
                  __html: " ",
                }}
              />
            </span>
            <span>por</span>
            <span> experiencia y transparencia.</span>
            <br></br>
          </span>
          <span className="home-text15">
            <span>
              En Kapuy Soluciones, ofrecemos asesoría financiera personalizada
            </span>
            <br></br>
            <span>
              con transparencia y portafolios diversificados para maximizar tus
            </span>
            <br></br>
            <span>
              inversiones.
              <span
                dangerouslySetInnerHTML={{
                  __html: " ",
                }}
              />
            </span>
          </span>
          <button type="button" className="home-button button">
            ¡Asegura tu futuro financiero!
          </button>
        </div>
      </div>
      <ScreenTow
        text1={
          <Fragment>
            <span className="home-text21">Quiénes somos</span>
          </Fragment>
        }
        text2={
          <Fragment>
            <span className="home-text22">
              <span>
                Con más de 20 años de experiencia, en Kapuy Soluciones nos
                especializamos en el asesoramiento integral en gestión
                patrimonial, planificación financiera y gestión de instrumentos
                de inversiones. Aplicamos estrategias de diversificación
                innovadoras y efectivas para maximizar la rentabilidad de tus
                inversiones, mientras gestionamos los riesgos con total
                transparencia.
              </span>
              <br></br>
            </span>
          </Fragment>
        }
        text3={
          <Fragment>
            <span className="home-text25">
              {" "}
              Nuestro equipo profesional te acompaña en cada etapa, asegurando
              la protección de tus activos y el éxito a largo plazo.
            </span>
          </Fragment>
        }
        rootClassName="screen-towroot-class-name"
      ></ScreenTow>
      <ScreenTree
        text1={
          <Fragment>
            <span className="home-text26">
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
        }
        text2={
          <Fragment>
            <span className="home-text30">
              <span>
                Nuestro equipo de asesores expertos combina experiencia y
                profundo conocimiento del mercado para ofrecerte un enfoque
                personalizado y transparente.
              </span>
              <br></br>
              <br></br>
              <span>
                Nos especializamos en identificar oportunidades de inversión
                únicas, alineadas con tus objetivos financieros, brindando
                seguridad y confianza en cada decisión.
              </span>
              <br></br>
              <br></br>
            </span>
          </Fragment>
        }
        rootClassName="screen-treeroot-class-name"
      ></ScreenTree>
      <AppComponent
        text={
          <Fragment>
            <span className="home-text37">Cómo lo hacemos</span>
          </Fragment>
        }
        text1={
          <Fragment>
            <span className="home-text38">
              <span>Asesoramiento en gestión</span>
              <br></br>
              <span>del patrimonio</span>
            </span>
          </Fragment>
        }
        text2={
          <Fragment>
            <span className="home-text42">
              Gestionamos la administración de tu patrimonio con un enfoque
              integral y personalizado. Nuestro equipo de expertos diseña
              estrategias para maximizar el crecimiento y preservación de tus
              activos, alineándose a tus objetivos financieros. Priorizamos la
              transparencia y la confianza, asegurando que tus inversiones estén
              en manos profesionales.
            </span>
          </Fragment>
        }
        text13={
          <Fragment>
            <span className="home-text43">
              <span>Asesoramiento y Gestión del Riesgo</span>
              <br></br>
            </span>
          </Fragment>
        }
        text14={
          <Fragment>
            <span className="home-text46">
              <span>Planificación Financiera y Gestión de Fondos</span>
              <br></br>
            </span>
          </Fragment>
        }
        text23={
          <Fragment>
            <span className="home-text49">
              <span>
                En Kapuy Soluciones, la gestión del riesgo es fundamental.
                Identificamos y mitigamos los riesgos de tus inversiones,
                protegiendo tu patrimonio de fluctuaciones del mercado y eventos
                inesperados. Nuestro equipo utiliza estrategias efectivas para
                minimizar la exposición a riesgos, brindándote la seguridad para
                tomar decisiones informadas.
              </span>
              <br></br>
            </span>
          </Fragment>
        }
        text24={
          <Fragment>
            <span className="home-text52">
              <span>
                Somos especialistas en planificación financiera integral,
                creando soluciones a medida para optimizar el rendimiento de tus
                recursos. Gestionamos fondos diversificados con una visión
                estratégica que alinea tus inversiones con tus metas a largo
                plazo. Ofrecemos alternativas rentables y seguras para un
                crecimiento sostenible.
              </span>
              <br></br>
            </span>
          </Fragment>
        }
        rootClassName="app-componentroot-class-name"
      ></AppComponent>
      <Servicios
        text={
          <Fragment>
            <span className="home-text55">Principales servicios</span>
          </Fragment>
        }
        text1={
          <Fragment>
            <span className="home-text56">Herramientas de inversión</span>
          </Fragment>
        }
        text2={
          <Fragment>
            <span className="home-text57">
              Fondos privados, notas estructuradas, bonos y otras herramientas
              para optimizar tu rendimiento financiero.
            </span>
          </Fragment>
        }
        text11={
          <Fragment>
            <span className="home-text58">Créditos para proyectos</span>
          </Fragment>
        }
        text12={
          <Fragment>
            <span className="new-card-info">
              Facilitamos el acceso a créditos específicos para iniciativas que
              generen crecimiento y desarrollo.
            </span>
          </Fragment>
        }
        text13={
          <Fragment>
            <span className="home-text60">Compra y venta de empresas</span>
          </Fragment>
        }
        text14={
          <Fragment>
            <span className="new-card-info">
              Conectamos vendedores e inversores para facilitar transacciones
              exitosas y rentables en la compra y venta de empresas.
            </span>
          </Fragment>
        }
        text15={
          <Fragment>
            <span className="home-text62">Asesoría legal</span>
          </Fragment>
        }
        text16={
          <Fragment>
            <span className="new-card-info">
              Nuestro equipo legal asegura que todas tus decisiones financieras
              estén respaldadas bajo un marco jurídico sólido y bajo las
              normativas vigentes.
            </span>
          </Fragment>
        }
        text21={
          <Fragment>
            <span className="home-text64">
              Asesoría a personas y empresas en la planificación de un futuro
              financiero sólido, asegurando una jubilación segura y opciones de
              ahorro eficientes.
            </span>
          </Fragment>
        }
        text22={
          <Fragment>
            <span className="home-text65">
              Protegemos tus activos y patrimonio contra riesgos financieros y
              legales.
            </span>
          </Fragment>
        }
        text23={
          <Fragment>
            <span className="home-text66">
              Nos adaptamos a las necesidades específicas de cada empresa,
              accediendo a capital que impulse su crecimiento y brindando
              estrategias que mejoren su liquidez.
            </span>
          </Fragment>
        }
        text24={
          <Fragment>
            <span className="home-text67">
              Facilitamos el acceso a créditos específicos para iniciativas que
              generen crecimiento y desarrollo.
            </span>
          </Fragment>
        }
        text25={
          <Fragment>
            <span className="home-text68">
              Conectamos vendedores e inversores para facilitar transacciones
              exitosas y rentables en la compra y venta de empresas.
            </span>
          </Fragment>
        }
        text26={
          <Fragment>
            <span className="home-text69">
              Nuestro equipo legal asegura que todas tus decisiones financieras
              estén respaldadas bajo un marco jurídico sólido y bajo las
              normativas vigentes.
            </span>
          </Fragment>
        }
        rootClassName="serviciosroot-class-name"
      ></Servicios>
      <ScreenFour
        text1={
          <Fragment>
            <span className="home-text70">Nuestros aliados</span>
          </Fragment>
        }
        text2={
          <Fragment>
            <span className="home-text71">
              <span>
                Nuestros aliados estratégicos son clave para ofrecer soluciones
                financieras de calidad, ya que su respaldo nos permite
                proporcionar productos de inversión confiables y competitivos a
                nivel global.
                <span
                  dangerouslySetInnerHTML={{
                    __html: " ",
                  }}
                />
              </span>
              <br></br>
            </span>
          </Fragment>
        }
        rootClassName="screen-fourroot-class-name"
      ></ScreenFour>
      <ScreenFive
        text2={
          <Fragment>
            <span className="home-text74">
              <span>
                Al contar con empresas de prestigio internacional, garantizamos
                el acceso a herramientas de inversión tanto en dólares como en
                soles, adaptadas a diferentes perfiles de inversionistas.
                <span
                  dangerouslySetInnerHTML={{
                    __html: " ",
                  }}
                />
              </span>
              <br></br>
              <br></br>
              <span>
                De esta manera, podemos ofrecer soluciones personalizadas que se
                ajustan a las necesidades de grandes y pequeños inversionistas,
                asegurando una gestión integral y de alto valor
              </span>
              <br></br>
            </span>
          </Fragment>
        }
        rootClassName="screen-fiveroot-class-name"
      ></ScreenFive>
      <ScreenSix
        text2={
          <Fragment>
            <span className="home-text80">
              <span className="home-text81">¡Empieza hoy!</span>
              <br></br>
            </span>
          </Fragment>
        }
        button={
          <Fragment>
            <span className="home-text83">Solicitar asesoría</span>
          </Fragment>
        }
        text21={
          <Fragment>
            <span className="home-text84">
              Si estás listo para dar el primer paso en el mundo de las
              inversiones o deseas evaluar cuál de nuestros productos se adapta
              mejor a tu perfil, no dudes en contactarnos.
              <span
                dangerouslySetInnerHTML={{
                  __html: " ",
                }}
              />
            </span>
          </Fragment>
        }
        text211={
          <Fragment>
            <span className="home-text85">
              <span className="home-text86">
                Nuestro equipo de expertos está aquí para ofrecerte un
                asesoramiento personalizado que te guiará en cada etapa de tu
                camino hacia el éxito financiero.
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: " ",
                  }}
                />
              </span>
            </span>
          </Fragment>
        }
        rootClassName="screen-sixroot-class-name"
      ></ScreenSix>
      <ScreenSeven
        text2={
          <Fragment>
            <span className="home-text88">
              <span>Únete a nosotros</span>
              <br></br>
            </span>
          </Fragment>
        }
        button={
          <Fragment>
            <span className="home-text91">Postula aquí</span>
          </Fragment>
        }
        text21={
          <Fragment>
            <span className="home-text92">
              <span>
                ¡Únete a Kapuy Soluciones y sé parte de un equipo líder en
                inversiones! Aquí, te ayudamos a potenciar tu crecimiento
                profesional mientras maximizas oportunidades financieras para
                nuestros clientes. ¡Conéctate con nosotros y comienza tu carrera
                hoy mismo!
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
        }
        rootClassName="screen-sevenroot-class-name"
      ></ScreenSeven>
      <Footer
        text={
          <Fragment>
            <span className="home-text96">Correo Electrónico</span>
          </Fragment>
        }
        text1={
          <Fragment>
            <span className="home-text97">INFO@KAPUY.COM</span>
          </Fragment>
        }
        text2={
          <Fragment>
            <span className="home-text98">Contacto</span>
          </Fragment>
        }
        rootClassName="footerroot-class-name"
      ></Footer>
    </div>
  );
};

export default Home;
