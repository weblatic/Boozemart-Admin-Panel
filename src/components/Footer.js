import React from "react";
import {Link} from "react-router-dom";

export default function Footer(props) {

    return (
        <div className="app-footer">
            {props.logo.footer_text} | Crafted with ♥ by <Link>Weblatic</Link>
        </div>
    )
}