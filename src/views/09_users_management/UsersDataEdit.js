import React from "react";
import {useLocation} from "react-router";
import {Link} from "react-router-dom";

import {routers} from "../../configuration/configurationUI";
import {sendRequest} from "../../api/sendRequest";
import {apis} from "../../configuration/configurationApi";

export default function UsersDataEdit(props) {
    const item = useLocation().state;
    const [cities, setCities] = React.useState([]);
    const [societies, setSocieties] = React.useState([]);
    const [data, setData] = React.useState({
        user_city: item.user_city,
        user_area: item.user_area,
        name: item.name,
        email: item.email,
        user_phone: item.user_phone,
        wallet: item.wallet,
        rewards: item.rewards,
        password: item.password,
    });
    React.useEffect(() => {
        let body = {
            method: "get",
        };
        let formData = new FormData();
        formData.append("payload", JSON.stringify(body));
        const res = sendRequest(apis.base + apis.cityList, formData, ((res) => callback(res)), ((err) => console.log(err)));
        const res1 = sendRequest(apis.base + apis.societyList, formData, ((res) => callback1(res)), ((err) => console.log(err)));
    }, []);

    const callback = (res) => {
        setCities(res.data);
    };
    const callback1 = (res) => {
        setSocieties(res.data);
    };


    const submit = () => {
        let body = {
            method: "update",
            where: [`id=${item.id}`],
            data: data
        };
        let formData = new FormData();
        formData.append("payload", JSON.stringify(body));
        const res = sendRequest(apis.base + apis.userList, formData, ((res) => callbackSubmit(res)), ((err) => console.log(err)));
    };

    const callbackSubmit = (res) => {
        if (res.status === 200) {
            window.location.href = routers.userList;
        }
    };


    return (
        <div className="card">
            <div className="card-header card-header-primary">
                <h4 className="card-title">Edit User</h4>
            </div>
            <div className="card-body">
                <div className="row form-group">
                    <div className="col-md-6">
                        <label>City</label>
                        <select value={data.user_city}
                                onChange={(event) => setData({...data, user_city: event.target.value})}
                                className="form-control">
                            {cities.map((val, index) => (
                                <option key={index} value={val.city_id}>{val.city_name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="col-md-6">
                        <label>Society</label>
                        <select value={data.user_area}
                                onChange={(event) => setData({...data, user_area: event.target.value})}
                                className="form-control">
                            {societies.map((val, index) => (
                                <option key={index} value={val.society_id}>{val.society_name}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="row form-group">
                    <div className="col-md-6">
                        <label>User Name</label>
                        <input type="text" value={data.name}
                               onChange={(event) => setData({...data, name: event.target.value})}
                               className="form-control"/>
                    </div>
                    <div className="col-md-6">
                        <label>User Email</label>
                        <input type="email" value={data.email}
                               onChange={(event) => setData({...data, email: event.target.value})}
                               className="form-control"/>
                    </div>
                </div>
                <div className="row form-group">
                    <div className="col-md-6">
                        <label>User Phone</label>
                        <input type="text" value={data.user_phone}
                               onChange={(event) => setData({...data, user_phone: event.target.value})}
                               className="form-control"/>
                    </div>
                    <div className="col-md-6">
                        <label>User Password</label>
                        <input type="password" value={data.password}
                               onChange={(event) => setData({...data, password: event.target.value})}
                               className="form-control"/>
                    </div>
                </div>
                <div className="row form-group">
                    <div className="col-md-6">
                        <label>Wallet Balance</label>
                        <input type="number" value={data.wallet}
                               onChange={(event) => setData({...data, wallet: event.target.value})}
                               className="form-control"/>
                    </div>
                    <div className="col-md-6">
                        <label>User Rewards</label>
                        <input type="number" value={data.rewards}
                               onChange={(event) => setData({...data, rewards: event.target.value})}
                               className="form-control"/>
                    </div>
                </div>
                <br/>

                <br/>
                <button onClick={submit} className="btn btn-primary pull-center mr-1">
                    Submit
                </button>
                <Link to={routers.userList} className="btn btn-danger pull-center">
                    Close
                </Link>
            </div>
        </div>

    )
}