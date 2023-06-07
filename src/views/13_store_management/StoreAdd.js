import React from "react";
import {Link} from "react-router-dom";

import {routers} from "../../configuration/configurationUI";
import CustomImage from "../../components/CustomImage";
import {sendRequest} from "../../api/sendRequest";
import {apis} from "../../configuration/configurationApi";

export default function StoreAdd(props) {
    const [data, setData] = React.useState({
        store_photo: "",
        store_name: "",
        employee_name: "",
        phone_number: "",
        email: "",
        password: "",
        id_type: "",
        id_number: "",
        id_photo: "",
        city_id: "",
        del_range: "",
        address: "",
        orders: "",
        store_opening_time: "",
        store_closing_time: "",
        time_interval: "",

    });
    const [ids, setIds] = React.useState([]);
    const [cities, setCities] = React.useState([]);

    React.useEffect(() => {
        let body = {
            method: "get",
        };
        let formData = new FormData();
        formData.append("payload", JSON.stringify(body));
        const res = sendRequest(apis.base + apis.idList, formData, ((res) => callback(res)), ((err) => console.log(err)));
        const res1 = sendRequest(apis.base + apis.cityList, formData, ((res) => callback1(res)), ((err) => console.log(err)));
    }, []);
    const callback = (res) => {
        setIds(res.data);
        setData({...data, id_type: res.data[0].type})
    };
    const callback1 = (res) => {
        setCities(res.data);
        setData({...data, city_id: res.data[0].city_id})
    };
    const [image, setImage] = React.useState("");
    const [idImage, setIdImage] = React.useState("");
    const submit = () => {
        let body = {
            method: "add",
            data: data,
        };
        let formData = new FormData();
        formData.append("payload", JSON.stringify(body));
        formData.append("store_photo", image);
        formData.append("id_photo", idImage);
        const res = sendRequest(apis.base + apis.adminStoreList, formData, ((res) => callbackSubmit(res)), ((err) => console.log(err)));
    };
    const callbackSubmit = (res) => {
        if (res.status === 200) {
            window.location.href = routers.adminStoreList
        }
    };

    return (
        <div className="card">
            <div className="card-header card-header-primary">
                <h4 className="card-title">Add Store Profile</h4>
            </div>
            <div className="card-body">
                <div className="form-group">
                    <CustomImage src={data.store_photo}/>
                </div>
                <div className="form-group">
                    <label>Store Image (It Should Be Less Then 1000 KB)</label>
                    <div className="custom-file">
                        <input type="file" className="custom-file-input" accept="image/*"
                               onChange={(event) => setImage(event.target.files[0])}
                        />
                        <label className="custom-file-label" htmlFor="customFile">Choose file</label>

                    </div>
                </div>
                <div className="row form-group">
                    <div className="col-md-4">
                        <label>Store Name</label>
                        <input type="text" value={data.store_name}
                               onChange={(event) => setData({...data, store_name: event.target.value})}
                               className="form-control"/>
                    </div>
                    <div className="col-md-4">
                        <label>Employee Name</label>
                        <input type="text" value={data.employee_name}
                               onChange={(event) => setData({...data, employee_name: event.target.value})}
                               className="form-control"/>
                    </div>
                    <div className="col-md-4">
                        <label>Store Number</label>
                        <input type="number" value={data.phone_number}
                               onChange={(event) => setData({...data, phone_number: event.target.value})}
                               className="form-control"/>
                    </div>
                </div>
                <div className="row form-group">
                    <div className="col-md-6">
                        <label>Email</label>
                        <input type="email" value={data.email}
                               onChange={(event) => setData({...data, email: event.target.value})}
                               className="form-control"/>
                    </div>
                    <div className="col-md-6">
                        <label>Password</label>
                        <input type="text" value={data.password}
                               onChange={(event) => setData({...data, password: event.target.value})}
                               className="form-control"/>
                    </div>
                </div>
                <div className="row form-group">
                    <div className="col-md-4">
                        <label>Select ID</label>
                        <select value={data.id_type}
                                onChange={(event) => setData({...data, id_type: event.target.value})}
                                className="form-control">
                            {ids.map((val, index) => (
                                <option key={index} value={data.id_type}>{val["name"]}</option>
                            ))}
                        </select>
                    </div>
                    <div className="col-md-4">
                        <label>ID Number</label>
                        <input type="number" value={data.id_number}
                               onChange={(event) => setData({...data, id_number: event.target.value})}
                               className="form-control"/>
                    </div>
                    <div className="col-md-4">
                        <label>ID Image (It Should Be Less Then 1000 KB)</label>
                        <div className="custom-file">
                            <input type="file" className="custom-file-input" accept="image/*"
                                   onChange={(event) => setIdImage(event.target.files[0])}
                            />
                            <label className="custom-file-label" htmlFor="customFile">Choose file</label>

                        </div>
                    </div>
                </div>
                <div className="row form-group">
                    <div className="col-md-6">
                        <label>Select City</label>
                        <select value={data.city_id}
                                onChange={(event) => setData({...data, city_id: event.target.value})}
                                className="form-control">
                            {cities.map((val, index) => (
                                <option key={index} value={val.city_id}>{val.city_name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="col-md-6">
                        <label>Delivery Range(KM)</label>
                        <input type="number" value={data.del_range}
                               onChange={(event) => setData({...data, del_range: event.target.value})}
                               className="form-control"/>
                    </div>
                </div>
                <div className="form-group">
                    <label>Store Address</label>
                    <input type="text" value={data.address}
                           onChange={(event) => setData({...data, address: event.target.value})}
                           className="form-control"/>
                </div>
                <div className="form-group">
                    <label>Orders</label>
                    <input type="number" value={data.orders}
                           onChange={(event) => setData({...data, orders: event.target.value})}
                           className="form-control"/>
                </div>
                <div className="row form-group">
                    <div className="col-md-4">
                        <label>Start Time</label>
                        <input type="time" value={data.store_opening_time}
                               onChange={(event) => setData({...data, store_opening_time: event.target.value})}
                               className="form-control"/>
                    </div>
                    <div className="col-md-4">
                        <label>End Time</label>
                        <input type="time" value={data.store_closing_time}
                               onChange={(event) => setData({...data, store_closing_time: event.target.value})}
                               className="form-control"/>
                    </div>
                    <div className="col-md-4">
                        <label>Time Slot Interval</label>
                        <input type="number" value={data.time_interval}
                               onChange={(event) => setData({...data, time_interval: event.target.value})}
                               className="form-control"/>
                    </div>
                </div>
                <br/>
                <button onClick={submit} className="btn btn-primary pull-center mr-1">
                    Submit
                </button>
                <Link to={routers.adminStoreList} className="btn btn-danger pull-center">
                    Close
                </Link>
            </div>
        </div>

    )
}