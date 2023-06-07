import React from "react";
import {sendRequest} from "../../api/sendRequest";
import {apis} from "../../configuration/configurationApi";

export default function ImagesSpace(props) {

    const [data, setData] = React.useState({
        aws: 0,
        digital_ocean: 0,
        same_server: 0,
        space_id: 0,
        status: 0
    });

    React.useEffect(() => {
        let body = {
            method: "get",
        };
        let formData = new FormData();
        formData.append("payload", JSON.stringify(body));
        const res = sendRequest(apis.base + apis.imageSpace, formData, ((res) => callback(res)), ((err) => console.log(err)), ((err) => console.log(err)));
    }, []);

    const callback = (res) => {
        let result = res.data[0];
        result.status = result.digital_ocean === 1 ? 0 : (result.aws === 1 ? 1 : 2);
        setData(result)
    };

    const select = (value) => {
        value = Number(value);
        switch (value) {
            case 0:
                setData({...data, digital_ocean: 1, aws: 0, same_server: 0, status: value});
                break;
            case 1:
                setData({...data, digital_ocean: 0, aws: 1, same_server: 0, status: value});
                break;
            case 2:
                setData({...data, digital_ocean: 0, aws: 0, same_server: 1, status: value});
                break;
        }
    };

    const submit = () => {
        let body = {
            method: "update",
            data: {
                aws: data.aws,
                digital_ocean: data.digital_ocean,
                same_server: data.same_server,
            },
            where: ["space_id=" + data.space_id]
        };
        let formData = new FormData();
        formData.append("payload", JSON.stringify(body));
        const res = sendRequest(apis.base + apis.imageSpace, formData, ((res) => callbackSubmit(res)), ((err) => console.log(err)));
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
                <h4 className="card-title">Images Space</h4>
            </div>
            <div className="card-body">
                <select value={data.status}
                        onChange={(event) => select(event.target.value)}
                        className="form-control">
                    <option value={0}>Digital Ocean</option>
                    <option value={1}>AWS</option>
                    <option value={2}>Same Server</option>
                </select>
                <br/>
                <button onClick={submit} type="submit"
                        className="btn btn-primary pull-center">
                    Update
                </button>

            </div>
        </div>

    )
}