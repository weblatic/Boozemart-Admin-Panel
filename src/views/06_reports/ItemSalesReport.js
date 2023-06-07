import React from "react";

import CustomTable from "../../components/CustomTable";
import {sendRequest} from "../../api/sendRequest";
import {apis} from "../../configuration/configurationApi";

export default function ItemSalesReport(props) {

    const [data, setData] = React.useState([]);
    React.useEffect(() => {
        let body = {
            method: "get",
        };
        let formData = new FormData();
        formData.append("payload", JSON.stringify(body));
        const res = sendRequest(apis.base + apis.reportTotalItemSalesLast30Days, formData, ((res) => callback(res)), ((err) => console.log(err)));
    }, []);

    const callback = (res) => {
        let result = res.data;
        let body = {
            method: "get",
        };
        let formData = new FormData();
        formData.append("payload", JSON.stringify(body));
        const res1 = sendRequest(apis.base + apis.reportTotalItemSalesLast30DaysDet, formData, ((res) => callback1(res, result)));
    };
    const callback1 = (res, result) => {
        let r = res.data;
        for (let i = 0; i < result.length; i++) {
            for (let j = 0; j < r.length; j++) {
                if (r[j].product_id === result[i].product_id) {
                    result[i].stock = r[j].quantity + "" + r[j].unit + "*" + r[j].count * r[j].sumqty;
                    result[i].stock += " (" + (r[j].quantity * r[j].count * r[j].sumqty) + "" + r[j].unit + ") ";
                }
            }
        }
        setData(result);
    };

    return (
        <div className="card">
            <div className="card-header card-header-primary">
                <h1 className="card-title"><b>Total Item Sales Report (Last 30 Days)</b></h1>
            </div>

            <div className="container"><br/>
                <CustomTable
                    type={{
                        "product name": 'product_name',
                        "stock": "stock",
                    }}
                    typeEx={{}}
                    style={{}}
                    image={["image"]}
                    button={{}}
                    buttonEx={{}}
                    searchField={true}
                    data={data} api={apis.reportTotalItemSalesLast30Days} primaryKey={"id"}/>
            </div>
        </div>
    )
}
