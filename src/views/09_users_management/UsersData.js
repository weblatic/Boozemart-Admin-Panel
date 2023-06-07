import React from "react";
import {useLocation} from "react-router";

import CustomTable from "../../components/CustomTable";
import {buttonType} from "../../configuration/configurationUI";
import {sendRequest} from "../../api/sendRequest";
import {apis} from "../../configuration/configurationApi";

export default function UsersData(props) {
    const item = useLocation().state;


    const [date, setDate] = React.useState({
        dateFrom: "",
        dateTo: "",
    });
    const [data, setData] = React.useState([]);

    const callback = (res) => {
        setData(res.data)
    };


    const showUser = () => {
        let where = [];
        if (date.dateFrom !== "") {
            where.push('reg_date>="' + new Date(date.dateFrom).toISOString().slice(0, 10) + '"');
        }
        if (date.dateTo !== "") {
            where.push('reg_date<="' + new Date(date.dateTo).toISOString().slice(0, 10) + '"');
        }
        let body = {
            method: "get",
            where: where,
        };
        let formData = new FormData();
        formData.append("payload", JSON.stringify(body));
        const res = sendRequest(apis.base + apis.userList, formData, ((res) => callback(res)), ((err) => console.log(err)));
    };


    return (
        <div className="card">
            <div className="card-header card-header-primary">
                <h1 className="card-title"><b>App Users</b></h1>
            </div>
            <div className="card-header card-header-secondary">
                <div className="forms-sample">

                    <div className="row">
                        <div className="col-md-4">
                            <label>From Date</label>
                        </div>
                        <div className="col-md-4">
                            <label>To Date</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <input type="date" value={date.dateFrom}
                                   onChange={(event) => setDate({...date, dateFrom: event.target.value})}
                                   className="form-control"/>
                        </div>
                        <div className="col-md-4">
                            <input type="date" value={date.dateTo}
                                   onChange={(event) => setDate({...date, dateTo: event.target.value})}
                                   className="form-control"/>
                        </div>
                        <div className="col-md-4">
                            <button onClick={showUser} className="btn btn-primary">Show Users
                            </button>
                        </div>

                    </div>
                </div>
            </div>

            <div className="container"><br/>
                <CustomTable
                    type={{
                        "user name": 'name',
                        "user phone": "user_phone",
                        "user email": "email",
                        "registration date": "reg_date",
                        "is verified": "is_verified",
                    }}
                    typeEx={{}}
                    style={{
                        "is verified": {
                            1: "fa fa-check-circle text-green",
                            0: "fa fa-times-circle text-red",
                        },
                    }}
                    image={["image"]}
                    button={{}}
                    buttonEx={{
                        "Active/Block": [buttonType.icon],
                        "Action": [buttonType.edit, buttonType.delete],
                        "Detail": [buttonType.detail],
                    }}
                    searchField={true}
                    data={data} api={apis.userList} primaryKey={"id"}
                />
            </div>
        </div>
    )
}