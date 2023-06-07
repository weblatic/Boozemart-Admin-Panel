import React from "react";

import Radio from "@mui/material/Radio/Radio";
import RadioGroup from "@mui/material/RadioGroup/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel/FormControlLabel";
import FormControl from "@mui/material/FormControl/FormControl";
import {sendRequest} from "../../api/sendRequest";
import {apis} from "../../configuration/configurationApi";

export default function AppNotice(props) {

    const [data, setData] = React.useState({
        app_notice_id: 0,
        notice: "",
        status: 0,
    });

    React.useEffect(() => {
        let body = {
            method: "get",
        };
        let formData = new FormData();
        formData.append("payload", JSON.stringify(body));
        const res = sendRequest(apis.base + apis.appNotice, formData, ((res) => callback(res)), ((err) => console.log(err)));
    }, []);

    const callback = (res) => {
        setData(res.data[0])
    };

    const submit = () => {
        let body = {
            method: "update",
            data: data,
            where: ["app_notice_id=" + data.app_notice_id]
        };
        let formData = new FormData();
        formData.append("payload", JSON.stringify(body));
        const res = sendRequest(apis.base + apis.appNotice, formData, ((res) => callbackSubmit(res)), ((err) => console.log(err)));
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
                <h4 className="card-title">App Notice</h4>
            </div>
            <div className="card-body">
                <FormControl>
                    <RadioGroup value={data.status} row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                                onChange={(event) => setData({...data, status: event.target.value})}
                    >
                        <FormControlLabel value={1} control={<Radio/>} label="Active"/>
                        <FormControlLabel value={0} control={<Radio/>} label="Inactive"/>
                    </RadioGroup>
                </FormControl>

                <div className="form-group">
                    <label>Notice</label>
                    <textarea value={data.notice}
                              onChange={(event) => setData({...data, notice: event.target.value})}
                              className="form-control"/>
                </div>
                <button onClick={submit} type="submit"
                        className="btn btn-primary pull-center">
                    Update Notice
                </button>

            </div>
        </div>

    )
}