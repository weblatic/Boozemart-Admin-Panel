import React from "react";
import {useLocation} from "react-router";
import {example} from "../../data/examData";
import {sendRequest} from "../../api/sendRequest";
import {apis} from "../../configuration/configurationApi";

export default function AboutUs(props) {


    const [data, setData] = React.useState({
        about_id: 0,
        description: "",
        title: "About Us"
    });

    React.useEffect(() => {
        let body = {
            method: "get",
        };
        let formData = new FormData();
        formData.append("payload", JSON.stringify(body));
        const res = sendRequest(apis.base + apis.aboutUs, formData, ((res) => callback(res)));
    }, []);

    const callback = (res) => {
        setData(res.data[0]);
    };

    const url = window.location.href;

    const submit = () => {
        let body = {
            method: "update",
            where: ["about_id=" + data.about_id],
            data: data
        };
        let formData = new FormData();
        formData.append("payload", JSON.stringify(body));
        const res = sendRequest(apis.base + apis.aboutUs, formData, ((res) => callback1(res)));
    };

    const callback1 = (res) => {
        if (res.status === 200) {
            window.location.href = url;
        }
    };

    return (
        <div className="card">
            <div className="card-header card-header-primary">
                <h4 className="card-title">About Us</h4>
            </div>
            <div className="card-body">
                <div className="form-group">
                        <textarea rows={10} value={data.description}
                                  onChange={(event) => setData({...data, description: event.target.value})}
                                  className="width-full p-3"/>
                </div>
                <button onClick={submit} type="submit" className="btn btn-primary pull-center">
                    Submit
                </button>

            </div>
        </div>

    )
}