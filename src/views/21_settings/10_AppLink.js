import React from "react";
import {sendRequest} from "../../api/sendRequest";
import {apis} from "../../configuration/configurationApi";

export default function AppLink(props) {

    const [data, setData] = React.useState({
        id: 0,
        android_app_link: "",
        ios_app_link: ""
    });

    React.useEffect(() => {
        let body = {
            method: "get",
        };
        let formData = new FormData();
        formData.append("payload", JSON.stringify(body));
        const res = sendRequest(apis.base + apis.appLink, formData, ((res) => callback(res)), ((err) => console.log(err)));
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
        const res = sendRequest(apis.base + apis.appLink, formData, ((res) => callbackSubmit(res)), ((err) => console.log(err)));
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
                <h4 className="card-title">App Link</h4>
            </div>
            <div className="card-body">
                <div className="form-group">
                    <label>Android App Link</label>
                    <textarea value={data.android_app_link}
                              onChange={(event) => setData({...data, android_app_link: event.target.value})}
                              className="form-control"/>
                </div>
                <div className="form-group">
                    <label>IOS App Link</label>
                    <textarea value={data.ios_app_link}
                              onChange={(event) => setData({...data, ios_app_link: event.target.value})}
                              className="form-control"/>
                </div>
                <button onClick={submit} type="submit" className="btn btn-primary pull-center">
                    Update
                </button>

            </div>
        </div>

    )
}