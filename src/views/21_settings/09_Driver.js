import React from "react";
import {sendRequest} from "../../api/sendRequest";
import {apis} from "../../configuration/configurationApi";

export default function Driver(props) {

    const [data, setData] = React.useState({
        incentive: 0,
    });

    React.useEffect(() => {
        let body = {
            method: "get",
        };
        let formData = new FormData();
        formData.append("payload", JSON.stringify(body));
        const res = sendRequest(apis.base + apis.incentive, formData, ((res) => callback(res)), ((err) => console.log(err)));
    }, []);

    const callback = (res) => {
        if (res.data.length > 0) {
            setData(res.data[0])
        }
    };

    const submit = () => {
        let body = {};
        if (data.id === undefined) {
            body = {
                method: "add",
                data: data,
            };
        } else {
            body = {
                method: "update",
                data: data,
                where: ["id=" + data.id]
            };
        }
        let formData = new FormData();
        formData.append("payload", JSON.stringify(body));
        const res = sendRequest(apis.base + apis.incentive, formData, ((res) => callbackSubmit(res)), ((err) => console.log(err)));
    };

    const url = window.location.href;

    const callbackSubmit = (res) => {
        if (res.status === 200) {
            // window.location.href = url;
        }
    };
    return (
        <div className="card">
            <div className="card-header card-header-primary">
                <h4 className="card-title">Driver Incentive(Rs)</h4>
            </div>
            <div className="card-body">


                <div className="form-group">
                    <label>Driver Incentive Per Order</label>
                    <input type="number" value={data.incentive}
                           onChange={(event) => setData({...data, incentive: event.target.value})}
                           className="form-control"/>
                </div>

                <button onClick={submit} type="submit"
                        className="btn btn-primary pull-center">
                    Submit
                </button>

            </div>
        </div>

    )
}