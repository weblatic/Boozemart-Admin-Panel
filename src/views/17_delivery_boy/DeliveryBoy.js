import React from "react";
import {useLocation} from "react-router";

import CustomTable from "../../components/CustomTable";
import {buttonType} from "../../configuration/configurationUI";
import Add from "../../components/buttons/Add";
import {sendRequest} from "../../api/sendRequest";
import {apis} from "../../configuration/configurationApi";

export default function DeliveryBoy(props) {

    const [data, setData] = React.useState([]);
    React.useEffect(() => {
        let body = {
            method: "get",
        };
        let formData = new FormData();
        formData.append("payload", JSON.stringify(body));
        const res = sendRequest(apis.base + apis.dBoyList, formData, ((res) => callback(res)));
    }, []);

    const callback = (res) => {
        let result = res.data;
        for (let i = 0; i < result.length; i++) {
            result[i].status_duty = result[i].status === 1 ? "On duty" : "Off duty"
        }
        setData(result)
    };
    const url = window.location.href;


    return (
        <div className="card">
            <div className="card-header card-header-primary">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="card-title"><b>Delivery Boy List</b></h1>
                    </div>
                    <div className="col-md-6">
                        <Add/>
                    </div>
                </div>
            </div>

            <div className="container"><br/>
                <CustomTable
                    type={{
                        "boy name": 'boy_name',
                        "boy phone": 'boy_phone',
                        "boy password": 'password',
                        "status": 'status_duty',
                    }}
                    typeEx={{}}
                    style={{"status": {"On duty": "green-bold", "Off duty": "orange-bold"}}}
                    image={[]}
                    button={{
                        "orders": [buttonType.order],
                        "details": [buttonType.detail],
                        "actions": [buttonType.edit, buttonType.delete],
                    }}
                    buttonEx={{}}
                    searchField={true}
                    data={data} api={apis.dBoyList} primaryKey={"dboy_id"}

                    detailTitle={"Profile(Online)"}
                    detailType={{
                        "Current Location": "boy_loc",
                        "Driver Name": "id_name",
                        "Contact": "boy_phone",
                        "City": "boy_city",
                        "Address": "boy_loc",
                        "ID": "id_name",
                        "ID Number": "id_no",
                        "ID Photo": "id_photo",
                    }}
                    detailImage={["ID photo"]}
                />

            </div>
        </div>

    )
}