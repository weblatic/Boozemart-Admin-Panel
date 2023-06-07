import React from "react";
import {useLocation} from "react-router";
import {example} from "../../data/examData";
import CustomTable from "../../components/CustomTable";
import {Link} from "react-router-dom";

import {buttonType, routers} from "../../configuration/configurationUI";
import FormControl from "@mui/material/FormControl/FormControl";
import RadioGroup from "@mui/material/RadioGroup/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel/FormControlLabel";
import Radio from "@mui/material/Radio/Radio";
import Checkbox from "@mui/material/Checkbox/Checkbox";
import {sendRequest} from "../../api/sendRequest";
import {apis} from "../../configuration/configurationApi";

export default function CityAdd(props) {
    const [data, setData] = React.useState({
        city_name: "",


    });
    const submit = () => {
        let body = {
            method: "add",
            data: data,
        };
        let formData = new FormData();
        formData.append("payload", JSON.stringify(body));
        const res = sendRequest(apis.base + apis.cityList, formData, ((res) => callbackSubmit(res)), ((err) => console.log(err)));
    };
    const callbackSubmit = (res) => {
        if (res.status === 200) {
            window.location.href = routers.cityList
        }
    };


    return (
        <div className="card">
            <div className="card-header card-header-primary">
                <h4 className="card-title">Add City</h4>
            </div>
            <div className="card-body">
                <div className="form-group">
                    <label>City</label>
                    <input type="text" value={data.city_name}
                           onChange={(event) => setData({...data, city_name: event.target.value})}
                           className="form-control"/>
                </div>
                <br/>
                <button onClick={submit} className="btn btn-primary pull-center mr-1">
                    Submit
                </button>
                <Link to={routers.cityList} className="btn btn-danger pull-center">
                    Close
                </Link>
            </div>
        </div>

    )
}

