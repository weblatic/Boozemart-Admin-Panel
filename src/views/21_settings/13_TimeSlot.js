import React from "react";
import {sendRequest} from "../../api/sendRequest";
import {apis} from "../../configuration/configurationApi";

export default function TimeSlot(props) {

    const [data, setData] = React.useState({
        close_hour: "",
        open_hour: "",
        time_slot: 0,
        time_slot_id: 0
    });

    React.useEffect(() => {
        let body = {
            method: "get",
        };
        let formData = new FormData();
        formData.append("payload", JSON.stringify(body));
        const res = sendRequest(apis.base + apis.timeSlot, formData, ((res) => callback(res)), ((err) => console.log(err)));
    }, []);

    const callback = (res) => {
        setData(res.data[0])
    };

    const submit = () => {
        let body = {
            method: "update",
            data: data,
            where: ["time_slot_id=" + data.time_slot_id]
        };
        let formData = new FormData();
        formData.append("payload", JSON.stringify(body));
        const res = sendRequest(apis.base + apis.timeSlot, formData, ((res) => callbackSubmit(res)), ((err) => console.log(err)));
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
                <h4 className="card-title">Time Slot</h4>
            </div>
            <div className="card-body">
                <div className="row">
                    <div className="col-md-4">
                        <div className="form-group">
                            <label>Start Time</label>
                            <input type="time" value={data.open_hour}
                                   onChange={(event) => setData({...data, open_hour: event.target.value})}
                                   className="form-control"/>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group">
                            <label>End Time</label>
                            <input type="time" value={data.close_hour}
                                   onChange={(event) => setData({...data, close_hour: event.target.value})}
                                   className="form-control"/>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group">
                            <label>Time Slot Interval</label>
                            <input type="number" value={data.time_slot}
                                   onChange={(event) => setData({...data, time_slot: event.target.value})}
                                   className="form-control"/>
                        </div>
                    </div>
                </div>

                <button onClick={submit} type="submit" className="btn btn-primary pull-center">
                    Submit
                </button>

            </div>
        </div>

    )
}