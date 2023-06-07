import React from "react";
import {sendRequest} from "../../api/sendRequest";
import {apis} from "../../configuration/configurationApi";

export default function IconBtn(props) {


    const url = window.location.href;


    const activeOrBlock = (id) => {
        let body = {
            method: "update",
            data: {block: props.item.block === 1 ? 0 : 1},
            where: ["id=" + id]
        };
        let formData = new FormData();
        formData.append("payload", JSON.stringify(body));
        const res = sendRequest(apis.base + apis.userList, formData, ((res) => callback(res)), ((err) => console.log(err)));
    };

    const callback = (res) => {
        if (res.status === 200) {
            window.location.href = url;
        }
    };

    return (
        <React.Fragment key={url + "_fragment_request"}>
            <span onClick={() => activeOrBlock(props.item[props.primaryKey])} className="btn btn-outline-gray-200 ">
                <i className={props.item.block === 1 ? "fa fa-check-circle text-green" : "fa fa-ban text-red"}/>
            </span>
        </React.Fragment>
    )

}
