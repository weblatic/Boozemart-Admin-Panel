import React from "react";
import {sendRequest} from "../../api/sendRequest";
import {apis} from "../../configuration/configurationApi";
import Modal from "@mui/material/Modal/Modal";
import FormControl from "@mui/material/FormControl/FormControl";
import RadioGroup from "@mui/material/RadioGroup/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel/FormControlLabel";
import Radio from "@mui/material/Radio/Radio";

export default function SMS(props) {


    const [modalState, setModalState] = React.useState(false);

    const [data, setData] = React.useState({
        by_id: 0,
        msg91: 0,
        status: 0,
        twilio: 0,
        status_sms_old: "",
        status_sms: ""
    });

    React.useEffect(() => {
        let body = {
            method: "get",
        };
        let formData = new FormData();
        formData.append("payload", JSON.stringify(body));
        const res = sendRequest(apis.base + apis.sms, formData, ((res) => callback(res)), ((err) => console.log(err)));
    }, []);

    const callback = (res) => {
        let result = res.data[0];
        result.status_sms_old = result.status === 0 ? "OTP/SMS OFF" : (result.msg91 === 1 ? "Msg91 is On" : "Twilio is On");
        result.status_sms = result.status === 0 ? "OTP/SMS OFF" : (result.msg91 === 1 ? "Msg91 is On" : "Twilio is On");
        setData(result)
    };

    const select = (value) => {
        setData({...data, status_sms: value});
    };

    const submit = () => {
        let body = {
            method: "update",
            data: {
                status: (data.status_sms === "OTP/SMS OFF") ? 0 : 1,
                msg91: (data.status_sms === "Msg91 is On") ? 1 : 0,
                twilio: (data.status_sms === "Twilio is On") ? 1 : 0
            },
            where: ["by_id=" + data.by_id]
        };
        let formData = new FormData();
        formData.append("payload", JSON.stringify(body));
        const res = sendRequest(apis.base + apis.sms, formData, ((res) => callbackSubmit(res)), ((err) => console.log(err)));
    };

    const url = window.location.href;

    const callbackSubmit = (res) => {
        if (res.status === 200) {
            setModalState(false);
            setData({...data, status_sms_old: data.status_sms})
        }
    };

    return (
        <div className="card">
            <div className="card-header card-header-primary">
                <h4 className="card-title">SMS from</h4>
            </div>
            <div className="card-body">
                <div className="row">
                    <div className="col-6">
                        <div>SMS Gateway</div>
                        <div><i
                            className={data.status_sms_old !== "OTP/SMS OFF" ? "fa fa-circle text-green" : "fa fa-circle text-grey"}/>
                            {data.status_sms_old}
                        </div>
                    </div>
                    <div className="col-6">
                        <button onClick={() => setModalState(true)} type="submit"
                                className="btn btn-outline-default pull-center">
                            Edit
                        </button>
                    </div>
                </div>
            </div>
            <Modal
                open={modalState}
                onClose={() => setModalState(false)}
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4>Edit SMS Gateway</h4>
                        </div>
                        <div className="modal-body text-center">
                            <FormControl>
                                <RadioGroup value={data.status_sms} row
                                            aria-labelledby="demo-row-radio-buttons-group-label"
                                            name="row-radio-buttons-group"
                                            onChange={(event) => select(event.target.value)}
                                >
                                    <FormControlLabel value={"Msg91 is On"} control={<Radio/>} label="Msg91"/>
                                    <FormControlLabel value={"Twilio is On"} control={<Radio/>} label="Twilio"/>
                                    <FormControlLabel value={"OTP/SMS OFF"} control={<Radio/>} label="Off"/>
                                </RadioGroup>
                            </FormControl>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-primary" onClick={submit}>Submit</button>
                            <button className="btn btn-danger" onClick={() => (setModalState(false))}>Close</button>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}