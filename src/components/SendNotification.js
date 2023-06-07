import React from "react";
import MultiSelect from "./MultiSelect";
import {sendRequest} from "../api/sendRequest";
import {apis} from "../configuration/configurationApi";
import {routers} from "../configuration/configurationUI";

export default function SendNotification(props) {


    const [data, setData] = React.useState({
        data: props.data,
        dataAdded: [],
        title: "",
        image: "",
        message: "",
        anchorEl: null,
        open: false,
        dataKey: [],
        idName: "",
        name: "",
    });

    React.useEffect(() => {
        switch (props.sendTo) {
            case "Users":
                setData({
                    ...data,
                    dataKey: ["user_id", "noti_title", "noti_message", "image"],
                    idName: "id",
                    name: "name",
                    data: props.data
                });
                break;
            case "Store":
                setData({
                    ...data,
                    dataKey: ["store_id", "not_title", "not_message", "image"],
                    idName: "id",
                    name: "store_name",
                    data: props.data
                });
                break;
            case "Driver":
                setData({
                    ...data,
                    dataKey: ["dboy_id", "not_title", "not_message", "image"],
                    idName: "dboy_id",
                    name: "boy_name",
                    data: props.data
                });
                break;
        }
    }, [props.data]);

    const [image, setImage] = React.useState("");
    const sendNotification = () => {
        let body = {
            method: "addMulti",
            data: []
        };
        for (let i = 0; i < data.dataAdded.length; i++) {
            let id = data.dataAdded[i][data.idName];
            let each = {
                [data.dataKey[0]]: id,
                [data.dataKey[1]]: data.title,
                [data.dataKey[2]]: data.message,
            };
            body.data.push(each);
        }
        let formData = new FormData();
        formData.append("payload", JSON.stringify(body));
        formData.append("image", image);
        const res = sendRequest(apis.base + props.api, formData, ((res) => callback(res)), ((err) => console.log(err)));
    };
    const url = window.location.href;
    const callback = (res) => {
        if (res.status === 200) {
            window.location.href = url;
        }
    };

    const selectData = (checked, eachData) => {
        if (checked) {
            let d = data.dataAdded;
            d.push(eachData);
            setData({...data, dataAdded: d})
        } else {
            setData({...data, dataAdded: data.dataAdded.filter(item => item !== eachData)})
        }
    };

    const selectAll = (checked) => {
        if (checked) {
            let dataAdded = data.dataAdded;
            for (let i = 0; i < data.data.length; i++) {
                if (!dataAdded.includes(data.data[i])) {
                    dataAdded.push(data.data[i]);
                }
            }
            setData({...data, dataAdded: dataAdded});
        } else {
            setData({...data, dataAdded: []});
        }
    };

    return (
        <div className="card-body">
            <div className="row">
                <div className="col-md-12">
                    <MultiSelect
                        title={`Select ${props.sendTo}`}
                        data={data.data}
                        dataSelected={data.dataAdded}
                        selectAll={(checkState) => selectAll(checkState)}
                        selectData={(checkState, item) => selectData(checkState, item)}
                        name={data.name}
                    />
                </div>

                <div className="col-md-12">
                    <div className="form-group">
                        <label>Title</label>
                        <input type="text"
                               onChange={(event) => setData({...data, title: event.target.value})}
                               className="form-control"/>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="form-group">
                        <label>Message</label>
                        <textarea value={data.message}
                                  onChange={(event) => setData({...data, message: event.target.value})}
                                  name="text" className="form-control"/>
                    </div>
                </div>
                <div className="col-md-12">
                    <label className="bmd-label-floating">Image (keywords.1000 KB)</label>
                    <div className="custom-file" style={{zIndex: 0}}>
                        <input type="file" className="custom-file-input" accept="image/*"
                               onChange={(event) => setImage(event.target.files[0])}
                        />
                        <label className="custom-file-label" htmlFor="customFile">Choose file</label>
                    </div>
                </div>
            </div>
            <br/>
            <button
                onClick={sendNotification}
                type="submit"
                className="btn btn-primary pull-center">
                Send Notification to {props.sendTo}
            </button>

        </div>
    )
}