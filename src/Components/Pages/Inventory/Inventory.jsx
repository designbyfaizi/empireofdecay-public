import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Auth/Auth";
import { db } from "../../../firebase/firebase";
import Logo from "../../../images/EmpireOfDecayLogo.png";

import axios from "axios";
import { useEffect } from "react";

const Inventory = () => {
    useEffect(() => {
        let newTitle = "Inventory";
        document.title = newTitle;
    }, []);


    const [email, setEmail] = useState();
    const [name, setName] = useState();
    const [username, setUsername] = useState();
    const [wax, setWax] = useState();
    const [waxData, setWaxData] = useState([]);

    const { currentUser } = useContext(AuthContext);

    const getUserFromDb = () => {
        const users = db.collection("users");
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
                    setWax(user.wax);
                });
            })
            .catch((error) => {
                alert("Could not find user in database.");
                console.log("Error getting documents: ", error);
            });
            
    };

    useEffect(() => {
        axios
            .get(
                `http://wax.api.atomicassets.io/atomicassets/v1/accounts/${wax}`
            )
            .then((res) => {
                console.log(res.data.data.collections);
                setWaxData(res.data.data.collections);
            })
            .catch((err) => console.log(err));
    }, [wax]);

    if (currentUser) {
        getUserFromDb();

        if (waxData.length !== 0) {
            return (
                <main>
                    <InventoryItems>
                        {waxData.map((collection) => {
                            return (
                                <SingleCard
                                    key={collection.collection.name}
                                    name={collection.collection.collection_name}
                                    tag={collection.assets}
                                    label="View on Atomic Hub"
                                    onClick={() => {
                                        window.open(
                                            `https://wax.atomichub.io/explorer/collection/${collection.collection.collection_name}`
                                        );
                                        // window.location.href = "/inventory";
                                        return null;
                                    }}
                                />
                                // <li>{collection.collection_name}</li>
                            );
                        })}
                    </InventoryItems>
                </main>
            );
        } else {
            return (
                <main>
                    <InventoryItems>
                        <h1 className="text-center">No Collection Found 😭</h1>
                    </InventoryItems>
                </main>
            );
        }
    } else {
        return (
            <main>
                <div className="inventory-page d-flex justify-content-center">
                    <h1>Unauthorized Access. Not Signed In</h1>
                </div>
            </main>
        );
    }
};

const InventoryItems = (props) => {
    return (
        <div className="inventory-page d-flex flex-row">
            <div className="inventory-container">
                <div className="inventory d-flex flex-column">
                    <div className="row">{props.children}</div>
                </div>
            </div>
        </div>
    );
};
const SingleCard = (props) => {
    return (
        <div className="column col-md-6 col-lg-4 d-flex">
            <div
                className="card grow m-5 shadow-lg pointer"
                onClick={props.onClick}
            >
                <img
                    src={Logo}
                    className="card-img-top p-2 m-auto"
                    alt="..."
                />
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">Assets: {props.tag}</p>
                    <Link to="/inventory" className="btn btn-dark grow">
                        {props.label}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Inventory;
