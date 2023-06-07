import React from "react";
import {useLocation} from "react-router";
import {example} from "../../data/examData";

import CustomTable from "../../components/CustomTable";
import {buttonType} from "../../configuration/configurationUI";
import {sendRequest} from "../../api/sendRequest";
import {apis} from "../../configuration/configurationApi";

export default function DeliveryBoyCallbackRequests(props) {
    const item = useLocation().state;


    const [data, setData] = React.useState([]);
    React.useEffect(() => {
        let body = {
            method: "get",
        };
        let formData = new FormData();
        formData.append("payload", JSON.stringify(body));
        const res = sendRequest(apis.base + apis.driverCallbackRequests, formData, ((res) => callback(res)), ((err) => console.log(err)));
    }, []);

    const callback = (res) => {
        setData(res.data)
    };
    const url = window.location.href;

    return (
        <div className="card">
            <div className="card-header card-header-primary">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="card-title"><b>Delivery Boy Callback Requests</b></h1>
                    </div>
                </div>
            </div>

            <div className="container"><br/>
                <CustomTable
                    type={{
                        "id": 'dboy_id',
                        "delivery boy name": 'driver_name',
                        "delivery boy phone": 'driver_phone',
                        "address by": 'added_by',
                    }}
                    typeEx={{}}
                    style={{}}
                    image={[]}
                    button={{
                        "actions": [buttonType.process],
                    }}
                    buttonEx={{}}
                    searchField={true}
                    data={data} api={apis.driverCallbackRequests} primaryKey={"callback_req_id"}/>

            </div>
        </div>

    )
}