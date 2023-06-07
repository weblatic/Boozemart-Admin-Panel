import React from "react";
import {sendRequest} from "../../api/sendRequest";
import {apis} from "../../configuration/configurationApi";
import Modal from "@mui/material/Modal/Modal";
import FormControl from "@mui/material/FormControl/FormControl";
import RadioGroup from "@mui/material/RadioGroup/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel/FormControlLabel";
import Radio from "@mui/material/Radio/Radio";

export default function Map(props) {


    const [modalState, setModalState] = React.useState(false);

    const [data, setData] = React.useState({
        google_map: 0,
        map_id: 0,
        mapbox: 0,
        status_old: "",
        status: ""
    });

    React.useEffect(() => {
        let body = {
            method: "get",
        };
        let formData = new FormData();
        formData.append("payload", JSON.stringify(body));
        const res = sendRequest(apis.base + apis.mapSetting, formData, ((res) => callback(res)), ((err) => console.log(err)));
    }, []);

    const callback = (res) => {
        let result = res.data[0];
        result.status_old = result.google_map === 1 ? "Google Map" : "Mapbox";
        result.status = result.status_old;
        setData(result)
    };

    const select = (value) => {
        setData({...data, status: value});
    };

    const submit = () => {
        let body = {
            method: "update",
            data: {
                google_map: data.status === "Google Map" ? 1 : 0,
                mapbox: data.status === "Mapbox" ? 1 : 0,
            },
            where: ["map_id=" + data.map_id]
        };
        let formData = new FormData();
        formData.append("payload", JSON.stringify(body));
        const res = sendRequest(apis.base + apis.mapSetting, formData, ((res) => callbackSubmit(res)), ((err) => console.log(err)));
    };

    const url = window.location.href;

    const callbackSubmit = (res) => {
        if (res.status === 200) {
            setModalState(false);
            setData({...data, status_old: data.status})
        }
    };


    return (
        <div className="card">
            <div className="card-body">
                <div className="row">
                    <div className="col-6">
                        <div>Map Gateway</div>
                        <div><i
                            className={"fa fa-circle text-green"}/>
                            {data.status_old}
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
                            <h4>Edit Map Settings</h4>
                        </div>
                        <div className="modal-body text-center">
                            <FormControl>
                                <RadioGroup defaultValue={data.status_old} row
                                            aria-labelledby="demo-row-radio-buttons-group-label"
                                            name="row-radio-buttons-group"
                                            onChange={(event) => select(event.target.value)}
                                >
                                    <FormControlLabel value={"Mapbox"} control={<Radio/>} label="Mapbox"/>
                                    <FormControlLabel value={"Google Map"} control={<Radio/>} label="Google Map"/>
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