import React from "react";
import {useLocation} from "react-router";
import {example} from "../../data/examData";

import {Link} from "react-router-dom";
import CustomTable from "../../components/CustomTable";
import {buttonType} from "../../configuration/configurationUI";
import Add from "../../components/buttons/Add";
import {sendRequest} from "../../api/sendRequest";
import {apis} from "../../configuration/configurationApi";

export default function Store(props) {
    const item = useLocation().state;


    const [data, setData] = React.useState([]);
    React.useEffect(() => {
        let body = {
            method: "get",
        };
        let formData = new FormData();
        formData.append("payload", JSON.stringify(body));
        const res = sendRequest(apis.base + apis.adminStoreList, formData, ((res) => callback(res)), ((err) => console.log(err)));
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
                        <h1 className="card-title"><b>Store List</b></h1>
                    </div>
                    <div className="col-md-6">
                        <Add/>
                    </div>
                </div>
            </div>

            <div className="container"><br/>
                <CustomTable
                    type={{
                        "profile pic": 'store_phote',
                        "store name": "store_name",
                        "city": "city",
                        "mobile": "phone_number",
                        "email": "email",
                    }}
                    typeEx={{"CATEGORY": 'category'}}
                    style={{
                        "free delivery": {"Chess": "green-bold", "soccer": "text-orange"},
                    }}
                    searchField={true}
                    image={["profile pic"]}
                    button={{
                        "orders": [buttonType.order],
                    }}
                    buttonEx={{
                        "Details": [buttonType.detail],
                        "Actions": [buttonType.edit, buttonType.delete, buttonType.unlock, buttonType.secret],
                    }}
                    data={data} api={apis.adminStoreList} primaryKey={"id"}

                    detailTitle={"My Store Offline Profile ( Active )"}
                    detailType={{
                        "Store Name": "store_name",
                        "Owner Name": "employee_name",
                        "Contact": "phone_number",
                        "Email": "email",
                        "Open time": "store_opening_time",
                        "Close time": "store_closing_time",
                        "Address": "a",
                        "Orders Per Time Slot": "orders",
                        "Admin Share": "admin_share",
                        "ID": "id_type",
                        "ID Number": "id_number",
                        "ID Photo": "id_photo",
                    }}
                    detailImage={["ID photo"]}

                />
            </div>
        </div>
    )
}