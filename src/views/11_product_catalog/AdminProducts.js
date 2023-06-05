import React from "react";
import {useLocation} from "react-router";
import {example} from "../../data/examData";

import {Link} from "react-router-dom";
import CustomTable from "../../components/CustomTable";
import {buttonType} from "../../configuration/configurationUI";
import Add from "../../components/buttons/Add";
import {sendRequest} from "../../api/sendRequest";
import {apis} from "../../configuration/configurationApi";

export default function AdminProducts(props) {
    const item = useLocation().state;


    const [data, setData] = React.useState([]);
    React.useEffect(() => {
        let body = {
            method: "get",
        };
        let formData = new FormData();
        formData.append("payload", JSON.stringify(body));
        const res = sendRequest(apis.base + apis.productList, formData, ((res) => callback(res)));
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
                        <h1 className="card-title"><b>Product List</b></h1>
                    </div>
                    <div className="col-md-6">
                        <Add/>
                    </div>
                </div>
            </div>

            <div className="container"><br/>
                <CustomTable
                    type={{
                        "product name": 'product_name',
                        "product id": "product_id",
                        "category": "title",
                        "type": "type",
                    }}
                    typeEx={{"Product Image": 'image'}}
                    style={{}}
                    searchField={true}
                    image={["product image"]}
                    button={{}}
                    buttonEx={{
                        "Hide": [buttonType.showOrHide],
                        "Actions": [buttonType.edit, buttonType.delete, buttonType.varient]
                    }}
                    data={data} api={apis.productList} primaryKey={"product_id"}/>
            </div>
        </div>
    )
}