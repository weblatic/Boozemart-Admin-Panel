import React from "react";
import {useLocation} from "react-router";
import {Link} from "react-router-dom";

import {routers} from "../../configuration/configurationUI";
import {sendRequest} from "../../api/sendRequest";
import {apis} from "../../configuration/configurationApi";

export default function RewardEdit(props) {
    const item = useLocation().state;

    const [data, setData] = React.useState({
        reward_id: item.reward_id,
        min_cart_value: item.min_cart_value,
        reward_point: item.reward_point,

    });

    const submit = () => {
        let body = {
            method: "update",
            data: data,
            where: ["reward_id=" + item.reward_id]
        };
        let formData = new FormData();
        formData.append("payload", JSON.stringify(body));
        const res = sendRequest(apis.base + apis.reward, formData, ((res) => callbackSubmit(res)), ((err) => console.log(err)));
    };
    const callbackSubmit = (res) => {
        if (res.status === 200) {
            window.location.href = routers.reward
        }
    };


    return (
        <div className="card">
            <div className="card-header card-header-primary">
                <h4 className="card-title">Edit Rewards Points</h4>
            </div>
            <div className="card-body">
                <div className="row form-group">
                    <div className="col-md-6">
                        <label>Cart Value</label>
                        <input type="number" value={data.min_cart_value}
                               onChange={(event) => setData({...data, min_cart_value: event.target.value})}
                               className="form-control"/>
                    </div>
                    <div className="col-md-6">
                        <label>Reward Points</label>
                        <input type="number" value={data.reward_point}
                               onChange={(event) => setData({...data, reward_point: event.target.value})}
                               className="form-control"/>
                    </div>
                </div>
                <br/>
                <button onClick={submit} className="btn btn-primary pull-center mr-1">
                    Submit
                </button>
                <Link to={routers.reward} className="btn btn-danger pull-center">
                    Close
                </Link>
            </div>
        </div>

    )
}