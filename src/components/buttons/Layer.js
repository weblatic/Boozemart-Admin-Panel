import React from "react";
import {Link} from "react-router-dom";

export default function Layer(props) {


    const url = window.location.href;

    return (
        <React.Fragment key={url + "_fragment"}>
            <Link
                to={"/report/required/itemlist/today/store/" + props.item[props.primaryKey]}
                state={props.item}
                className="btn btn-success mr-1">
                layers
            </Link>
        </React.Fragment>
    )

}