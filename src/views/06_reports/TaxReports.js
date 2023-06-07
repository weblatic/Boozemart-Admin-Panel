import React from "react";
import {useLocation} from "react-router";

import CustomTable from "../../components/CustomTable";
import {sendRequest} from "../../api/sendRequest";
import {apis} from "../../configuration/configurationApi";

export default function TaxReports(props) {
    const item = useLocation().state;


    const [data, setData] = React.useState([]);
    const [date, setDate] = React.useState(null);
    React.useEffect(() => {
        let body = {
            method: "get",
            where: [],
        };
        let formData = new FormData();
        formData.append("payload", JSON.stringify(body));
        const res = sendRequest(apis.base + apis.reportTax, formData, ((res) => callback(res)), ((err) => console.log(err)));
    }, []);

    const callback = (res) => {
        setData(res.data)
    };
    const url = window.location.href;

    const showTaxReport = () => {
        if (date !== null) {
            let body = {
                method: "get",
                where: ['delivery_date="' + new Date(date).toISOString().slice(0, 10) + '"',],
            };
            let formData = new FormData();
            formData.append("payload", JSON.stringify(body));
            const res = sendRequest(apis.base + apis.reportTax, formData, ((res) => callback(res)), ((err) => console.log(err)));
        }

    };


    return (
        <div className="card">
            <div className="card-header card-header-primary">
                <h1 className="card-title"><b>Item TAX List <span>{data.date}</span></b></h1>
            </div>
            <div className="card-header card-header-secondary">
                <div className="forms-sample">
                    <label>Date</label>
                    <div className="row">
                        <div className="col-md-4">
                            <input type="date" onChange={(event) => setDate(event.target.value)}
                                   className="form-control"/>
                        </div>
                        <div className="col-md-4">
                            <button onClick={showTaxReport} className="btn btn-primary">Show Tax Report
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
                    style={{
                        "free delivery": {"Chess": "green-bold", "soccer": "text-orange"},
                    }}
                    image={["image"]}
                    button={{}}
                    buttonEx={{}}
                    searchField={true}
                    data={data} api={apis.reportTax} primaryKey={"id"}/>
            </div>
        </div>
    )
}