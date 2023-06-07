import React from "react";
import {useLocation} from "react-router";
import {example} from "../../data/examData";

import {Link} from "react-router-dom";
import CustomTable from "../../components/CustomTable";
import {buttonType} from "../../configuration/configurationUI";
import {sendRequest} from "../../api/sendRequest";
import {apis} from "../../configuration/configurationApi";

export default function DeliveryBoyOrder(props) {
    const item = useLocation().state;

    const [data, setData] = React.useState([]);
    React.useEffect(() => {
        let body = {
            method: "get",
            where: ['orders.dboy_id=' + item.dboy_id]
        };
        let formData = new FormData();
        formData.append("payload", JSON.stringify(body));
        const res = sendRequest(apis.base + apis.dBoyOrder, formData, ((res) => callback(res)), ((err) => console.log(err)));
    }, []);

    const callback = (res) => {
        setData(res.data)
    };
    const url = window.location.href;


    return (
        <div className="card">
            <div className="card-header card-header-primary">
                <h3 className="card-title">Delivery Boy (<b>{item.name}t</b>) Order List</h3>
            </div>

            <div className="container"><br/>
                <CustomTable
                    type={{
                        "cart id": 'cart_id',
                        "cart price": 'total_price',
                        "user": 'name',
                        "delivery date": 'delivery_date',
                    }}
                    typeEx={{}}
                    style={{}}
                    image={[]}
                    button={{
                        "cart products": [buttonType.detail],
                        "assign": [buttonType.assignDelivery]
                    }}
                    buttonEx={{}}
                    searchField={true}
                    data={data} api={apis.dBoyOrder} primaryKey={"id"}

                    detailTitle={"Delivery Boy Assign"}
                    detailType={{
                        "Order ID": "id",
                        "Customer Name": "category",
                        "Contact": "price",
                        "Delivery Date": "description",
                        "Time Slot": "s",
                        "Delivery Address Others": "a",
                        "Product Image": "image",
                        "Product Name": "d",
                        "Qty": "f",
                        "Tax": "f",
                        "Price": "f",
                        "Total Price": "image",
                        "Product Price": "image",
                        "Delivery Charge": "image",
                        "Net Total(Payable)": "image",
                    }}
                    detailImage={["product image"]}
                />

            </div>
        </div>

    )
}