import React from "react";
import {useLocation} from "react-router";
import {example} from "../../data/examData";

import Collapse from "@mui/material/Collapse/Collapse";
import Checkbox from "@mui/material/Checkbox/Checkbox";
import SendNotification from "../../components/SendNotification";
import {sendRequest} from "../../api/sendRequest";
import {apis} from "../../configuration/configurationApi";

export default function SendNotificationToStore(props) {

    const [data, setData] = React.useState({});
    React.useEffect(() => {
        let body = {
            method: "get",
        };
        let formData = new FormData();
        formData.append("payload", JSON.stringify(body));
        const res = sendRequest(apis.base + apis.storesForNotification, formData, ((res) => callback(res)), ((err) => console.log(err)));
    }, []);

    const callback = (res) => {
        setData(res.data)
    };

    return (
        <div className="card">
            <div className="card-header card-header-primary">
                <h4 className="card-title">Notification to Store</h4>
            </div>
            <SendNotification
                data={data} api={apis.notificationListStore} primaryKey={"store_id"}
                sendTo={"Store"}
            />
        </div>
    )
}