import React, { useState } from "react";
import { Link } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import "./styles/navBar.css";

const NavBar = (props) => {
	const { active } = props;
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [selectedLanguage, setSelectedLanguage] = useState("ES");

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const handleLanguageChange = (language) => {
		setSelectedLanguage(language);
	};

	return (
		<React.Fragment>
			<div className="nav-container">
				<nav className="navbar">
					<div className="nav-background">
						<div className={`hamburger ${isMenuOpen ? "open" : ""}`} onClick={toggleMenu}>
							<div className="bar"></div>
							<div className="bar"></div>
							<div className="bar"></div>
						</div>
						<ul className={`nav-list ${isMenuOpen ? "open" : ""}`}>
							<li className={active === "home" ? "nav-item active" : "nav-item"}>
							<ArrowBackIosIcon className="flechas" sx={{ display: { xs: "flex", md: "none" } }} />
								<Link to="/" onClick={toggleMenu} className="Link">Sobre mi</Link>
							</li>
							<li className={active === "about" ? "nav-item active" : "nav-item"}>
							<ArrowBackIosIcon className="flechas" sx={{ display: { xs: "flex", md: "none" } }} />
								<Link to="/about" onClick={toggleMenu} className="Link">Proyectos</Link>
							</li>
							<li className={active === "projects" ? "nav-item active" : "nav-item"}>
								<ArrowBackIosIcon className="flechas" sx={{ display: { xs: "flex", md: "none" } }} />
								<Link to="/projects" onClick={toggleMenu} className="Link">Projects</Link>
							</li>
							<li className={active === "articles" ? "nav-item active" : "nav-item"}>
							<ArrowBackIosIcon className="flechas" sx={{ display: { xs: "flex", md: "none" } }} />
								<Link to="/articles" onClick={toggleMenu} className="Link">Habilidades</Link>
							</li>
							<li className={active === "contact" ? "nav-item active" : "nav-item"}>
							<ArrowBackIosIcon className="flechas" sx={{ display: { xs: "flex", md: "none" } }} />
								<Link to="/contact" onClick={toggleMenu} className="Link">Contacto</Link>
							</li>
							<div className="idiomas">
								<button className={`buttonslenguaje ${selectedLanguage === "ES" ? "selected" : ""}`} onClick={() => handleLanguageChange("ES")}>
									ES
								</button>
								<button className={`buttonslenguaje ${selectedLanguage === "EN" ? "selected" : ""}`} onClick={() => handleLanguageChange("EN")}>
									EN
								</button>
							</div>
						</ul>
					</div>
				</nav>
			</div>
		</React.Fragment>
	);
};

export default NavBar;
