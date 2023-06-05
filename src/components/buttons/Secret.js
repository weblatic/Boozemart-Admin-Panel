import React from "react";import {useLocation} from "react-router";
import {Link} from "react-router-dom";
import Pagination from "@mui/material/Pagination/Pagination";
import Table from "@mui/material/Table/Table";
import TableRow from "@mui/material/TableRow/TableRow";
import TableCell from "@mui/material/TableCell/TableCell";
import TableBody from "@mui/material/TableBody/TableBody";
import TableHead from "@mui/material/TableHead/TableHead";
import Collapse from "@mui/material/Collapse/Collapse";

export default function Secret(props) {


    const url = window.location.href;


    const deleteItem = (id) => {
        console.log(id);
    };


    return (
        <React.Fragment key={url + "_fragment"}>
            <Link to={(url.endsWith("/list") ? url.replace("/list", "") : url) + "/edit/" + props.item[props.primaryKey]}
                  className="btn btn-dark mr-1"><i
                className="fa fa-user-secret"/></Link>
        </React.Fragment>
    )

}