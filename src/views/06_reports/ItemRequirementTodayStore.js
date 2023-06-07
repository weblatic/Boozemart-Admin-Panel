import React from "react";
import {useLocation} from "react-router";

import CustomTable from "../../components/CustomTable";
import {sendRequest} from "../../api/sendRequest";
import {apis} from "../../configuration/configurationApi";

export default function ItemRequirementTodayStore(props) {
    const item = useLocation().state;


    const [date, setDate] = React.useState("");
    const [data, setData] = React.useState([]);

    const callback = (res) => {
        setData(res.data)
    };
    React.useEffect(() => {
        let now = new Date().toISOString().slice(0, 10);
        setDate(now);
        let body = {
            method: "get",
            where: [
                'orders.store_id=' + item.id,
                'orders.delivery_date="' + now + '"'
            ],
        };
        let formData = new FormData();
        formData.append("payload", JSON.stringify(body));
        const res = sendRequest(apis.base + apis.reportItemSaleByTodayStore, formData, ((res) => callback(res)), ((err) => console.log(err)));
    }, []);

    const showItemList = () => {
        let body = {
            method: "get",
            where: [
                'orders.store_id=' + item.id,
                'orders.delivery_date="' + date + '"'
            ],
        };
        let formData = new FormData();
        formData.append("payload", JSON.stringify(body));
        const res = sendRequest(apis.base + apis.reportItemSaleByTodayStore, formData, ((res) => callback(res)), ((err) => console.log(err)));
    };


    return (
        <div className="card">
            <div className="card-header card-header-primary">
                <h1 className="card-title"><b>Required Item List {date}</b></h1>
            </div>
            <div className="card-header card-header-secondary">
                <div className="forms-sample">

                    <div className="row">
                        <div className="col-md-4">
                            <label>Date</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <input type="date" value={date}
                                   onChange={(event) => setDate(new Date(event.target.value).toISOString().slice(0, 10))}
                                   className="form-control"/>
                        </div>
                        <div className="col-md-4">
                            <button onClick={showItemList} className="btn btn-primary">Show Item List
                            </button>
                        </div>

                    </div>
                </div>
            </div>

            <div className="container"><br/>
                <CustomTable
                    type={{
                        "product name": 'product_name',
                        "quantity": "quantity",
                    }}
                    typeEx={{}}
                    style={{}}
                    image={["image"]}
                    button={{}}
                    buttonEx={{}}
                    searchField={true}
                    data={data} api={apis.userList} primaryKey={"store_order_id"}
                />
            </div>
        </div>
    )
}