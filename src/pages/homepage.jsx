import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";
import INFO from "../data/user";
import SEO from "../data/seo";
import Elipse from "../img/Ellipse.svg";
import Efe from "../img/fe.svg";
import Eme from "../img/me.svg";
import Frida from "../img/IMG_6795EDIT.jpg"
import VextorLine from "../img/Vectorinfi.svg"
import "./styles/homepage.css";

const Homepage = () => {
	const [stayLogo, setStayLogo] = useState(false);
	const [logoSize, setLogoSize] = useState(80);
	const [oldLogoSize, setOldLogoSize] = useState(80);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			let scroll = Math.round(window.pageYOffset, 2);

			let newLogoSize = 80 - (scroll * 4) / 10;

			if (newLogoSize < oldLogoSize) {
				if (newLogoSize > 40) {
					setLogoSize(newLogoSize);
					setOldLogoSize(newLogoSize);
					setStayLogo(false);
				} else {
					setStayLogo(true);
				}
			} else {
				setLogoSize(newLogoSize);
				setStayLogo(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [logoSize, oldLogoSize]);

	const currentSEO = SEO.find((item) => item.page === "home");

	const logoStyle = {
		display: "flex",
		position: stayLogo ? "fixed" : "relative",
		top: stayLogo ? "3vh" : "auto",
		zIndex: 999,
		border: stayLogo ? "1px solid white" : "none",
		borderRadius: stayLogo ? "50%" : "none",
		boxShadow: stayLogo ? "0px 4px 10px rgba(0, 0, 0, 0.25)" : "none",
	};

	return (
		<React.Fragment>
			<Helmet>
				<title>{INFO.main.title}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="home" />
				<div className="content-wrapper">

					<div className="homepage-container">
						<div className="homepage-first-area">
							<div className="homepage-first-area-left-side">
								<div className="title homepage-title">
									<h1>Diseñando</h1>
									<h1>tus visiones:</h1>
								</div>
								<div className="subtitle homepage-subtitle">
									<h2>UX & UI y</h2>
									<h2>diseño digital</h2>
								</div>
							</div>

						</div>

						<Stack spacing={2} sx={{ alignItems: "center", marginTop:"50px"}}>
							<Button variant="contained" sx={{
								width: "70%",
								height: "45px",
								color: "white",
								backgroundColor: "black",
								border: "2px"


							}}
								className="ButtonsCV">Mis Proyectos</Button>
							<Button variant="outlined" sx={{
								width: "70%",
								height: "45px",
								borderColor: "black",
								color: "black",
								border: "2px black solid"

							}} className="ButtonsCV">Mi CV</Button>
						</Stack>

						<section className="NameSection">

							<div className="ElipseContainer">
							<img src={Elipse} alt=""  className="Elipse"/>

							</div>
							<div className="Names">
							<h1>FRIDA</h1>
							<h1>MOLINA</h1>
							<section className="SectionFrida">
								<img src={Efe} className="Efe" alt="" />
								<img src={Eme} className="Eme" alt="" />
								<img src={VextorLine} className="Vector" alt="" />
							<img src={Frida} alt="" className="FridaImg" />
							</section>
							<section className="DescriptionImg">
								<p>
								Apasionado por el <span>diseño web</span> y enfocado en la experiencia de usuario, <span>co-fundadora</span> de "Insurrekta", actualmente trabajando en la industria de diseño digital por más 2 años consecutivos.
								</p>
							</section>
							</div>
						</section>
						<div className="page-footer">
							<Footer />
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Homepage;
