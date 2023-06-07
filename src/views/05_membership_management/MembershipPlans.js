import React from "react";
import {useLocation} from "react-router";

import CustomTable from "../../components/CustomTable";
import {buttonType} from "../../configuration/configurationUI";
import Add from "../../components/buttons/Add";
import {sendRequest} from "../../api/sendRequest";
import {apis} from "../../configuration/configurationApi";

export default function MembershipPlans(props) {
    const item = useLocation().state;


    const [data, setData] = React.useState([]);
    React.useEffect(() => {
        let body = {
            method: "get",
        };
        let formData = new FormData();
        formData.append("payload", JSON.stringify(body));
        const res = sendRequest(apis.base + apis.membershipList, formData, ((res) => callback(res)), ((err) => console.log(err)));
    }, []);

    const callback = (res) => {
        let result = res.data;
        for (let i = 0; i < result.length; i++) {
            result[i].free_delivery_status = result[i]["free_delivery"] === 1 ? "YES" : "NO";
            result[i].instant_delivery_status = result[i]["instant_delivery"] === 1 ? "YES" : "NO";
            result[i].reward_status = result[i]["reward"] + "X";
        }
        setData(res.data)
    };
    const url = window.location.href;


    return (
        <div className="card">
            <div className="card-header card-header-primary">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="card-title"><b>Membership List</b></h1>
                    </div>
                    <div className="col-md-6">
                        <Add/>
                    </div>
                </div>
            </div>

            <div className="container"><br/>
                <CustomTable
                    type={{
                        "image": 'image',
                        "plan name": "plan_name",
                        "plan days": "days",
                        "plan price": "price",
                        "free delivery": "free_delivery_status",
                        "instant delivery": "instant_delivery_status",
                        "reward": "reward_status"
                    }}
                    typeEx={{"Description": 'plan_description'}}
                    style={{
                        "free delivery": {"YES": "green-bold", "NO": "orange-bold"},
                        "instant delivery": {"YES": "green-bold", "NO": "orange-bold"},
                        "reward": "text-bold",
                    }}
                    searchField={true}
                    image={["image"]}
                    button={{}}
                    buttonEx={{
                        "ACTION": [buttonType.edit, buttonType.delete],
                    }}
                    data={data} api={apis.membershipList} primaryKey={"plan_id"}/>
            </div>
        </div>
    )
}