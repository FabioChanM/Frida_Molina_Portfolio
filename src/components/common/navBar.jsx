import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./styles/navBar.css";

const NavBar = (props) => {
	const { active } = props;
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
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
							<li
								className={
									active === "home"
										? "nav-item active"
										: "nav-item"
								}
							>
								<a href="/"> &lt; </a>
								<Link to="/"  onClick={toggleMenu} className="Link">Home</Link>
							</li>
							<li
								className={
									active === "about"
										? "nav-item active"
										: "nav-item"
								}
							>
								<a href="/"> &lt; </a>
								<Link to="/about" onClick={toggleMenu} className="Link">About</Link>
							</li>
							<li
								className={
									active === "projects"
										? "nav-item active"
										: "nav-item"
								}
							>
								<a href="/"> &lt; </a>
								<Link to="/projects" onClick={toggleMenu} className="Link">Projects</Link>
							</li>
							<li
								className={
									active === "articles"
										? "nav-item active"
										: "nav-item"
								}
							>
								<a href="/"> &lt; </a>
								<Link to="/articles" onClick={toggleMenu} className="Link">Articles</Link>
							</li>
							<li
								className={
									active === "contact"
										? "nav-item active"
										: "nav-item"
								}
							>
								<a href="/"> &lt; </a>
								<Link to="/contact" onClick={toggleMenu} className="Link">Contact</Link>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</React.Fragment>
	);
};

export default NavBar;
