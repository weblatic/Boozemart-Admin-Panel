import React from "react";
import {useLocation} from "react-router";

import CustomTable from "../../components/CustomTable";
import {sendRequest} from "../../api/sendRequest";
import {apis} from "../../configuration/configurationApi";

export default function Reports(props) {
    const item = useLocation().state;

    const [dataTopDeliveryBoy, setDataTopDeliveryBoy] = React.useState([]);
    const [dataDeliveryBoy, setDataDeliveryBoy] = React.useState([]);
    const [dataTopStore, setDataTopStore] = React.useState([]);
    const [dataStore, setDataStore] = React.useState([]);
    const [dataTopUser, setDataTopUser] = React.useState([]);
    const [dataUser, setDataUser] = React.useState([]);
    React.useEffect(() => {
        let body = {
            method: "get",
        };
        let formData = new FormData();
        formData.append("payload", JSON.stringify(body));
        const res1 = sendRequest(apis.base + apis.reportTopDeliveryBoy, formData, ((res) => setDataTopDeliveryBoy(res.data)));
        const res2 = sendRequest(apis.base + apis.reportDeliveryBoy, formData, ((res) => setDataDeliveryBoy(res.data)));
        const res3 = sendRequest(apis.base + apis.reportTopStore, formData, ((res) => setDataTopStore(res.data)));
        const res4 = sendRequest(apis.base + apis.reportStore, formData, ((res) => setDataStore(res.data)));
        const res5 = sendRequest(apis.base + apis.reportTopUser, formData, ((res) => setDataTopUser(res.data)));
        const res6 = sendRequest(apis.base + apis.reportUser, formData, ((res) => setDataUser(res.data)));
    }, []);

    const url = window.location.href;

    return (
        <div>

            <div>
                <hr/>
                <br/>
                <br/>
                <div className="separator"><h4 style={{color: "grey"}}>Delivery Boy Reports</h4></div>
                <hr/>
                <div className="row">
                    <div className="col-6">
                        <div className="card">
                            <div className="card-header card-header-primary">
                                <h4 className="card-title">Top Delivery Boys</h4>
                            </div>

                            <div className="container"><br/>
                                <CustomTable
                                    type={{
                                        "DELIVERY BOY": 'boy_name',
                                        "LAST 30 DAYS ORDERS": "status",
                                    }}
                                    typeEx={{}}
                                    style={{}}
                                    image={["image"]}
                                    button={{}}
                                    buttonEx={{}}
                                    searchField={false}
                                    data={dataTopDeliveryBoy} api={apis.reportTopDeliveryBoy} primaryKey={"id"}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="card">
                            <div className="card-header card-header-primary">
                                <h4 className="card-title">Delivery Boy Orders Reports</h4>
                            </div>

                            <div className="container"><br/>
                                <CustomTable
                                    type={{
                                        "DELIVERY BOY": 'name',
                                        "LAST 30 DAYS ORDERS": "category",
                                    }}
                                    typeEx={{}}
                                    style={{
                                        "free delivery": {"Chess": "green-bold", "soccer": "text-orange"},
                                    }}
                                    image={["image"]}
                                    button={{}}
                                    buttonEx={{}}
                                    searchField={true}
                                    data={dataDeliveryBoy} api={apis.reportDeliveryBoy} primaryKey={"id"}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <hr/>
                <br/>
                <br/>
                <div className="separator"><h4 style={{color: "grey"}}>Store Reports</h4></div>
                <hr/>
                <div className="row">
                    <div className="col-6">
                        <div className="card">
                            <div className="card-header card-header-primary">
                                <h4 className="card-title">Top Stores</h4>
                            </div>

                            <div className="container"><br/>
                                <CustomTable
                                    type={{
                                        "STORE": 'store_name',
                                        "LAST 30 DAYS ORDERS": "orders",
                                    }}
                                    typeEx={{}}
                                    style={{
                                        "free delivery": {"Chess": "green-bold", "soccer": "text-orange"},
                                    }}
                                    image={["image"]}
                                    button={{}}
                                    buttonEx={{}}
                                    searchField={false}
                                    data={dataTopStore} api={apis.reportTopStore} primaryKey={"id"}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="card">
                            <div className="card-header card-header-primary">
                                <h4 className="card-title">Store Orders Reports</h4>
                            </div>

                            <div className="container"><br/>
                                <CustomTable
                                    type={{
                                        "STORE": 'store_name',
                                        "LAST 30 DAYS ORDERS": "orders",
                                    }}
                                    typeEx={{}}
                                    style={{
                                        "free delivery": {"Chess": "green-bold", "soccer": "text-orange"},
                                    }}
                                    image={["image"]}
                                    button={{}}
                                    buttonEx={{}}
                                    searchField={true}
                                    data={dataStore} api={apis.reportStore} primaryKey={"id"}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <hr/>
                <br/>
                <br/>
                <div className="separator"><h4 style={{color: "grey"}}>Users Reports</h4></div>
                <hr/>
                <div className="row">
                    <div className="col-6">
                        <div className="card">
                            <div className="card-header card-header-primary">
                                <h4 className="card-title">Top 10 Users Reports</h4>
                            </div>

                            <div className="container"><br/>
                                <CustomTable
                                    type={{
                                        "USER": 'name',
                                        "CURRENT MONTH": "category",
                                    }}
                                    typeEx={{}}
                                    style={{
                                        "free delivery": {"Chess": "green-bold", "soccer": "text-orange"},
                                    }}
                                    image={["image"]}
                                    button={{}}
                                    buttonEx={{}}
                                    searchField={false}
                                    data={dataTopUser} api={apis.reportTopUser} primaryKey={"id"}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="card">
                            <div className="card-header card-header-primary">
                                <h4 className="card-title">Worst 10 Users Reports</h4>
                            </div>

                            <div className="container"><br/>
                                <CustomTable
                                    type={{
                                        "PRODUCT NAME": 'name',
                                        "QUALITY": "category",
                                    }}
                                    typeEx={{}}
                                    style={{
                                        "free delivery": {"Chess": "green-bold", "soccer": "text-orange"},
                                    }}
                                    image={["image"]}
                                    button={{}}
                                    buttonEx={{}}
                                    searchField={true}
                                    data={dataUser} api={apis.reportUser} primaryKey={"id"}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}