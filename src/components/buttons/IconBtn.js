import React, {Component} from "react";

export default function IconBtn(props) {


    const url = window.location.href;


    const activeOrBlock = (id) => {
        console.log(id);
    };

    return (
        <React.Fragment key={url + "_fragment_request"}>
            <span onClick={() => activeOrBlock(props.item[props.primaryKey])} className="btn btn-outline-gray-200 ">
                <i className={props.item.id === 1 ? "fa fa-check-circle text-green" : "fa fa-ban text-red"}/>
            </span>
        </React.Fragment>
    )

}
