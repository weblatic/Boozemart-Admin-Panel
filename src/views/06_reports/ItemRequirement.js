import React from "react";
import {useLocation} from "react-router";

import CustomTable from "../../components/CustomTable";
import {sendRequest} from "../../api/sendRequest";
import {apis} from "../../configuration/configurationApi";
import {buttonType} from "../../configuration/configurationUI";

export default function ItemRequirement(props) {
    const item = useLocation().state;

    const [data, setData] = React.useState([]);
    React.useEffect(() => {
        let body = {
            method: "get",
        };
        let formData = new FormData();
        formData.append("payload", JSON.stringify(body));
        const res = sendRequest(apis.base + apis.reportItemSaleByStore, formData, ((res) => callback(res)), ((err) => console.log(err)));
    }, []);

    const callback = (res) => {
        let result = res.data;
        setData(result)
    };
    const url = window.location.href;


    return (
        <div className="card">
            <div className="card-header card-header-primary">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="card-title"><b>Store List</b></h1>
                    </div>
                </div>
            </div>

            <div className="container"><br/>
                <CustomTable
                    type={{
                        "store name": 'store_name',
                        "city": "city",
                        "mobile": "phone_number",
                        "email": "email",
                    }}
                    typeEx={{}}
                    style={{
                        "item sale report": {"chess": "green-bold", "soccer": "text-orange"},
                    }}
                    searchField={true}
                    image={["image"]}
                    button={{
                        "item sale report": [buttonType.layer],
                    }}
                    buttonEx={{}}
                    data={data} api={apis.reportItemSaleByStore} primaryKey={"id"}/>
            </div>
        </div>
    )
}