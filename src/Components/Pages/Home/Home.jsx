import React from "react";
import Logo from "../../../images/EmpireOfDecayLogo.png";
import InfoImage from "../../../images/backgroundImage5.jpg";
import InfoImage2 from "../../../images/backgroundImage3.jpg";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";

const HomePage = () => {
    let history = useHistory();

    useEffect(() => {
        let newTitle = "Home";
        document.title = newTitle;
    }, []);
    return (
        <>
            <NavSpace/>
            <main>
                {/* SECTION MAIN */}
                <SectionMain
                    class="top-space"
                    src={Logo}
                    alt="Empire of Decay"
                    title="New Game Genre"
                >
                    <SubFeature
                        subheading="Simple & Deep"
                        para="Simple Mechanics, packed into a deep Card Game. Easy to learn, hard to master."
                    />
                    <SubFeature
                        subheading="Fast Strategic Battles"
                        para="Load Units into the battlefield. Equip them
                                with Attachments and execute Actions to win."
                    />
                </SectionMain>

                {/* SECTION MAIN */}
                <SectionMain
                    class="top-space"
                    src={Logo}
                    alt="Empire of Decay"
                    title="New Game Genre"
                >
                    <SubFeature
                        subheading="Simple & Deep"
                        para="Simple Mechanics, packed into a deep Card Game. Easy to learn, hard to master."
                    />
                    <SubFeature
                        subheading="Fast Strategic Battles"
                        para="Load Units into the battlefield. Equip them
                                with Attachments and execute Actions to win."
                    />
                </SectionMain>

                {/* SECTION MAIN */}
                <SectionMain
                    class="top-space"
                    src={Logo}
                    alt="Empire of Decay"
                    title="New Game Genre"
                >
                    <SubFeature
                        subheading="Simple & Deep"
                        para="Simple Mechanics, packed into a deep Card Game. Easy to learn, hard to master."
                    />
                    <SubFeature
                        subheading="Fast Strategic Battles"
                        para="Load Units into the battlefield. Equip them
                                with Attachments and execute Actions to win."
                    />
                </SectionMain>

                {/* SECTION MAIN */}
                <SectionMain
                    class="top-space"
                    src={Logo}
                    alt="Empire of Decay"
                    title="New Game Genre"
                >
                    <SubFeature
                        subheading="Simple & Deep"
                        para="Simple Mechanics, packed into a deep Card Game. Easy to learn, hard to master."
                    />
                    <SubFeature
                        subheading="Fast Strategic Battles"
                        para="Load Units into the battlefield. Equip them
                                with Attachments and execute Actions to win."
                    />
                </SectionMain>

                {/* SECTION B */}
                <SectionB title="NOT ENOUGH INFORMATION YET?">
                    <MultiColumn>
                        <SingleColumn
                            src={InfoImage}
                            by="Faizan Ullah"
                            date="May 28, 2021"
                            title="Tutorial: Deposit/Withdraw Crates"
                            onClick={() => {
                                history.push("/blogs");
                            }}
                        />
                        <SingleColumn
                            src={InfoImage2}
                            by="Behroz Azher"
                            date="May 29, 2021"
                            title="Tutorial: How to Hack NASA"
                            onClick={() => {
                                history.push("/blogs");
                            }}
                        />
                    </MultiColumn>
                    <Link to="/blogs">
                        Read More
                        <span class="m-3 grow">
                            <FontAwesomeIcon icon={faCaretRight} />
                        </span>
                    </Link>
                </SectionB>

                {/* SECTION C */}
                <SectionC
                    title="PREPARE YOURSELF TO DEFEND THE EMPIRE"
                    to="/"
                    label="GET CRATES"
                />
            </main>
        </>
    );
};

const NavSpace = () => {
    return <div styleName="height:120px"></div>;
};

const SectionMain = (props) => {
    return (
        <section className="section">
            <div className="custom-div-1 d-flex">
                <div className="custom-div-content">
                    <h1 className={props.class}>{props.title}</h1>
                    <div className="my-img-container container">
                        <img
                            className="img-fluid animated"
                            src={props.src}
                            alt={props.alt}
                        />
                    </div>
                    <div className="features">
                        <div className="d-flex flex-column flex-lg-row text-center text-md-left">
                            {props.children}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const SubFeature = (props) => {
    return (
        <div className="sub-feature">
            <h2>{props.subheading}</h2>
            <p>{props.para}</p>
        </div>
    );
};

const SectionB = (props) => {
    return (
        <section>
            <div className="dark-section d-flex">
                <div className="custom-div-content d-flex flex-column">
                    <div className="heading">
                        <h1>{props.title}</h1>
                    </div>
                    {props.children}
                </div>
            </div>
        </section>
    );
};

const MultiColumn = (props) => {
    return (
        <div className="d-flex flex-column flex-md-row container">
            {props.children}
        </div>
    );
};

const SingleColumn = (props) => {
    return (
        <div className="info-card p-2" onClick={props.onClick}>
            <img src={props.src} className="img-fluid" alt="Information Card" />
            <div className="d-flex flex-column justify-content-start">
                <div className="name-date d-flex flex-row justify-content-between">
                    <h3>By {props.by}</h3>
                    <h3>{props.date}</h3>
                </div>
                <div className="title">
                    <h2 className="">{props.title}</h2>
                </div>
            </div>
        </div>
    );
};

const SectionC = (props) => {
    return (
        <section>
            <div className="custom-div-1 d-flex">
                <div className="custom-div-content">
                    <h1 className="heading">{props.title}</h1>
                    <ButtonMain to={props.to} label={props.label} />
                </div>
            </div>
        </section>
    );
};

export const ButtonMain = (props) => {
    return (
        <Link
            type={props.type}
            className="my-btn btn btn-outline-success"
            to={props.to}
        >
            <div className="btn-text">{props.label}</div>
        </Link>
    );
};

export default HomePage;
