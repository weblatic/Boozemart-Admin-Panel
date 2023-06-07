import React from "react";
import {useLocation} from "react-router";
import CustomImage from "../../components/CustomImage";
import {languages} from "../../configuration/configurationUI";
import {sendRequest} from "../../api/sendRequest";
import {apis} from "../../configuration/configurationApi";

export default function Forgot(props) {

    const [data, setData] = React.useState({
        email: "",
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
        const res =sendRequest(apis.base + apis.logo, formData, ((res) => callbackLogo(res)), ((err) => console.log(err)));
    }, []);

    const callbackLogo = (res) => {
        setLogo(res.data[0])
    };

    const submit = () => {
        let body = {
            method: "reset",
            data: {
                email: data.email,
            }
        };
        let formData = new FormData();
        formData.append("payload", JSON.stringify(body));
        const res = sendRequest(apis.base + apis.admin, formData, (res) => callback(res), (err) => callbackError(err));
    };
    const callback = (res) => {
        if (res.status===200) {
            window.location.href = '/login';
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
                    <h1 className="text-center">Change Password</h1>
                    <div className="form-group">
                        <label>Email Address</label>
                        <input onChange={(event) => setData({...data, email: event.target.value})} type="email"
                               placeholder="input Email"
                               className="form-control"/><br/><br/>

                    </div>
                    <button onClick={submit} className="btn btn-primary btn-lg btn-block fw-500 mb-3">
                        Send Password Reset Mail
                    </button>
                </div>
            </div>
        </div>
    )
}