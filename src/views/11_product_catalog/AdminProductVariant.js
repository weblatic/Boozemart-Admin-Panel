import React from "react";
import {useLocation, useParams} from "react-router";

import CustomTable from "../../components/CustomTable";
import {buttonType} from "../../configuration/configurationUI";
import Add from "../../components/buttons/Add";
import {sendRequest} from "../../api/sendRequest";
import {apis} from "../../configuration/configurationApi";

export default function AdminProductVariant(props) {

    const productId = useParams().id;
    const item = useLocation().state;

    const [data, setData] = React.useState([]);
    React.useEffect(() => {
        let body = {
            method: "get",
            where: [`added_by=${item.added_by}`, `product_id=${item.product_id}`]
        };
        let formData = new FormData();
        formData.append("payload", JSON.stringify(body));
        const res = sendRequest(apis.base + apis.productVariant, formData, ((res) => callback(res)), ((err) => console.log(err)));
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
                        <h1 className="card-title"><b>Variant List</b></h1>
                    </div>
                    <div className="col-md-6">
                        <Add/>
                    </div>
                </div>
            </div>

            <div className="container"><br/>
                <CustomTable
                    type={{
                        "quantity": 'quantity',
                        "unit": "unit",
                        "description": "description",
                    }}
                    typeEx={{}}
                    style={{}}
                    searchField={true}
                    image={[]}
                    button={{
                        "Actions": [buttonType.editForVariant, buttonType.delete]
                    }}
                    buttonEx={{}}
                    data={data} api={apis.productVariant} primaryKey={"id"}
                    oldItem={item}
                />
            </div>
        </div>
    )
}