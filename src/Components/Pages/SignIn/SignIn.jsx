import React, { useEffect } from "react";
import { Link, Redirect, withRouter } from "react-router-dom";
import { useState } from "react";
import { auth } from "../../../firebase/firebase";
import { useContext } from "react";
import { AuthContext } from "../../../Auth/Auth";

const SignIn = () => {

    useEffect(() => {
        let newTitle = "Sign In";
        document.title = newTitle;
    }, []);

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const user = {
        email: email,
        password: password,
    };


    const signInUser = () => {
        console.log(user.email);
        

        auth.signInWithEmailAndPassword(user.email, user.password)
            .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                console.log("Signed In.✨ User: ", user);
                // ...
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log("Could Not Sign In: ",errorCode, errorMessage);
                alert("Could not Sign In.");
            });
    };

    // const signInUser = useCallback(

    //     async (event) => {
    //         event.preventDefault();
    //         const email = user.email;
    //         const password = user.password;
    //         console.log(email);
    //         try {
    //             await auth.signInWithEmailAndPassword(
    //                 email,
    //                 password
    //             );
    //         } catch (error) {
    //             var errorCode = error.code;
    //             var errorMessage = error.message;
    //             console.log(errorCode, errorMessage);
    //         }
    //     },
    //     [history]
    // );


    // if (currentUser) {
    //     // history.push("/account");
    //     console.log("Signed In")
    //     return <Redirect to="/account" />;
    // }

    // console.log("Not Signed In.");

    const {currentUser} = useContext(AuthContext);

    if(currentUser){
        return(
            <Redirect to="/account" />
        );
    }
    return (
        <main>
            <SignInForm action="/signin" method="POST">
                <Title />

                <Input
                    type="text"
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
                        // console.log(event.target.value)
                    }}
                />

                <SubmitButton
                    label="LOGIN"
                    to="/account"
                    onClick={() => {
                        signInUser();
                    }}
                />

                <LoginLink
                    text="Don't have an account yet?"
                    to="/signup"
                    label="Sign Up"
                />

                <LoginLink
                    text="Don't remember your password?"
                    to="/"
                    label="Recover my Password"
                />
            </SignInForm>
        </main>
    );
};

const SignInForm = (props) => {
    return (
        <div className="login-page d-flex flex-column">
            <div className="nav-space"></div>
            <div className="login-container d-flex flex-column justify-content-center m-auto">
                <form
                    action={props.action}
                    method={props.method}
                    className="login-form 
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
    return <h1>LOGIN</h1>;
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

const LoginLink = (props) => {
    return (
        <div className="login-link">
            <h3>
                {props.text} &nbsp;
                <span>
                    <Link to={props.to}>{props.label}</Link>
                </span>
            </h3>
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

export default withRouter(SignIn);
