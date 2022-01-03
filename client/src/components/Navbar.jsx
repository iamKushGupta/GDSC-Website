import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Logo from "../assets/gdsc_logo.png";
import classes from "./Navbar.module.css";
import Toggler from "./Toggler";

const Navbar = () => {
  const themeData = useSelector((state) => state.DarkMode);
  const classname = themeData.theme ? classes.dark : "";
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  useEffect(() => {
    if (screenWidth > 850 && isNavExpanded) {
      setIsNavExpanded(false);
    }
  }, [screenWidth, isNavExpanded]);

  return (
    <div
      className={
        isNavExpanded
          ? classes["nav-container-expanded"] + " " + classname
          : classes["nav-container"] + " " + classname
      }
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Link to="/" className={classes["nav-logo"] + " " + classname}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src={Logo}
              alt="Logo"
              height="40px"
              width="40px"
              style={{ marginRight: "5px" }}
            />
            GDSC IIITS
          </div>
        </Link>
        {isNavExpanded ? (
          <span
            className={classes["close-icon"]}
            onClick={() => setIsNavExpanded(false)}
          >
            <CloseIcon />
          </span>
        ) : (
          ""
        )}
      </div>
      {isNavExpanded ? (
        ""
      ) : (
        <span
          className={classes["menu-icon"]}
          onClick={() => setIsNavExpanded(true)}
        >
          <MenuIcon />
        </span>
      )}
      <nav>
        <ul className={classes["nav_links"]}>
          <li>
            <NavLink to="/" activeClassName={classes.active} className={classes["nav-item"] + " " + classname} exact>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/events"
              activeClassName={classes.active}
              className={classes["nav-item"] + " " + classname}
            >
              Events
            </NavLink>
          </li>
          {/* <li>
				<Link
					to="/blogs"
					className={classes["nav-item"] + " " + classname}
				>
					Blogs
				</Link>
			</li> */}
          <li>
            <NavLink to="/team" activeClassName={classes.active} className={classes["nav-item"] + " " + classname}>
              Team
            </NavLink>
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
            <NavLink to="/about" activeClassName={classes.active} className={classes["nav-item"] + " " + classname}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              activeClassName={classes.active}
              className={classes["nav-item"] + " " + classname}
            >
              Contact
            </NavLink>
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
