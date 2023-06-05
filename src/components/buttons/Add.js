import React from "react";
import {Link} from "react-router-dom";

export default function Add(props) {

    const url = window.location.href;

    const getUrl = () => {
        let str = url.endsWith("/list") ? url.replace("/list", "") : url;
        let lastSlash = str.lastIndexOf("/");
        let lastString = str.slice(lastSlash + 1);
        if (!isNaN(Number(lastString))) {
            return str.slice(0, lastSlash)+ "/add/" + lastString;
        }else {
            return str + "/add";
        }
    };


    return (
        <React.Fragment key={url + "_fragment"}>
            <Link to={getUrl()}
                  state={props.item}
                  className="btn btn-primary p-1 ml-auto"
                  style={{width: '15%', float: 'right', padding: ' 3px 0px 3px 0px'}}>Add</Link>
        </React.Fragment>
    )

}