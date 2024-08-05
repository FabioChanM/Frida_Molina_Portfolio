// src/components/ProjectsSection.jsx
import React from "react";
import "./styles/homepage.css";
import Cart from "./Particules/Carts";
import "./styles/404.css";
import GFLOGO from "../img/Título_GF.svg"; 
import ISLOGO from "../img/Insurekta.svg";

const text1 = [
  { content: "Una aplicación de salud menstrual enfocada en las experiencias de ", bold: false },
  { content: "personas trans", bold: true }
];

const text2 = [
  { content: "Colectivo sin fines de lucro que busca ayudar a micro, pequeñas y medianas empresas del estado de ", bold: false },
  { content: "Mérida, Yucatán", bold: true }
];

const buttonText = "Ver más";

const ProjectsSection = () => {
  return (
    <React.Fragment>
      <div className="MyProjects">
        <section className="ConatinerProjects">
		<h4 className="ProjectsTitle">Mis proyectos</h4>
          <div>
            <Cart text={text1} buttonText={buttonText} image={GFLOGO} />
            <Cart text={text2} buttonText={buttonText} image={ISLOGO} />
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default ProjectsSection;
