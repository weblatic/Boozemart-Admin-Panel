import React from "react";
import SendNotification from "../../components/SendNotification";
import {sendRequest} from "../../api/sendRequest";
import {apis} from "../../configuration/configurationApi";

export default function SendNotificationToUsers(props) {

    const [data, setData] = React.useState({});
    React.useEffect(() => {
        let body = {
            method: "get",
        };
        let formData = new FormData();
        formData.append("payload", JSON.stringify(body));
        const res = sendRequest(apis.base + apis.usersForNotification, formData, ((res) => callback(res)), ((err) => console.log(err)));
    }, []);

    const callback = (res) => {
        setData(res.data)
    };

    return (
        <div className="card">
            <div className="card-header card-header-primary">
                <h4 className="card-title">Notification to Users</h4>
            </div>
            <SendNotification
                data={data} api={apis.notificationListUser} primaryKey={"user_id"}
                sendTo={"Users"}
            />
        </div>
    )
}