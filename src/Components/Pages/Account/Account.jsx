import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { AuthContext } from "../../../Auth/Auth";
import { db } from "../../../firebase/firebase";
import Logo from "../../../images/EmpireOfDecayLogo.png";

const Account = () => {

    useEffect(() => {
        let newTitle = "Account";
        document.title = newTitle;
    }, []);

    const [id, setId] = useState();
    const [email, setEmail] = useState();
    const [name, setName] = useState();
    const [username, setUsername] = useState();
    const [wax, setWax] = useState();

    const { currentUser } = useContext(AuthContext);
    const users = db.collection("users");

    const getUserFromDb = () => {
        let userRef = users.where("email", "==", currentUser.email);

        userRef
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    const user = doc.data();
                    // console.log(doc.id, " => ", user);
                    setName(user.name);
                    setEmail(user.email);
                    setUsername(user.username);
                    setId(doc.id);
                });
            })
            .catch((error) => {
                alert("Could not find user in database.");
                console.log("Error getting documents: ", error);
            });
    };

    const waxDetails = {
        wax: wax,
    };

    const addWax = () => {
        if (currentUser) {
            // console.log(id)
            // console.log(wax)
            users
                .doc(id)
                .set(waxDetails, {merge:true})
                .then(() => {
                    console.log("WAX successfully written!");
                    window.location.reload();
                })
                .catch((error) => {
                    console.error("Error writing WAX: ", error);
                    alert("Could not write WAX");
                });
        }
    };

    if (currentUser) {
        // console.log(currentUser.email);
        getUserFromDb();

        if (username) {
            return (
                <main>
                    <div className="account-page d-flex flex-column">
                        <div className="nav-space"></div>
                        <div className="account-container text-white">
                            <div className="account-info d-flex flex-column justify-content-center">
                                <div className="logo">
                                    <img
                                        className="img-fluid animated"
                                        src={Logo}
                                        alt=""
                                    />
                                </div>
                                <Info title="Name" data={name} />
                                <Info title="Username" data={username} />
                                <Info title="Email" data={email} />

                                <WaxToggler
                                    onChange={(event) => {
                                        setWax(event.target.value);
                                    }}
                                    onClick ={addWax}
                                />
                            </div>
                        </div>
                    </div>
                </main>
            );
        } else {
            return (
                <main>
                    <div className="account-page d-flex flex-column">
                        <div className="nav-space"></div>
                        <div className="account-container text-white">
                            <div className="account-info d-flex flex-column justify-content-center">
                                <h1>loading...</h1>
                            </div>
                        </div>
                    </div>
                </main>
            );
        }
    } else {
        return <Redirect to="/signin" />;
    }
};


const Info = (props) => {
    return (
        <div className="info">
            <h1>{props.title}</h1>
            <h2>{props.data}</h2>
        </div>
    );
};

const WaxToggler = (props) => {
    const [id, setId] = useState();
    const [email, setEmail] = useState();
    const [name, setName] = useState();
    const [username, setUsername] = useState();
    const [wax, setWax] = useState();
    const [verifyWax, setVerifyWax] = useState();

    const { currentUser } = useContext(AuthContext);
    const users = db.collection("users");

    const getUserFromDb = () => {
        let userRef = users.where("email", "==", currentUser.email);

        userRef
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    const user = doc.data();
                    // console.log(doc.id, " => ", user);
                    setName(user.name);
                    setEmail(user.email);
                    setUsername(user.username);
                    setId(doc.id);
                    // console.log(doc.id)
                    setVerifyWax(user.wax);
                    setWax(user.wax);
                });
            })
            .catch((error) => {
                alert("Could not find user in database.");
                console.log("Error getting documents: ", error);
            });
    };

    if (currentUser) {
        getUserFromDb();
        if (!verifyWax) {
            return (
                <div>
                    <div className="mt-3">
                        <h1>Enter your WAX Address</h1>
                    </div>
                    <Input
                        type="text"
                        placeholder="WAX address"
                        name="wax"
                        function={props.onChange}
                    />
                    <ButtonMain to="/account" onClick={props.onClick} label="Submit" />
                </div>
            );
        } else {
            return <Info title="Wax Address" data={wax} />;
        }
    }
};
const Input = (props) => {
    return (
        <div className="input-field mb-3">
            <input
                type={props.type}
                placeholder={props.placeholder}
                name={props.name}
                onChange={props.function}
            />
        </div>
    );
};

const ButtonMain = (props) => {
    return (
        <Link
            type={props.type}
            className="my-btn btn btn-outline-success"
            onClick={props.onClick}
            to={props.to}
        >
            <div className="btn-text">{props.label}</div>
        </Link>
    );
};

export default Account;
