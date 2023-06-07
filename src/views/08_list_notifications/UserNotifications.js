import React from "react";
import {useLocation} from "react-router";
import CustomTable from "../../components/CustomTable";
import {sendRequest} from "../../api/sendRequest";
import {apis} from "../../configuration/configurationApi";

export default function UserNotifications(props) {
    const item = useLocation().state;


    const [data, setData] = React.useState([]);
    React.useEffect(() => {
        let body = {
            method: "get",
        };
        let formData = new FormData();
        formData.append("payload", JSON.stringify(body));
        const res = sendRequest(apis.base + apis.notificationListUser, formData, ((res) => callback(res)), ((err) => console.log(err)));
    }, []);

    const callback = (res) => {
        setData(res.data)
    };
    const url = window.location.href;

    const readByUser = () => {
        let body = {
            method: "delete",
            where: ['read_by_user=' + 0]
        };
        let formData = new FormData();
        formData.append("payload", JSON.stringify(body));
        const res = sendRequest(apis.base + apis.notificationListUser, formData, ((res) => callbackDel(res)), ((err) => console.log(err)));
    };

    const removeAll = () => {
        let body = {
            method: "deleteAll",
        };
        let formData = new FormData();
        formData.append("payload", JSON.stringify(body));
        const res = sendRequest(apis.base + apis.notificationListUser, formData, ((res) => callbackDel(res)), ((err) => console.log(err)));
    };

    const callbackDel = (res) => {
        if (res.status === 200) {
            window.location.href = url
        }
    };

    return (
        <div className="card">
            <div className="card-header card-header-primary">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="card-title"><b>Users Notification List</b></h1>
                    </div>
                    <div className="col-md-6 text-right">
                        <button className="btn btn-danger mr-2" onClick={readByUser}><i className="fa fa-trash"/> Ready
                            By User
                        </button>
                        <button className="btn btn-danger" onClick={removeAll}><i className="fa fa-trash"/> All</button>
                    </div>
                </div>
            </div>

            <div className="container"><br/>
                <CustomTable
                    type={{
                        "TITLE": 'noti_title',
                        "IMAGE": 'image',
                        "USER": 'name',
                        "NOTIFICATION TEXT": 'noti_message',
                    }}
                    typeEx={{}}
                    style={{}}
                    image={["image"]}
                    button={{}}
                    buttonEx={{}}
                    searchField={true}
                    data={data} api={apis.notificationListUser} primaryKey={"id"}/>

            </div>
        </div>

    )
}
