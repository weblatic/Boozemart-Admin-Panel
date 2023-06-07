import React from "react";
import {sendRequest} from "../../api/sendRequest";
import {apis} from "../../configuration/configurationApi";

export default function Process(props) {


    const url = window.location.href;

    const process = (id) => {
        let body = {
            method: "update",
            where: [props.primaryKey + "=" + props.item[props.primaryKey]],
            data: {
                processed: 1
            }
        };
        let formData = new FormData();
        formData.append("payload", JSON.stringify(body));
        const res = sendRequest(apis.base + props.api, formData, ((res) => callback(res)), ((err) => console.log(err)));
    };

    const callback = (res) => {
        if (res.status === 200) {
            window.location.href = url;
        }
    };

    return (
        <React.Fragment key={url + "_fragment_request"}>
            {props.item.processed === 0 ? (
                <span onClick={() => process(props.item[props.primaryKey])} className="btn btn-success mr-1">
                    <i className="fa fa-phone-alt"/> Process</span>
            ) : (
                <span className="text-green"><b>Processed</b></span>
            )}

        </React.Fragment>
    )

}