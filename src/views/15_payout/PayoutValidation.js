import React from "react";
import {useLocation} from "react-router";
import {sendRequest} from "../../api/sendRequest";
import {apis} from "../../configuration/configurationApi";

export default function PayoutValidation(props) {
    const item = useLocation().state;
    const url = window.location.href;

    const [data, setData] = React.useState({
        val_id: 0,
        min_amt: 0,
        min_days: 0,
    });
    React.useEffect(() => {
        let body = {
            method: "get",
        };
        let formData = new FormData();
        formData.append("payload", JSON.stringify(body));
        const res = sendRequest(apis.base + apis.prv, formData, ((res) => callback(res)), ((err) => console.log(err)));
    }, []);
    const callback = (res) => {
        setData(res.data[0])
    };
    const submit = () => {
        let body = {
            method: "update",
            where: ["val_id=" + data.val_id],
            data: data
        };
        let formData = new FormData();
        formData.append("payload", JSON.stringify(body));
        const res = sendRequest(apis.base + apis.prv, formData, ((res) => callback1(res)), ((err) => console.log(err)));
    };

    const callback1 = (res) => {
        if (res.status === 200) {
            window.location.href = url;
        }
    };

    return (
        <div className="card">
            <div className="card-header card-header-primary">
                <h4 className="card-title">Payout Request Validation</h4>
            </div>
            <div className="card-body">
                <div className="row">
                    <div className="col-6">
                        <div className="form-group">
                            <label>Minimum Amount</label>
                            <input type="number" value={data.min_amt}
                                   onChange={(event) => setData({...data, min_amt: event.target.value})}
                                   className="form-control"/>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="form-group">
                            <label>Minimum Days</label>
                            <input type="number" value={data.min_days}
                                   onChange={(event) => setData({...data, min_days: event.target.value})}
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