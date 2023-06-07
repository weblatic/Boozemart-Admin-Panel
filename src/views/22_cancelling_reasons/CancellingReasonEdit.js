import React from "react";
import {useLocation} from "react-router";
import {Link} from "react-router-dom";

import {buttonType, routers} from "../../configuration/configurationUI";
import {sendRequest} from "../../api/sendRequest";
import {apis} from "../../configuration/configurationApi";

export default function CancellingReasonEdit(props) {
    const item = useLocation().state;


    const [data, setData] = React.useState({
        reason: item.reason
    });
    const submit = () => {
        let body = {
            method: "update",
            data: data,
            where: ["res_id=" + item.res_id]
        };
        let formData = new FormData();
        formData.append("payload", JSON.stringify(body));
        const res = sendRequest(apis.base + apis.cancellingReasonsList, formData, ((res) => callbackSubmit(res)), ((err) => console.log(err)));
    };
    const callbackSubmit = (res) => {
        if (res.status === 200) {
            window.location.href = routers.cancellingReasonsList
        }
    };

    return (
        <div className="card">
            <div className="card-header card-header-primary">
                <h4 className="card-title">Edit Reason</h4>
            </div>
            <div className="card-body">
                <div className="form-group">
                    <label>Reason</label>
                    <input type="text" value={data.reason}
                           onChange={(event) => setData({...data, reason: event.target.value})}
                           className="form-control"/>
                </div>
                <br/>
                <button onClick={submit} className="btn btn-primary pull-center mr-1">
                    Submit
                </button>
                <Link to={routers.cancellingReasonsList} className="btn btn-danger pull-center">
                    Close
                </Link>
            </div>
        </div>

    )
}

