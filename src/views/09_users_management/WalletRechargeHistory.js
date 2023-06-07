import React from "react";
import {useLocation} from "react-router";

import CustomTable from "../../components/CustomTable";
import {buttonType} from "../../configuration/configurationUI";
import {sendRequest} from "../../api/sendRequest";
import {apis} from "../../configuration/configurationApi";

export default function WalletRechargeHistory(props) {
    const item = useLocation().state;


    const [data, setData] = React.useState([]);
    React.useEffect(() => {
        let body = {
            method: "get",
        };
        let formData = new FormData();
        formData.append("payload", JSON.stringify(body));
        const res = sendRequest(apis.base + apis.usersWalletRechargeHistory, formData, ((res) => callback(res)), ((err) => console.log(err)));
    }, []);

    const callback = (res) => {
        setData(res.data)
    };

    return (
        <div className="card">
            <div className="card-header card-header-primary">
                <h1 className="card-title"><b>Wallet Recharge History</b></h1>
            </div>

            <div className="container"><br/>
                <CustomTable
                    type={{
                        "user name": 'name',
                        "user phone": "user_phone",
                        "recharge amount": "amount",
                        "recharge date": "date_of_recharge",
                        "status": "status",
                        "medium": "payment_gateway",
                        "current amount": "rewards",
                    }}
                    typeEx={{}}
                    style={{
                        "status": {
                            1: "fa fa-check-circle text-green",
                            0: "fa fa-times-circle text-red",
                        },
                    }}
                    image={["image"]}
                    button={{}}
                    buttonEx={{
                        "Recharge": [buttonType.recharge],
                    }}
                    searchField={true}
                    data={data} api={apis.usersWalletRechargeHistory} primaryKey={"id"}/>
            </div>
        </div>
    )
}
