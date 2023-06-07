import React from "react";
import {useLocation} from "react-router";
import {example} from "../../data/examData";

import {Link} from "react-router-dom";
import CustomTable from "../../components/CustomTable";
import {sendRequest} from "../../api/sendRequest";
import {apis} from "../../configuration/configurationApi";

export default function StoreApproval(props) {
    const item = useLocation().state;


    const [data, setData] = React.useState([]);
    React.useEffect(() => {
        let body = {
            method: "get",
        };
        let formData = new FormData();
        formData.append("payload", JSON.stringify(body));
        const res = sendRequest(apis.base + apis.storesWaitingForApprovalStoreList, formData, ((res) => callback(res)), ((err) => console.log(err)));
    }, []);

    const callback = (res) => {
        setData(res.data)
    };
    const url = window.location.href;


    return (
        <div className="card">
            <div className="card-header card-header-primary">
                <div className="row">
                    <div className="col-md-9">
                        <h1 className="card-title"><b>Store List(Waiting for approval)</b></h1>
                    </div>
                </div>
            </div>

            <div className="container"><br/>
                <CustomTable
                    type={{
                        "profile pic": 'store_phote',
                        "store name": 'store_name',
                        "city": 'city',
                        "mobile": 'phone_number',
                        "email": 'email',
                        "admin share": 'admin_share',
                        "owner name": 'employee_name',
                        "details": 'address',
                    }}
                    typeEx={{}}
                    style={{}}
                    searchField={false}
                    image={["profile pic"]}
                    button={{}}
                    buttonEx={{}}
                    data={data} api={apis.storesWaitingForApprovalStoreList} primaryKey={"id"}/>
            </div>
        </div>
    )
}