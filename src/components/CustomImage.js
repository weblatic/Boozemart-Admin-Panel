import React from "react";
import {apis, base_url} from "../configuration/configurationApi";

export default function CustomImage(props) {

    function showImage(val) {
        if (val) {
            let src = "";
          /*  try {
                console.log(base_url + apis.base + "/upload/" + val)
                src = require(base_url + apis.base + "/upload/" + val);
                //  src = require(`F:/Web/Aditya/boozemart-backend/upload/` + val);
            } catch (e) {
                console.log(e)
            }*/
            return (
                <img src={val} className={"table-image-style " + props.className} style={props.style}/>
            )
        } else {
            return (
                <div className="text-orange">No Image</div>
            )
        }

    }


    return (
        showImage(props.src)
    )

}
