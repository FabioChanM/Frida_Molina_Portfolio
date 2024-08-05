import React, { useEffect } from "react";
import "./styles/homepage.css";
import Cart from "./Particules/Carts";
import "./styles/404.css";

const ProjectsSection = () => {
	return (
		<React.Fragment>
			<div className="MyProjects">
			<section>
                <div>
                    <Cart/>

                </div>
            </section>
			</div>
		</React.Fragment>
	);
};

export default ProjectsSection;
