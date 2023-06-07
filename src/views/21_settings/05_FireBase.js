import React from "react";
import FormControlLabel from "@mui/material/FormControlLabel/FormControlLabel";
import Switch from "@mui/material/Switch/Switch";
import {sendRequest} from "../../api/sendRequest";
import {apis} from "../../configuration/configurationApi";

export default function FireBase(props) {

    const [data, setData] = React.useState({
        f_id: 0,
        status: 0,

    });
    const [data1, setData1] = React.useState({
        iso_code: "",
        iso_id: 0
    });

    React.useEffect(() => {
        let body = {
            method: "get",
        };
        let formData = new FormData();
        formData.append("payload", JSON.stringify(body));
        const res = sendRequest(apis.base + apis.firebase, formData, ((res) => callback(res)), ((err) => console.log(err)));
        const res1 = sendRequest(apis.base + apis.firebaseIso, formData, ((res) => callback1(res)), ((err) => console.log(err)));
    }, []);

    const callback = (res) => {
        setData(res.data[0])
    };

    const callback1 = (res) => {
        setData1(res.data[0])
    };

    const submit = () => {
        let body = {
            method: "update",
            data: data,
            where: ["f_id=" + data.f_id]
        };
        let body1 = {
            method: "update",
            data: data1,
            where: ["iso_id=" + data1.iso_id]
        };
        let formData = new FormData();
        formData.append("payload", JSON.stringify(body));
        const res = sendRequest(apis.base + apis.firebase, formData, ((res) => (res)), ((err) => console.log(err)));
        let formData1 = new FormData();
        formData1.append("payload", JSON.stringify(body1));
        const res1 = sendRequest(apis.base + apis.firebaseIso, formData1, ((res) => callbackSubmit(res)), ((err) => console.log(err)));
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
                <h4 className="card-title">Firebase for OTP</h4>
            </div>
            <div className="card-body">

                <div className="form-group">
                    <div>Firebase for OTP :</div>
                    <div>
                        <FormControlLabel
                            control={
                                <Switch checked={data.status === 1}
                                        onChange={() => setData({
                                            ...data,
                                            status: data.status === 0 ? 1 : 0
                                        })}
                                        name="gilad"/>
                            }
                            label="Toggle this switch element on for Firebase for OTP"
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label>Firebase ISO(used for firebase otp)</label>
                    <input type="text" value={data1.iso_code}
                           onChange={(event) => setData1({...data1, iso_code: event.target.value})}
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