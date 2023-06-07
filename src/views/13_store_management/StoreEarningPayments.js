import React from "react";
import {useLocation} from "react-router";

import CustomTable from "../../components/CustomTable";
import {sendRequest} from "../../api/sendRequest";
import {apis} from "../../configuration/configurationApi";

export default function StoreEarningPayments(props) {
    const item = useLocation().state;


    const [data, setData] = React.useState([]);
    React.useEffect(() => {
        let body = {
            method: "get",
        };
        let formData = new FormData();
        formData.append("payload", JSON.stringify(body));
        const res = sendRequest(apis.base + apis.storesFinance, formData, ((res) => callback(res)), ((err) => console.log(err)));
    }, []);

    const callback = (res) => {
        let result = res.data;
        for (let i = 0; i < result.length; i++) {
            result[i].paid = result[i].paid === null ? 0 : result[i].paid;
        }
        setData(result)
    };
    const url = window.location.href;

    return (
        <div className="card">
            <div className="card-header card-header-primary">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="card-title"><b>Store Earnings</b></h1>
                    </div>
                </div>
            </div>

            <div className="container"><br/>
                <CustomTable
                    type={{
                        "store": 'store_name',
                    }}
                    typeEx={{
                        "Address": 'address',
                        "Total Revenue": 'sumprice',
                        "Already Paid": 'paid',
                        "Pending Balance": 'sumprice',
                    }}
                    style={{}}
                    searchField={true}
                    image={["image"]}
                    button={{}}
                    buttonEx={{}}
                    data={data} api={apis.storesFinance} primaryKey={"id"}/>
            </div>
        </div>
    )
}
