import React from "react";
import {useLocation} from "react-router";

import CustomTable from "../../components/CustomTable";
import {buttonType} from "../../configuration/configurationUI";
import {sendRequest} from "../../api/sendRequest";
import {apis} from "../../configuration/configurationApi";

export default function UsersCallbackRequests(props) {
    const item = useLocation().state;


    const [data, setData] = React.useState([]);
    React.useEffect(() => {
        let body = {
            method: "get",
        };
        let formData = new FormData();
        formData.append("payload", JSON.stringify(body));
        const res = sendRequest(apis.base + apis.userCallbackRequests, formData, ((res) => callback(res)), ((err) => console.log(err)));
    }, []);

    const callback = (res) => {
        setData(res.data)
    };
    const url = window.location.href;


    return (
        <div className="card">
            <div className="card-header card-header-primary">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="card-title"><b>Users Callback Requests</b></h1>
                    </div>
                </div>
            </div>

            <div className="container"><br/>
                <CustomTable
                    type={{
                        "id": 'user_id',
                        "user name": 'name',
                        "user phone": 'user_phone',
                        "callback to": 'description',
                    }}
                    typeEx={{}}
                    style={{
                        "actions": {"Chess": "green-bold", "soccer": "text-orange"},
                    }}
                    image={[]}
                    button={{
                        "actions": [buttonType.process],
                    }}
                    buttonEx={{}}
                    searchField={true}
                    data={data} api={apis.userCallbackRequests} primaryKey={"callback_req_id"}/>

            </div>
        </div>

    )
}