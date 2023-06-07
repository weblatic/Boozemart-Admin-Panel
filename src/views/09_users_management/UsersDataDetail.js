import React from "react";
import {useLocation} from "react-router";

import CustomTable from "../../components/CustomTable";
import {buttonType} from "../../configuration/configurationUI";
import CustomImage from "../../components/CustomImage";
import {sendRequest} from "../../api/sendRequest";
import {apis} from "../../configuration/configurationApi";


export default function UsersDataDetail(props) {
    const item = useLocation().state;


    const [data, setData] = React.useState([]);
    React.useEffect(() => {
        let body = {
            method: "get",
            where: ['orders.user_id=' + item.id]
        };
        let formData = new FormData();
        formData.append("payload", JSON.stringify(body));
        const res = sendRequest(apis.base + apis.userDetail, formData, ((res) => callback(res)), ((err) => console.log(err)));
    }, []);

    const callback = (res) => {
        setData(res.data)
    };
    const url = window.location.href;


    const showUser = () => {
        console.log(data.date);
    };


    return (

        <div className="row">
            <div className="col-6">
                <div className="card">
                    <div className="card-header card-header-primary">
                        <h4 className="card-title">Order History</h4>
                    </div>
                    <div className="container"><br/>
                        <CustomTable
                            type={{
                                "cart id": 'id',
                                "cart price": 'price',
                                "cart status": 'name',
                            }}
                            typeEx={{}}
                            style={{
                                "free delivery": {"Chess": "green-bold", "soccer": "text-orange"},
                            }}
                            image={[]}
                            button={{
                                "detail": [buttonType.detail]
                            }}
                            buttonEx={{}}
                            searchField={false}
                            data={data} api={apis.userList} primaryKey={"id"}
                            detailTitle={"Order Detail"}
                            detailType={{
                                "Order ID": "id",
                                "Customer Name": "category",
                                "Contact": "price",
                                "Delivery Date": "description",
                                "Time Slot": "s",
                                "Delivery Address Home": "a",
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
            </div>
            <div className="col-6">
                <div className="card">
                    <div className="card-header card-header-primary">
                        <h4 className="card-title ">User</h4>
                    </div>

                    <div className="container">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-2">
                                    <CustomImage src={""}/>
                                </div>
                                <div className="col-md-10">
                                    <br/>
                                    <h3>{item.name}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-header card-header-primary">
                        <h2 className="card-title ">Contact Information</h2>
                    </div>
                    <div className="card-body">
                        <h3>{item.price}</h3>
                        <h3>{item.description}</h3>
                        <hr/>
                        <h6>Delivery Address</h6>
                        <div className="container card">
                            <b>Home :</b>
                            <div>
                                {item.description}
                            </div>
                        </div>
                        <br/>
                        <div className="container card">
                            <b>Office :</b>
                            <div>
                                {item.description}
                            </div>
                        </div>
                        <br/>
                        <div className="container card">
                            <b>Others :</b>
                            <div>
                                {item.description}
                            </div>
                        </div>
                        <br/>
                    </div>
                </div>
            </div>
        </div>
    )
}