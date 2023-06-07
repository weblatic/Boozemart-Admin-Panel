import React from "react";
import {sendRequest} from "../../api/sendRequest";
import {apis} from "../../configuration/configurationApi";

export default function ChangePassword(props) {

    const [data, setData] = React.useState({
        currentPassword: "",
        newPassword: "",
    });

    const submit = () => {
        let body = {
            method: "changePassword",
            email: JSON.parse(sessionStorage.getItem("user")).email,
            currentPassword: data.currentPassword,
            newPassword: data.newPassword,
        };
        let formData = new FormData();
        formData.append("payload", JSON.stringify(body));
        const res = sendRequest(apis.base + apis.admin, formData, ((res) => callbackSubmit(res)), ((err) => console.log(err)));
    };

    const callbackSubmit = (res) => {
        if (res.status === 200) {
            window.location.href="/";
        } else if (res.status === 404) {
            console.log("wrong password");
        }
    };


    return (
        <div className="card">
            <div className="card-header card-header-primary">
                <h4 className="card-title">Change Password</h4>
            </div>
            <div className="card-body">
                <div className="form-group">
                    <label>Current Password</label>
                    <input type="text" value={data.currentPassword}
                           onChange={(event) => setData({...data, currentPassword: event.target.value})}
                           className="form-control"/>
                </div>
                <div className="form-group">
                    <label>New Password</label>
                    <input type="text" value={data.newPassword}
                           onChange={(event) => setData({...data, newPassword: event.target.value})}
                           className="form-control"/>
                </div>
                <br/>
                <button onClick={submit} type="submit" className="btn btn-primary pull-center mr-1">
                    Update Password
                </button>
            </div>
        </div>

    )
}