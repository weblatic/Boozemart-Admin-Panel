import React from "react";
import {languages} from "../configuration/configurationUI";

export default function ContentHeader(props) {

    return (
        <div>
            <div className="row">
                <div className="col-md-7">
                    <h1 className="page-header mb-3">
                        Hi, {props.logo.name}. <small>Here is your admin panel.</small>
                    </h1>
                </div>
                <div className="col-md-5" align="right">
                    <div className="col-md-4" align="right">
                        <select className="form-control"
                                onChange={(event) => props.setLanguage(event.target.value)}>
                            {languages.map(value =>
                                <option key={value} value={value}>{value}</option>)}
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )

}