import React from "react";import {useLocation} from "react-router";


export default function CancelOrRefund(props) {


    const url = window.location.href;


    const deleteItem = (id) => {
        console.log(id);
    };

    return (
        <React.Fragment key={url + "_fragment"}>
            <span onClick={() => deleteItem(props.item[props.primaryKey])} className="btn btn-primary mr-1">Cancel/Refund</span>
        </React.Fragment>
    )

}