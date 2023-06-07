import React from "react";
import {Link, Navigate, useLocation} from "react-router-dom";
import {languages, routers} from "../../configuration/configurationUI";
import {sendRequest} from "../../api/sendRequest";
import {apis} from "../../configuration/configurationApi";
import CustomImage from "../../components/CustomImage";
import axios from "axios";

export default function Login(props) {


    const [data, setData] = React.useState({
        email: "",
        password: "",
        err: ""
    });
    const [logo, setLogo] = React.useState({
        favicon: "",
        footer_text: "",
        icon: "",
        last_loc: "",
        live_chat: "",
        name: "",
        number_limit: 0,
        set_id: 0
    });

    React.useEffect(() => {
        setData({...data, language: languages[0]});
        let body = {
            method: "get",
        };
        let formData = new FormData();
        formData.append("payload", JSON.stringify(body));
        const res = sendRequest(apis.base + apis.logo, formData, ((res) => callbackLogo(res)), ((err) => console.log(err)));
    }, []);

    const callbackLogo = (res) => {
        setLogo(res.data[0])
    };

    const submit = () => {
        let body = {
            method: "login",
            data: {
                email: data.email,
                password: data.password
            }
        };
        let formData = new FormData();
        formData.append("payload", JSON.stringify(body));
        const res = sendRequest(apis.base + apis.admin, formData, (res) => callback(res), (err) => callbackError(err));
    };
    const callback = (res) => {
        if (res.data.retData.success) {
            sessionStorage.setItem("user", JSON.stringify(res.data.retData.userData));
            return (
                window.location.href = '/'
            )
        }
    };
    const callbackError = (err) => {
        setData({...data, err: "Incorrect email or incorrect password"})
    };


    return (
        <div className="app app-full-height app-without-header">
            <div className="login">
                <div className="login-content">
                    <div align="center">
                        <CustomImage className="height-100 width-100"
                                     src={logo.icon}
                                     alt="IMG"/>
                    </div>
                    <hr/>
                    <h1 className="text-center">Sign In</h1>
                    <div className="text-muted text-center mb-4">
                        Admin/Sub-Admin Login.
                    </div>
                    <div className="text-center text-red">{data.err}</div>
                    <div className="form-group">
                        <label>Email Address</label>
                        <input data-validate="Valid email is required: ex@abc.xyz" type="email"
                               onChange={(event) => setData({...data, email: event.target.value})}
                               className="form-control form-control-lg fs-15px" name="email"
                               placeholder="username@address.com"/>
                    </div>
                    <div className="form-group">
                        <div className="d-flex">
                            <label>Password</label>
                            <Link to={routers.forgot}
                                  className="ml-auto text-muted">Forgot password?</Link>
                        </div>
                        <input type="password" className="form-control form-control-lg fs-15px"
                               onChange={(event) => setData({...data, password: event.target.value})}
                               placeholder="Enter your password"/>
                    </div>
                    <div className="form-group">
                        <div className="custom-control custom-checkbox">
                            <input className="custom-control-input" type="checkbox" value=""
                                   id="customCheck1"/>
                            <label className="custom-control-label fw-500" htmlFor="customCheck1">
                                Remember me</label>
                        </div>
                    </div>
                    <button onClick={submit} className="btn btn-primary btn-lg btn-block fw-500 mb-3">
                        Sign In
                    </button>
                </div>
            </div>
        </div>
    )
}