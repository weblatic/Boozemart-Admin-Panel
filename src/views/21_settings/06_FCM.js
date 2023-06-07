import React from "react";
import {sendRequest} from "../../api/sendRequest";
import {apis} from "../../configuration/configurationApi";

export default function FCM(props) {

    const [data, setData] = React.useState({
        driver_server_key: "",
        id: 0,
        sender_id: "",
        server_key: "",
        store_server_key: ""
    });

    React.useEffect(() => {
        let body = {
            method: "get",
        };
        let formData = new FormData();
        formData.append("payload", JSON.stringify(body));
        const res = sendRequest(apis.base + apis.fcm, formData, ((res) => callback(res)), ((err) => console.log(err)));
    }, []);

    const callback = (res) => {
        setData(res.data[0])
    };

    const submit = () => {
        let body = {
            method: "update",
            data: data,
            where: ["id=" + data.id]
        };
        let formData = new FormData();
        formData.append("payload", JSON.stringify(body));
        const res = sendRequest(apis.base + apis.fcm, formData, ((res) => callbackSubmit(res)), ((err) => console.log(err)));
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
                <h4 className="card-title">FCM Server Key</h4>
            </div>
            <div className="card-body">

                <div className="form-group">
                    <label>User App FCM Server Key</label>
                    <input type="text" value={data.server_key}
                           onChange={(event) => setData({...data, server_key: event.target.value})}
                           className="form-control"/>
                </div>

                <div className="form-group">
                    <label>Vendor/Store App FCM Server Key</label>
                    <input type="text" value={data.store_server_key}
                           onChange={(event) => setData({...data, store_server_key: event.target.value})}
                           className="form-control"/>
                </div>
                <div className="form-group">
                    <label>Driver App FCM Server Key</label>
                    <input type="text" value={data.driver_server_key}
                           onChange={(event) => setData({...data, driver_server_key: event.target.value})}
                           className="form-control"/>
                </div>
                <button onClick={submit} type="submit"
                        className="btn btn-primary pull-center">
                    Update
                </button>

            </div>
        </div>

    )
}