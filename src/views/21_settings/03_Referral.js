import React from "react";
import {sendRequest} from "../../api/sendRequest";
import {apis} from "../../configuration/configurationApi";

export default function Referral(props) {

    const [data, setData] = React.useState({
        id: 0,
        name: "",
        min: 0,
        max: 0,
    });

    React.useEffect(() => {
        let body = {
            method: "get",
        };
        let formData = new FormData();
        formData.append("payload", JSON.stringify(body));
        const res = sendRequest(apis.base + apis.referral, formData, ((res) => callback(res)), ((err) => console.log(err)));
    }, []);

    const callback = (res) => {
        let result = res.data[0];
        result.min = JSON.parse(result.points).min;
        result.max = JSON.parse(result.points).max;
        setData(result);
    };

    const submit = () => {
        let body = {
            method: "update",
            data: {
                name: data.name,
                points: JSON.stringify({
                    min: data.min,
                    max: data.max
                })
            },
            where: ["id=" + data.id]
        };
        let formData = new FormData();
        formData.append("payload", JSON.stringify(body));
        const res = sendRequest(apis.base + apis.referral, formData, ((res) => callbackSubmit(res)), ((err) => console.log(err)));
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
                <h4 className="card-title">Referral Points</h4>
            </div>
            <div className="card-body">
                <div className="row">
                    <div className="col-12">
                        <div className="form-group">
                            <label>Referral For</label>
                            <input type="text" value={data.name} disabled={true}
                                   onChange={(event) => setData({...data, name: event.target.value})}
                                   className="form-control"/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <div className="form-group">
                            <label>Min Amount</label>
                            <input type="number" value={data.min}
                                   onChange={(event) => setData({...data, min: event.target.value})}
                                   className="form-control"/>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="form-group">
                            <label>Max Amount</label>
                            <input type="number" value={data.max}
                                   onChange={(event) => setData({...data, max: event.target.value})}
                                   className="form-control"/>
                        </div>
                    </div>
                </div>
                <button onClick={submit} type="submit"
                        className="btn btn-primary pull-center">
                    Submit
                </button>
            </div>
        </div>

    )
}