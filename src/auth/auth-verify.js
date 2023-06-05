import React  from "react";
import {atob} from "node/buffer";

const parseJwt = (token) => {
    try {
        return JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
        return null;
    }
};

export default function AuthVerify (props) {
  //  let location = props.router.location;
    let location = window.location.href;

    React.useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));

        if (user) {
            const decodedJwt = parseJwt(user.accessToken);

            if (decodedJwt.exp * 1000 < Date.now()) {
                props.logOut();
            }
        }
    }, [location]);

    return <div></div>;
};

