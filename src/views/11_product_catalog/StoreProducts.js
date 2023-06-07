import React from "react";
import {useLocation} from "react-router";

import CustomTable from "../../components/CustomTable";
import {sendRequest} from "../../api/sendRequest";
import {apis} from "../../configuration/configurationApi";

export default function StoreProducts(props) {
    const item = useLocation().state;


    const [data, setData] = React.useState([]);
    React.useEffect(() => {
        let body = {
            method: "get",
        };
        let formData = new FormData();
        formData.append("payload", JSON.stringify(body));
        const res = sendRequest(apis.base + apis.storeProductsList, formData, ((res) => callback(res)), ((err) => console.log(err)));
    }, []);

    const callback = (res) => {
        let result = res.data;
        for (let i = 0; i < result.length; i++) {
            result[i].approved = result[i].approved === 1 ? "Approved" : "Rejected"
        }
        setData(result)
    };
    const url = window.location.href;


    return (
        <div className="card">
            <div className="card-header card-header-primary">
                <h1 className="card-title"><b>Total Item Sales Report (Last 30 Days)</b></h1>
            </div>

            <div className="container"><br/>
                <CustomTable
                    type={{
                        "image": 'image',
                        "product name": "product_name",
                        "price": "cost_price",
                        "mrp": "base_mrp",
                        "store": "store_name",
                        "approve/reject": "approved",
                    }}
                    typeEx={{}}
                    style={{
                        "approve/reject": {"Approved": "green-bold", "Reject": "text-orange"},
                    }}
                    image={["image"]}
                    button={{}}
                    buttonEx={{}}
                    searchField={true}
                    data={data} api={apis.storeProductsList} primaryKey={"id"}/>
            </div>
        </div>
    )
}