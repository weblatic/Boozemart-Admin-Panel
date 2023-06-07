import React from "react";
import SendNotification from "../../components/SendNotification";
import {sendRequest} from "../../api/sendRequest";
import {apis} from "../../configuration/configurationApi";

export default function SendNotificationToDriver(props) {


    const [data, setData] = React.useState({});
    React.useEffect(() => {
        let body = {
            method: "get",
        };
        let formData = new FormData();
        formData.append("payload", JSON.stringify(body));
        const res = sendRequest(apis.base + apis.driversForNotification, formData, ((res) => callback(res)), ((err) => console.log(err)));
    }, []);

    const callback = (res) => {
        setData(res.data)
    };


    return (
        <div className="card">
            <div className="card-header card-header-primary">
                <h4 className="card-title">Notification to Driver</h4>
            </div>
            <SendNotification
                data={data} api={apis.notificationListDriver} primaryKey={"dboy_id"}
                sendTo={"Driver"}
            />
        </div>
    )
}