import React from "react";
import {useLocation} from "react-router";
import CustomTable from "../../components/CustomTable";
import {buttonType} from "../../configuration/configurationUI";
import {sendRequest} from "../../api/sendRequest";
import {apis} from "../../configuration/configurationApi";

export default function StoreOrders(props) {
    const item = useLocation().state;


    const [data, setData] = React.useState([]);
    React.useEffect(() => {
        let body = {
            method: "get",
            where: ["orders.store_id=" + item.id]
        };
        let formData = new FormData();
        formData.append("payload", JSON.stringify(body));
        const res = sendRequest(apis.base + apis.adminStoreOrder, formData, ((res) => callback(res)), ((err) => console.log(err)));
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
                        <h1 className="card-title"><b>Store Order List</b></h1>
                    </div>
                </div>
            </div>

            <div className="container"><br/>
                <CustomTable
                    type={{
                        "cart id": 'cart_id',
                        "cart price": "total_price",
                        "user": "name",
                        "delivery date": "delivery_date",
                        "status": "order_status",
                    }}
                    typeEx={{}}
                    style={{
                        "free delivery": {"Chess": "green-bold", "soccer": "text-orange"},
                    }}
                    searchField={true}
                    image={[]}
                    button={{
                        "cart products": [buttonType.detail],
                    }}
                    buttonEx={{}}
                    data={data}

                    detailTitle={"Order Details"}
                    detailType={{
                        "Order ID": "name",
                        "Customer Name": "category",
                        "Contact": "price",
                        "Delivery Date": "description",
                        "Time Slot": "s",
                        "Delivery Address Home": "a",
                        "Product Image": "d",
                        "Product Name": "d",
                        "Qty": "f",
                        "Tax": "f",
                        "Price": "f",
                        "Total Price": "image",
                        "Product Price": "image",
                        "Delivery Charge": "image",
                        "Net Total(Payable)": "image",
                    }}
                    detailImage={["Product Image"]}
                />
            </div>
        </div>
    )
}