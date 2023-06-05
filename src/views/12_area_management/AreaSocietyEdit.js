import React from "react";
import {useLocation} from "react-router";
import {Link} from "react-router-dom";

import {buttonType, routers} from "../../configuration/configurationUI";
import {sendRequest} from "../../api/sendRequest";
import {apis} from "../../configuration/configurationApi";

export default function RoleEdit(props) {
    const item = useLocation().state;
    const [data, setData] = React.useState({
        city_id: item.city_id,
        society_name: item.society_name,

    });
    const [cities, setCities] = React.useState([]);
    React.useEffect(() => {
        let body = {
            method: "get",
        };
        let formData = new FormData();
        formData.append("payload", JSON.stringify(body));
        const res = sendRequest(apis.base + apis.cityList, formData, ((res) => callback(res)));
    }, []);
    const callback = (res) => {
        setCities(res.data);
    };

    const submit = () => {
        let body = {
            method: "update",
            data: data,
            where: ["society_id=" + item.society_id]
        };
        let formData = new FormData();
        formData.append("payload", JSON.stringify(body));
        const res = sendRequest(apis.base + apis.societyList, formData, ((res) => callbackSubmit(res)));
    };
    const callbackSubmit = (res) => {
        if (res.status === 200) {
            window.location.href = routers.societyList
        }
    };

    return (
        <div className="card">
            <div className="card-header card-header-primary">
                <h4 className="card-title">Edit Area</h4>
            </div>
            <div className="card-body">

                <div className="form-group">
                    <label>City</label>
                    <select value={data.city_id}
                            onChange={(event) => setData({...data, city_id: event.target.value})}
                            className="form-control">
                        {cities.map((val, index) => (
                            <option key={index} value={val.city_id}>{val.city_name}</option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label>Area</label>
                    <input type="text" value={data.society_name}
                           onChange={(event) => setData({...data, society_name: event.target.value})}
                           className="form-control"/>
                </div>


                <br/>
                <button onClick={submit} className="btn btn-primary pull-center mr-1">
                    Submit
                </button>
                <Link to={routers.societyList} className="btn btn-danger pull-center">
                    Close
                </Link>
            </div>
        </div>

    )
}
