import React from "react";
import {useLocation} from "react-router";

import CustomTable from "../../components/CustomTable";
import {sendRequest} from "../../api/sendRequest";
import {apis} from "../../configuration/configurationApi";

export default function DayWiseOrders(props) {
    const item = useLocation().state;

    const [date, setDate] = React.useState({
        dateFrom: "",
        dateTo: "",
    });
    const [payment, setPayment] = React.useState("");

    const [data, setData] = React.useState([]);
    React.useEffect(() => {
        /*   let body = {
               method: "get",
               where: ['orders.delivery_date<"' + new Date(new Date().getTime()).toISOString().slice(0, 10) + '"'],
           };
           let formData = new FormData();formData.append("payload", JSON.stringify(body));const res = sendRequest(apis.base+apis.ordersTodayAll, formData, ((res) => callback(res)), ((err) => console.log(err)));*/
    }, []);

    const callback = (res) => {
        setData(res.data)
    };
    const paymentMethod = ["COD", "Online", "Wallet"];

    const showOrders = () => {
        let where = [];
        if (date.dateFrom !== "") {
            where.push('orders.delivery_date>="' + new Date(date.dateFrom).toISOString().slice(0, 10) + '"');
        }
        if (date.dateTo !== "") {
            where.push('orders.delivery_date<="' + new Date(date.dateTo).toISOString().slice(0, 10) + '"');
        }
        let body = {
            method: "get",
            where: where,
        };
        let formData = new FormData();
        formData.append("payload", JSON.stringify(body));
        const res = sendRequest(apis.base + apis.ordersTodayAll, formData, ((res) => callback(res)), ((err) => console.log(err)));
    };

    return (
        <div className="card">
            <div className="card-header card-header-primary">
                <h1 className="card-title"><b>Order List (Today)</b></h1>
            </div>
            <div className="card-header card-header-secondary">
                <div className="forms-sample">

                    <div className="row">
                        <div className="col-md-3">
                            <label>Payment Method</label>
                        </div>
                        <div className="col-md-3">
                            <label>From Date</label>
                        </div>
                        <div className="col-md-3">
                            <label>To Date</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <select type="date" onChange={(event) => setPayment(event.target.value)}
                                    className="form-control">
                                <option value="">All</option>
                                {paymentMethod.map((item, index) => (
                                    <option key={index} value={item}>{item}</option>
                                ))}
                            </select>
                        </div>
                        <div className="col-md-3">
                            <input type="date" onChange={(event) => setDate({...date, dateFrom: event.target.value})}
                                   className="form-control"/>
                        </div>
                        <div className="col-md-3">
                            <input type="date" onChange={(event) => setDate({...date, dateTo: event.target.value})}
                                   className="form-control"/>
                        </div>
                        <div className="col-md-3">
                            <button onClick={showOrders} className="btn btn-primary">Show Orders
                            </button>
                        </div>

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
                        "delivery boy": "boy_name",
                        "cart products": "total_products_mrp",
                        "payment": "payment_method",
                        "order status": "order_status",
                        "store": "store_name",
                    }}
                    typeEx={{}}
                    style={{
                        "order status": {
                            "completed": "green-bold",
                            "pending": "orange-bold",
                            "cancelled": "red-bold",
                            "payment Failed": "red-bold",
                            "confirmed": "purple-bold",
                            "out_for_delivery": "orange-bold",
                        },
                    }}
                    image={["image"]}
                    button={{}}
                    buttonEx={{}}
                    searchField={false}
                    data={data.filter(item => item.payment_method.includes(payment))} api={apis.ordersTodayAll}
                    primaryKey={"id"}/>
            </div>
        </div>
    )
}