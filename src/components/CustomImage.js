import React from "react";

export default function CustomImage(props) {

    function showImage(val) {
        if(val){
            let src = "";
            try {
                src = require(`F:/Web/Aditya/upload/` + val);
            } catch (e) {

            }
            return (
                <img src={src} className={"table-image-style " + props.className} style={props.style}/>
            )
        }else {
            return (
                <div className="text-orange">No Image</div>
            )
        }

    }


    return (
        showImage(props.src)
    )

}
