import React from "react";
import FormControlLabel from "@mui/material/FormControlLabel/FormControlLabel";
import Checkbox from "@mui/material/Checkbox/Checkbox";
import {sendRequest} from "../../api/sendRequest";
import {apis} from "../../configuration/configurationApi";

export default function IconBtn(props) {


    const url = window.location.href;

    const [hide, setHide] = React.useState(false);

    React.useEffect(() => {
        setHide(props.item.hide === 1);
    }, []);

    const callback = (res) => {
        if (res.status === 200) {
            window.location.href = url;
        }
    };

    const showOrHide = (item, checkedState) => {
        setHide(checkedState);
        let body = {
            method: "update",
            where: [props.primaryKey + "=" + props.item[props.primaryKey]],
            data: {
                hide: checkedState ? 1 : 0
            }
        };
        let formData = new FormData();
        formData.append("payload", JSON.stringify(body));
        const res = sendRequest(apis.base + props.api, formData, ((res) => callback(res)), ((err) => console.log(err)));
    };

    return (
        <React.Fragment key={url + "_fragment_request"}>
            <FormControlLabel
                control={<Checkbox onChange={(event) => showOrHide(props.item, event.target.checked)}
                                   checked={hide}/>}
                label=""/>
        </React.Fragment>
    )

}
