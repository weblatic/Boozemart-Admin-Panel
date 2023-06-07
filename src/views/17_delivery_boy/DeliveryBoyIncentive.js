import React from "react";
import {useLocation} from "react-router";
import {example} from "../../data/examData";

import {Link} from "react-router-dom";
import CustomTable from "../../components/CustomTable";
import {buttonType} from "../../configuration/configurationUI";
import {sendRequest} from "../../api/sendRequest";
import {apis} from "../../configuration/configurationApi";

export default function DeliveryBoyIncentive(props) {
    const item = useLocation().state;


    const [data, setData] = React.useState([]);
    React.useEffect(() => {
        let body = {
            method: "get",
            where: ['delivery_boy.store_id=' + 0]
        };
        let formData = new FormData();
        formData.append("payload", JSON.stringify(body));
        const res = sendRequest(apis.base + apis.dBoyIncentive, formData, ((res) => callback(res)), ((err) => console.log(err)));
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
                        <h1 className="card-title"><b>Incentive Payouts</b></h1>
                    </div>
                </div>
            </div>

            <div className="container"><br/>
                <CustomTable
                    type={{
                        "delivery boy": 'boy_name',
                        "address": 'boy_loc',
                        "bank/upi": 'upi',
                        "total incentive": 'earned_till_now',
                        "paid incentive": 'earned_till_now',
                        "pending incentive": 'remaining',
                        "action": 'description',
                    }}
                    typeEx={{}}
                    style={{
                        "action": {"A boat for one person": "text-green", "soccer": "text-orange"},
                    }}
                    image={[]}
                    button={{}}
                    buttonEx={{}}
                    searchField={true}
                    data={data} api={apis.dBoyIncentive} primaryKey={"id"}/>

            </div>
        </div>

    )
}