import React from "react";
import {useLocation} from "react-router";

import CustomTable from "../../components/CustomTable";
import {buttonType} from "../../configuration/configurationUI";
import Add from "../../components/buttons/Add";
import {sendRequest} from "../../api/sendRequest";
import {apis} from "../../configuration/configurationApi";

export default function SubAdmin(props) {


    const [data, setData] = React.useState([]);
    React.useEffect(() => {
        let body = {
            method: "get",
        };
        let formData = new FormData();
        formData.append("payload", JSON.stringify(body));
        const res = sendRequest(apis.base + apis.subAdminList, formData, ((res) => callback(res)));
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
                        <h1 className="card-title"><b>Sub Admin List</b></h1>
                    </div>
                    <div className="col-md-6">
                        <Add/>
                    </div>
                </div>
            </div>

            <div className="container"><br/>
                <CustomTable
                    type={{
                        "image": 'admin_image',
                        "name": "name",
                        "email": "email"
                    }}
                    typeEx={{}}
                    style={{}}
                    image={["image"]}
                    button={{
                        "ACTION": [buttonType.edit, buttonType.delete],
                    }}
                    buttonEx={{}}
                    searchField={true}
                    data={data}
                    api={apis.subAdminList} primaryKey={"id"}
                />

            </div>
        </div>
    )
}