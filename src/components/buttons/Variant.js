import React from "react";import {useLocation} from "react-router";
import {Link} from "react-router-dom";

export default function Variant(props) {


    const url = window.location.href;


    return (
        <React.Fragment key={url + "_fragment"}>
            <Link
                to={(url.endsWith("/list") ? url.replace("/list", "") : url) + "/Variant/" + props.item[props.primaryKey]}
                state={props.item}
                className="btn btn-primary mr-1"><i
                className="fa fa-cubes"/></Link>
        </React.Fragment>
    )

}