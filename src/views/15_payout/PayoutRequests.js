import React from "react";
import {useLocation} from "react-router";
import {example} from "../../data/examData";

import CustomTable from "../../components/CustomTable";
import {buttonType} from "../../configuration/configurationUI";
import {sendRequest} from "../../api/sendRequest";
import {apis} from "../../configuration/configurationApi";

export default function PayoutRequests(props) {
    const item = useLocation().state;


    const [data, setData] = React.useState([]);
    React.useEffect(() => {
        let body = {
            method: "get",
        };
        let formData = new FormData();
        formData.append("payload", JSON.stringify(body));
        const res = sendRequest(apis.base + apis.payoutReq, formData, ((res) => callback(res)), ((err) => console.log(err)));
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
                        <h1 className="card-title"><b>Store Payout Request</b></h1>
                    </div>

                </div>
            </div>

            <div className="container"><br/>
                <CustomTable
                    type={{
                        "store": 'store_name',
                        "address": 'address',
                        "total revenue": 'description',
                        "bank account details": 'id',
                        "already paid": 'paid',
                        "pending balance": '',
                        "amount": 'payout_amt',
                    }}
                    typeEx={{}}
                    style={{
                        "item sale report": {"chess": "green-bold", "soccer": "text-orange"},
                    }}
                    image={[]}
                    button={{
                        "action": [buttonType.edit, buttonType.delete],
                    }}
                    buttonEx={{}}
                    searchField={true}
                    data={data} api={apis.payoutReq} primaryKey={"id"}/>

            </div>
        </div>

    )
}