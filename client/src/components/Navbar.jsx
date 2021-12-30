import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";
import Toggler from "./Toggler";

const Navbar = () => {
	const themeData = useSelector((state) => state.DarkMode)
    const classname = themeData.theme ? classes.dark : '';
	return (
		<div className={classes["nav-container"] + " " + classname}>
			<Link to="/" className={classes["nav-logo"] + " " + classname}> GDSC IIITS </Link>
			<nav>
				<ul className={classes["nav_links"]}>
					<li>
						<Link
							to="/"
							className={classes["nav-item"] + " " + classname}
						>
							Home
						</Link>
					</li>
					<li>
						<Link
							to="/events"
							className={classes["nav-item"] + " " + classname}
						>
							Events
						</Link>
					</li>
					<li>
						<Link
							to="/blogs"
							className={classes["nav-item"] + " " + classname}
						>
							Blogs
						</Link>
					</li>
					<li>
						<Link
							to="/team"
							className={classes["nav-item"] + " " + classname}
						>
							Team
						</Link>
					</li>
					{/* <li>
						<Link
							to="/speakers"
							className="nav-item"
						>
							Speakers
						</Link>
					</li> */}
					<li>
						<Link
							to="/about"
							className={classes["nav-item"] + " " + classname}
						>
							About
						</Link>
					</li>
					<li>
						<Link
							to="/contact"
							className={classes["nav-item"] + " " + classname}
						>
							Contact
						</Link>
					</li>
					<li>
						<Toggler />
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;
