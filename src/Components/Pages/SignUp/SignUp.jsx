import React, { useEffect } from "react";
import { Link, useHistory, withRouter } from "react-router-dom";
import { auth, db } from "../../../firebase/firebase";
import { useState } from "react";

const SignUp = () => {

    useEffect(() => {
        let newTitle = "Sign Up";
        document.title = newTitle;
    }, []);

    let history = useHistory();
    const [name, setName] = useState();
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [cPassword, setCPassword] = useState();

    const user = {
        name: name,
        username: username,
        email: email,
        password,
    };

    const signUpUser = () => {
        if (password === cPassword) {
            auth.createUserWithEmailAndPassword(user.email, user.password)
                .then((userCredential) => {
                    // Signed in
                    var user = userCredential.user;
                    console.log("User Authenticated: ", user);
                    console.log("Adding user to Database Now");

                    addUser();
                    // ...
                })
                .catch((error) => {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    console.log(errorCode, errorMessage);
                    // ..
                });
        } else {
            alert("Passwords do not match");
        }
    };

    const addUser = () => {
        db.collection("users")
            .add(user)
            .then((userRef) => {
                console.log("UserAdded with ID: ", userRef.id);
                alert("Signed Up Successfully.")
                history.push("/signin");
            })
            .catch((err) => {
                console.error("Error adding user: ", err);
            });
    };

    return (
        <main>
            <SignUpForm action="/signup" method="POST">
                <Title />

                <Input
                    type="text"
                    placeholder="Full Name"
                    name="name"
                    function={(event) => {
                        setName(event.target.value);
                    }}
                />
                <Input
                    type="text"
                    placeholder="Username"
                    name="username"
                    function={(event) => {
                        setUsername(event.target.value);
                    }}
                />
                <Input
                    type="email"
                    placeholder="Email"
                    name="email"
                    function={(event) => {
                        setEmail(event.target.value);
                    }}
                />
                <Input
                    type="password"
                    placeholder="Password"
                    name="password"
                    function={(event) => {
                        setPassword(event.target.value);
                    }}
                />
                <Input
                    type="password"
                    placeholder="Confirm Password"
                    name="cPassword"
                    function={(event) => {
                        setCPassword(event.target.value);
                    }}
                />

                <SubmitButton
                    label="SIGN UP"
                    onClick={() => {
                        signUpUser();
                    }}
                />

                <SignUpLink
                    text="Already have an account?"
                    to="/signin"
                    label="Login"
                />
            </SignUpForm>
        </main>
    );
};

const SignUpForm = (props) => {
    return (
        <div className="signup-page d-flex flex-column">
            <div className="nav-space"></div>
            <div className="signup-container d-flex flex-column justify-content-center m-auto">
                <form
                    action={props.action}
                    method={props.method}
                    className="signup-form 
                        d-flex 
                        flex-column 
                        justify-content-center 
                        text-center 
                        p-5"
                >
                    {props.children}
                </form>
            </div>
        </div>
    );
};

const Title = (props) => {
    return <h1>SIGN UP</h1>;
};

const Input = (props) => {
    return (
        <div className="input-field">
            <input
                type={props.type}
                placeholder={props.placeholder}
                name={props.name}
                onChange={props.function}
            />
        </div>
    );
};

const SubmitButton = (props) => {
    return (
        <div className="submit-button">
            <Link
                className="my-btn btn btn-outline-success"
                to={props.to}
                onClick={props.onClick}
            >
                {props.label}
            </Link>
        </div>
    );
};
const SignUpLink = (props) => {
    return (
        <div className="signup-link">
            <h3>
                {props.text} &nbsp;
                <span>
                    <Link to={props.to}>{props.label}</Link>
                </span>
            </h3>
        </div>
    );
};

export default withRouter(SignUp);
