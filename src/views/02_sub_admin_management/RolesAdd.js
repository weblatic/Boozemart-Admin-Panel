import React from "react";
import {Link} from "react-router-dom";
import {routers} from "../../configuration/configurationUI";
import FormControlLabel from "@mui/material/FormControlLabel/FormControlLabel";
import Checkbox from "@mui/material/Checkbox/Checkbox";
import {sendRequest} from "../../api/sendRequest";
import {apis} from "../../configuration/configurationApi";

export default function RolesAdd(props) {

    const [data, setData] = React.useState({
        "role_name": "",
        "dashboard": 0,
        "tax": 0,
        "id": 0,
        "membership": 0,
        "reports": 0,
        "notification": 0,
        "users": 0,
        "category": 0,
        "product": 0,
        "area": 0,
        "store": 0,
        "orders": 0,
        "payout": 0,
        "rewards": 0,
        "delivery_boy": 0,
        "pages": 0,
        "feedback": 0,
        "callback": 0,
        "settings": 0,
        "reason": 0,
    });

    const enableArr = [
        "dashboard",
        "tax",
        "id",
        "membership",
        "reports",
        "notification",
        "users",
        "category",
        "product",
        "area",
        "store",
        "orders",
        "payout",
        "rewards",
        "delivery boy",
        "pages",
        "feedback",
        "callback",
        "settings",
        "cancelling reasons"
    ];


    const submit = () => {
        let body = {
            method: "add",
            data: data,
        };
        let formData = new FormData();
        formData.append("payload", JSON.stringify(body));
        const res = sendRequest(apis.base + apis.roles, formData, ((res) => callback(res)), ((err) => console.log(err)));
    };

    const callback = (res) => {
        if (res.status === 200) {
            window.location.href = routers.roles;
        }
    };

    const setEnable = (key) => {
        setData({...data, [key]: (data[key] === 1 ? 0 : 1)})
    };


    return (
        <div className="card">
            <div className="card-header card-header-primary">
                <h4 className="card-title">Add Role</h4>
            </div>
            <div className="card-body">
                <div className="form-group">
                    <label>Role Name</label>
                    <input type="text" value={data.role_name}
                           onChange={(event) => setData({...data, role_name: event.target.value})}
                           className="form-control"/>
                </div>
                <br/>
                <div>
                    <h4 className="text-center">Enable Sections</h4>
                    <hr/>
                    <div className="row">
                        {enableArr.map((key, index) => (
                            <div key={index} className="col-md-3">
                                <FormControlLabel
                                    control={<Checkbox onChange={(event) => setEnable(Object.keys(data)[index + 1])}
                                                       checked={data[Object.keys(data)[index + 1]] === 1}/>}
                                    label={key.charAt(0).toUpperCase() + key.slice(1)}/>
                            </div>
                        ))}
                    </div>

                </div>
                <br/>
                <button onClick={submit} className="btn btn-primary pull-center mr-1">
                    Submit
                </button>
                <Link to={routers.roles} className="btn btn-danger pull-center">
                    Close
                </Link>
            </div>
        </div>

    )
}

