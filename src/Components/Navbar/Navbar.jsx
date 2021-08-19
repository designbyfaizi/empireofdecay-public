import React from "react";
import Logo from "../../images/EmpireOfDecayLogo.png";
import pdf from "../../pdf/Flutter on Ground.pdf";
import { NavLink, Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";
import { useContext } from "react";
import { AuthContext } from "../../Auth/Auth";

import { auth } from "../../firebase/firebase";

const Navbar = () => {
    let history = useHistory();

    const signOutUser = () => {
        auth.signOut()
            .then(() => {
                console.log("Signed Out Successfully.");
                history.push("/signin");
            })
            .catch((err) => console.log(err));
    };

    return (
        <nav className="my-navbar navbar fixed-top navbar-expand-xl navbar-dark py-2">
            <div className="container-fluid">
                <NavbarBrand to="/" src={Logo} alt="Empire of Decay" />
                <NavbarToggler />
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <NavbarNav>
                        <NavItem to="/" label="Home" exact={true} />
                        <NavItem to="/redirect" label="FAQ" />
                        <NavItem to={pdf} label="Download PDF" target="_blank"/>
                    </NavbarNav>
                    <NavbarNavRight className="">

                        <NavIcon to="https://discord.gg/ggYmxVMzP2" icon={faDiscord} />
                        <NavIcon to="https://t.me/joinchat/dcBZ4tqWGNE1MjNk" icon={faTelegram} />

                        <PrivateNavItem to="/inventory" label="Inventory" />
                        <PrivateNavItem to="/account" label="My Account" />
                        <PublicNavItem to="/signin" label="Login" />
                    </NavbarNavRight>
                    <div className="d-grid gap-2 d-xl-block">
                        <NavbarButton
                            onClick={() => {
                                history.push("/signup");
                            }}
                            onClickPrivate={() => {
                                signOutUser();
                            }}
                            label="Sign Up"
                            labelPrivate="Log Out"
                            to="/signup"
                            toPrivate="/signin"
                        />
                    </div>
                </div>
            </div>
        </nav>
    );
};

const NavbarBrand = (props) => {
    return (
        <Link className="navbar-brand" to={props.to}>
            <img className="brand-image" src={props.src} alt={props.alt} />
        </Link>
    );
};

const NavbarToggler = () => {
    return (
        <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span className="navbar-toggler-icon"></span>
        </button>
    );
};

const NavbarNav = (props) => {
    return (
        <ul className="navbar-nav navbar-left me-auto mb-2 mb-lg-0">
            {props.children}
        </ul>
    );
};

const NavbarNavRight = (props) => {
    return (
        <ul className="navbar-nav navbar-right ms-lg-auto mb-2 mb-lg-0">
            {props.children}
        </ul>
    );
};

const NavItem = (props) => {

    return (
        <NavLink
            to={props.to}
            exact={props.exact}
            className="nav-link mx-auto ms-xl-2"
            activeClassName="active"
            target={props.target} download
        >
            {props.label}
        </NavLink>
    );
    
};

const PublicNavItem = (props) => {
    const { currentUser } = useContext(AuthContext);
    if (!currentUser) {
        return (
            <NavLink
                to={props.to}
                exact={props.exact}
                className="nav-link mx-auto ms-xl-2"
                activeClassName="active"
            >
                {props.label}
            </NavLink>
        );
    } else {
        return <></>;
    }
};

const PrivateNavItem = (props) => {
    const { currentUser } = useContext(AuthContext);
    if (currentUser) {
        return (
            <NavLink
                to={props.to}
                exact={props.exact}
                className="nav-link mx-auto ms-xl-2"
                activeClassName="active"
            >
                {props.label}
            </NavLink>
        );
    } else {
        return <></>;
    }
};

const NavIcon = (props) => {
    return (
        <a
            href={props.to}
            exact={props.exact}
            className="nav-link nav-icon mx-auto ms-xl-2"
            target="_blank"
            rel="noreferrer"
        >
            <FontAwesomeIcon icon={props.icon} />
        </a>
    );
};

const NavbarButton = (props) => {
    const { currentUser } = useContext(AuthContext);
    if (!currentUser) {
        return (
            <Link
                className="my-btn btn btn-outline-success"
                onClick={props.onClick}
                to={props.to}
            >
                <div className="btn-text">{props.label}</div>
            </Link>
        );
    } else {
        return (
            <Link
                className="my-btn btn btn-outline-success"
                onClick={props.onClickPrivate}
                to={props.toPrivate}
            >
                <div className="btn-text">{props.labelPrivate}</div>
            </Link>
        );
    }
};
export default Navbar;
