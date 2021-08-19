import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faTelegram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

import { faMedium } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <footer>
            <FooterLine />
            <FooterContent />
        </footer>
    );
};

const FooterLine = () => {
    return <div className="footer-line"></div>;
};

const FooterContent = () => {
    return (
        <div className="container-fluid">
            <div className="my-footer d-flex flex-column justify-content-around">
                <div className="mx-auto">
                    <div className="social-icons d-flex flex-column flex-md-row">
                        <NavIcon
                            to="https://discord.gg/ggYmxVMzP2"
                            icon={faDiscord}
                        />
                        <NavIcon
                            to="https://t.me/joinchat/dcBZ4tqWGNE1MjNk"
                            icon={faTelegram}
                        />
                        <NavIcon
                            to="https://twitter.com/empire_decay"
                            icon={faTwitter}
                        />
                        <NavIcon
                            to="https:medium.com/@empireofdecay"
                            icon={faMedium}
                        />
                    </div>
                </div>
                <div className="d-flex flex-column flex-md-row justify-content-between">
                    <div className="sub-footer align-self-center">
                        <div className="copyright-text text-center">
                            <h1>
                                © 2021 Empire of Decay. All rights reserved.
                            </h1>
                        </div>
                    </div>
                    <div className="sub-footer align-self-center">
                        <div className="other-links d-flex flex-column flex-md-row text-center justify-content-end">
                            <Link to="/contact">Contact Us</Link>
                            <Link to="/privacy">Privacy</Link>
                            <Link to="/terms">Terms</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const NavIcon = (props) => {
    return (
        <a
            href={props.to}
            exact={props.exact}
            className="my-icon"
            activeClassName="active"
            target="_blank"
            rel="noreferrer"
        >
            <FontAwesomeIcon icon={props.icon} />
        </a>
    );
};

export default Footer;
