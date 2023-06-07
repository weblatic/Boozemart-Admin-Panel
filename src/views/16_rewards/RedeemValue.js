import React from "react";
import {useLocation} from "react-router";
import {sendRequest} from "../../api/sendRequest";
import {apis} from "../../configuration/configurationApi";

export default function RedeemValue(props) {
    const item = useLocation().state;

    const url = window.location.href;
    const [data, setData] = React.useState({
        reedem_id: 0,
        reward_point: 0,
        value: 0
    });
    React.useEffect(() => {
        let body = {
            method: "get",
        };
        let formData = new FormData();
        formData.append("payload", JSON.stringify(body));
        const res = sendRequest(apis.base + apis.redeem, formData, ((res) => callback(res)), ((err) => console.log(err)));
    }, []);

    const callback = (res) => {
        setData(res.data[0])
    };

    const submit = () => {
        let body = {
            method: "update",
            where: ["reedem_id=" + data.reedem_id],
            data: data,
        };
        let formData = new FormData();
        formData.append("payload", JSON.stringify(body));
        const res = sendRequest(apis.base + apis.redeem, formData, ((res) => callback1(res)), ((err) => console.log(err)));
    };

    const callback1 = (res) => {
        if (res.status === 200) {
            window.location.href = url;
        }
    };

    return (
        <div className="card">
            <div className="card-header card-header-primary">
                <h4 className="card-title">Redeem Values</h4>
            </div>
            <div className="card-body">
                <div className="row">
                    <div className="col-6">
                        <div className="form-group">
                            <label>Reward Points</label>
                            <input type="number" value={data.reward_point}
                                   onChange={(event) => setData({...data, reward_point: event.target.value})}
                                   className="form-control"/>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="form-group">
                            <label>Redeem Values</label>
                            <input type="number" value={data.value}
                                   onChange={(event) => setData({...data, value: event.target.value})}
                                   className="form-control"/>
                        </div>
                    </div>
                </div>
                <br/>
                <button onClick={submit} type="submit" className="btn btn-primary pull-center">
                    Submit
                </button>

            </div>
        </div>

    )
}