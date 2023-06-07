import React from "react";
import {useLocation} from "react-router";

import CustomTable from "../../components/CustomTable";
import {buttonType} from "../../configuration/configurationUI";
import {sendRequest} from "../../api/sendRequest";
import {apis} from "../../configuration/configurationApi";

export default function RejectedByStore(props) {
    const item = useLocation().state;


    const [data, setData] = React.useState([]);
    React.useEffect(() => {
        let body = {
            method: "get",
        };
        let formData = new FormData();
        formData.append("payload", JSON.stringify(body));
        const res = sendRequest(apis.base + apis.cancelledOrders, formData, ((res) => callback(res)), ((err) => console.log(err)));
    }, []);

    const callback = (res) => {
        setData(res.data)
    };

    return (
        <div className="card">
            <div className="card-header card-header-primary">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="card-title"><b>Store Cancel Order List</b></h1>
                    </div>

                </div>
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
                    style={{
                        "status": {
                            "completed": "green-bold",
                            "pending": "orange-bold",
                            "cancelled": "red-bold",
                            "payment Failed": "red-bold",
                            "confirmed": "purple-bold",
                            "out_for_delivery": "orange-bold",
                        },
                    }}
                    image={[]}
                    button={{
                        "cart products": [buttonType.detail],
                        "assign": [buttonType.assignStore],
                        "action": [buttonType.reject],
                    }}
                    buttonEx={{}}
                    searchField={true}
                    data={data} api={apis.cancelledOrders} primaryKey={"id"}

                    detailTitle={"Order Detail"}
                    detailType={{
                        "Order ID": "id",
                        "Customer Name": "category",
                        "Contact": "price",
                        "Delivery Date": "description",
                        "Time Slot": "s",
                        "Delivery Address Others": "a",
                        "Product Name": "d",
                        "Qty": "f",
                        "Tax": "f",
                        "Price": "f",
                        "Total Price": "image",
                        "Product Price": "image",
                        "Delivery Charge": "image",
                        "Net Total(Payable)": "image",
                    }}
                    detailImage={[]}
                />

            </div>
        </div>

    )
}