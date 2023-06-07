import React from "react";
import {sendRequest} from "../../api/sendRequest";
import {apis} from "../../configuration/configurationApi";

export default function Currency(props) {

    const currencies = {
        "USD": "U.S. Dollar",
        "INR": "Indian Rupee(For Razorpay)",
        "AUD": "Australian Dollar",
        "BRL": "Brazilian Real",
        "CAD": "Canadian Dollar",
        "CZK": "Czech Koruna",
        "DKK": "Danish Krone",
        "EUR": "Euro",
        "HKD": "Hong Kong Dollar",
        "HUF": "Hungarian Forint",
        "ILS": "Israeli New Sheqel",
        "JPY": "Japanese Yen",
        "MYR": "Malaysian Ringgit",
        "MXN": "Mexican Peso",
        "NOK": "Norwegian Krone",
        "NZD": "New Zealand Dollar",
        "PHP": "Philippine Peso",
        "PLN": "Polish Zloty",
        "GBP": "Pound Sterling",
        "SGD": "Singapore Dollar",
        "SEK": "Swedish Krona",
        "CHF": "Swiss Franc",
        "TWD": "Taiwan New Dollar",
        "THB": "Thai Baht",
        "TRY": "Turkish Lira",
        "GHS": "Ghana(For Paystack)",
        "NGN": "Nigeria(For Paystack)",
        "ZAR": "South Africa(For Paystack)",
    };

    const [data, setData] = React.useState({
        currency_name: "",
        currency_sign: "",
        id: 0
    });

    React.useEffect(() => {
        let body = {
            method: "get",
        };
        let formData = new FormData();
        formData.append("payload", JSON.stringify(body));
        const res = sendRequest(apis.base + apis.currency, formData, ((res) => callback(res)), ((err) => console.log(err)));
    }, []);

    const callback = (res) => {
        setData(res.data[0])
    };

    const submit = () => {
        let body = {
            method: "update",
            data: data,
            where: ["id=" + data.id]
        };
        let formData = new FormData();
        formData.append("payload", JSON.stringify(body));
        const res = sendRequest(apis.base + apis.currency, formData, ((res) => callbackSubmit(res)), ((err) => console.log(err)));
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
                <h4 className="card-title">Currency</h4>
            </div>
            <div className="card-body">
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Currency Name</label>
                            <select value={data.currency_name}
                                    onChange={(event) => setData({
                                        ...data,
                                        currency_name: event.target.value
                                    })}
                                    className="form-control">
                                {Object.keys(currencies).map((val, key) => (
                                    <option key={key} value={val}>{currencies[val]}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Currency Sign</label>
                            <input type="text" value={data.currency_sign}
                                   onChange={(event) => setData({...data, currency_sign: event.target.value})}
                                   className="form-control"/>
                        </div>
                    </div>
                </div>

                <button onClick={submit} type="submit" className="btn btn-primary pull-center">
                    Submit
                </button>

            </div>
        </div>
    )
}