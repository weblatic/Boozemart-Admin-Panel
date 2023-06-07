import React from "react";
import {Link} from "react-router-dom";

export default function EditForVariant(props) {


    const url = window.location.href;

    const getUrl = () => {
        let str = url.endsWith("/list") ? url.replace("/list", "") : url;
        let lastSlash = str.lastIndexOf("/");
        let lastString = str.slice(lastSlash + 1);
        if (!isNaN(Number(lastString))) {
            str = str.slice(0, lastSlash);
        }
        return str + "/edit/" + props.item[props.primaryKey];
    };


    return (
        <React.Fragment key={url + "_fragment"}>
            <Link
                to={getUrl()}
                state={{item: props.item, oldItem: props.oldItem}}
                className="btn btn-success mr-1"><i
                className="fa fa-edit"/></Link>
        </React.Fragment>
    )

}