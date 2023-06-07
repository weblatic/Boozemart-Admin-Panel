import React from "react";
import {useLocation} from "react-router";

import {Link} from "react-router-dom";
import {routers} from "../../configuration/configurationUI";
import FormControlLabel from "@mui/material/FormControlLabel/FormControlLabel";
import Checkbox from "@mui/material/Checkbox/Checkbox";
import {sendRequest} from "../../api/sendRequest";
import {apis} from "../../configuration/configurationApi";

export default function RolesEdit(props) {

    const item = useLocation().state;

    const [data, setData] = React.useState(item);

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
            method: "update",
            data: data,
            where:["role_id="+item.role_id]
        };
        let formData = new FormData();
        formData.append("payload", JSON.stringify(body));
        const res = sendRequest(apis.base+apis.roles, formData, ((res) => callback(res)), ((err) => console.log(err)));
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
                <h4 className="card-title">Edit Role</h4>
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
                                    control={<Checkbox onChange={(event) => setEnable(Object.keys(data)[index+2])}
                                                       checked={data[Object.keys(data)[index+2]] === 1}/>}
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

