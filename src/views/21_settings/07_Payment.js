import React from "react";
import {sendRequest} from "../../api/sendRequest";
import {apis} from "../../configuration/configurationApi";

export default function Payment(props) {

    const [data, setData] = React.useState({
        paypal_active: "",
        paypal_email: "",
        paypal_client_id: "",
        paypal_secret_key: "",

        stripe_active: "",
        stripe_secret_key: "",
        stripe_publishable_key: "",
        stripe_merchant_id: "",

        razorpay_active: "",
        razorpay_key_id: "",
        razorpay_secret_key: "",

        paystack_active: "",
        paystack_public_key: "",
        paystack_secret_key: "",

        payment_gateway: "",
    });

    React.useEffect(() => {
        let body = {
            method: "get",
        };
        let formData = new FormData();
        formData.append("payload", JSON.stringify(body));
        const res = sendRequest(apis.base + apis.settings, formData, ((res) => callback(res)), ((err) => console.log(err)));
    }, []);

    const callback = (res) => {
        let result = res.data;
        let s = {};
        for (let i = 0; i < result.length; i++) {
            s[result[i].name] = result[i].value;
            if (result[i].value === "Yes") {
                s.payment_gateway = result[i].name;
            }
        }
        setData(s);
    };

    const submitMapGateway = () => {
        setData({
            ...data,
            stripe_active: data.payment_gateway === "stripe_active" ? "Yes" : "No",
            paystack_active: data.payment_gateway === "paystack_active" ? "Yes" : "No",
            razorpay_active: data.payment_gateway === "razorpay_active" ? "Yes" : "No"
        });
        let body = {
            method: "update",
            data: {
                value: data.payment_gateway === "stripe_active" ? "Yes" : "No"
            },
            where: ["name='stripe_active'"]
        };
        let body1 = {
            method: "update",
            data: {
                value: data.payment_gateway === "paystack_active" ? "Yes" : "No"
            },
            where: ["name='paystack_active'"]
        };
        let body2 = {
            method: "update",
            data: {
                value: data.payment_gateway === "razorpay_active" ? "Yes" : "No"
            },
            where: ["name='razorpay_active'"]
        };
        let formData = new FormData();
        formData.append("payload", JSON.stringify(body));
        const res = sendRequest(apis.base + apis.settings, formData, ((res) => (res)), ((err) => console.log(err)));
        let formData1 = new FormData();
        formData1.append("payload", JSON.stringify(body1));
        const res1 = sendRequest(apis.base + apis.settings, formData1, ((res) => (res)), ((err) => console.log(err)));
        let formData2 = new FormData();
        formData2.append("payload", JSON.stringify(body2));
        const res2 = sendRequest(apis.base + apis.settings, formData2, ((res) => (res)), ((err) => console.log(err)));
    };

    const submitStripeEtc = () => {
        let body = {
            method: "update",
            data: data,
            where: ["id=" + data.id]
        };
        let formData = new FormData();
        formData.append("payload", JSON.stringify(body));
        const res = sendRequest(apis.base + apis.settings, formData, ((res) => callbackSubmit(res)), ((err) => console.log(err)));
    };

    const url = window.location.href;

    const callbackSubmit = (res) => {
        if (res.status === 200) {
            // window.location.href = url;
        }
    };

    return (
        <div className="card">
            <div className="card-header card-header-primary">
                <h4 className="card-title">Payment Gateways</h4>
            </div>
            <div className="card-body">
                <h5>Choose One Payment Gateways</h5>
                <div className="border border-black p-3">
                    <div className="form-group">
                        <label>Choose One</label>
                        <select value={data.payment_gateway}
                                onChange={(event) => setData({...data, payment_gateway: event.target.value})}
                                className="form-control">
                            <option value={"razorpay_active"}>Razorpay</option>
                            <option value={"stripe_active"}>Stripe</option>
                            <option value={"paystack_active"}>Paystack</option>
                        </select>
                        <br/>
                        <button onClick={submitMapGateway} type="submit"
                                className="btn btn-primary pull-center">
                            Update
                        </button>
                    </div>
                </div>
                <br/>
                <h5>Stripe</h5>
                <div className="form-group border border-black ">
                    <div className="row p-3">
                        <div className="col-md-3">
                            <div className="form-group">
                                <label>Choose One</label>
                                <select value={data.stripe_active}
                                        onChange={(event) => setData({...data, stripe: event.target.value})}
                                        disabled={true}
                                        className="form-control">
                                    <option value={"Yes"}>Yes</option>
                                    <option value={"No"}>No</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="form-group">
                                <label>Secret Key</label>
                                <input type="text" value={data.stripe_secret_key}
                                       onChange={(event) => setData({
                                           ...data,
                                           stripe_secret_key: event.target.value
                                       })}
                                       className="form-control"/>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="form-group">
                                <label>Publishable Key</label>
                                <input type="text" value={data.stripe_publishable_key}
                                       onChange={(event) => setData({
                                           ...data,
                                           stripe_publishable_key: event.target.value
                                       })}
                                       className="form-control"/>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="form-group">
                                <label>Merchant_id</label>
                                <input type="text" value={data.stripe_merchant_id}
                                       onChange={(event) => setData({
                                           ...data,
                                           stripe_merchant_id: event.target.value
                                       })}
                                       className="form-control"/>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
                <h5>Razorpay</h5>
                <div className="border border-black p-3">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="form-group">
                                <label>Razorpay Active</label>
                                <select value={data.razorpay_active}
                                        onChange={(event) => setData({...data, razorpay_active: event.target.value})}
                                        disabled={true}
                                        className="form-control">
                                    <option value={"Yes"}>Yes</option>
                                    <option value={"No"}>No</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <label>Secret Key</label>
                                <input type="text" value={data.razorpay_secret_key}
                                       onChange={(event) => setData({...data, razorpay_secret_key: event.target.value})}
                                       className="form-control"/>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <label>Publishable Key</label>
                                <input type="text" value={data.razorpay_key_id}
                                       onChange={(event) => setData({
                                           ...data,
                                           razorpay_key_id: event.target.value
                                       })}
                                       className="form-control"/>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
                <h5>Paystck</h5>
                <div className="border border-black p-3">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="form-group">
                                <label>Paystack Active</label>
                                <select value={data.paystack_active}
                                        onChange={(event) => setData({...data, paystack_active: event.target.value})}
                                        disabled={true}
                                        className="form-control">
                                    <option value={"Yes"}>Yes</option>
                                    <option value={"No"}>No</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <label>Secret Key</label>
                                <input type="text" value={data.paystack_secret_key}
                                       onChange={(event) => setData({
                                           ...data,
                                           paystackPublicKey: event.target.value
                                       })}
                                       className="form-control"/>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <label>Publishable Key</label>
                                <input type="text" value={data.paystack_public_key}
                                       onChange={(event) => setData({
                                           ...data,
                                           paystack_public_key: event.target.value
                                       })}
                                       className="form-control"/>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
                <button onClick={submitStripeEtc} type="submit" className="btn btn-primary pull-center">
                    Update
                </button>

            </div>
        </div>
    )
}