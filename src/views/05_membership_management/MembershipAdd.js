import React from "react";
import CustomTable from "../../components/CustomTable";
import {Link} from "react-router-dom";

import {buttonType, routers} from "../../configuration/configurationUI";
import {sendRequest} from "../../api/sendRequest";
import {apis} from "../../configuration/configurationApi";

export default function MembershipAdd(props) {
    const [data, setData] = React.useState({
        plan_name: "",
        days: 0,
        price: 0,
        reward: 0,
        free_delivery: "",
        instant_delivery: "",
        image: "",
        plan_description: "",

    });
    const [image, setImage] = React.useState("");
    const submit = () => {
        let body = {
            method: "add",
            data: data,
        };
        let formData = new FormData();
        formData.append("payload", JSON.stringify(body));
        formData.append("image", image);
        const res = sendRequest(apis.base + apis.membershipList, formData, ((res) => callbackSubmit(res)), ((err) => console.log(err)));
    };
    const callbackSubmit = (res) => {
        if (res.status === 200) {
            window.location.href = routers.membershipList
        }
    };

    return (
        <div className="card">
            <div className="card-header card-header-primary">
                <h4 className="card-title">Add Membership</h4>
            </div>
            <div className="card-body">
                <div className="row form-group">
                    <div className="col-md-6">
                        <label>Plan Name</label>
                        <input type="text" value={data.plan_name}
                               onChange={(event) => setData({...data, plan_name: event.target.value})}
                               className="form-control"/>
                    </div>
                    <div className="col-md-6">
                        <label>Plan Days</label>
                        <input type="number" value={data.days}
                               onChange={(event) => setData({...data, days: Number(event.target.value)})}
                               className="form-control"/>
                    </div>
                </div>
                <div className="row form-group">
                    <div className="col-md-6">
                        <label>Plan Price</label>
                        <input type="number" value={data.price}
                               onChange={(event) => setData({...data, price: Number(event.target.value)})}
                               className="form-control"/>
                    </div>
                    <div className="col-md-6">
                        <label>Reward Point (keywords.like 2 for 2x ,3 for 3x etc)</label>
                        <input type="number" value={data.reward}
                               onChange={(event) => setData({...data, reward: Number(event.target.value)})}
                               className="form-control"/>
                    </div>
                </div>
                <div className="row form-group">
                    <div className="col-md-6">
                        <label>Free Delivery</label>
                        <select value={data.free_delivery}
                                onChange={(event) => setData({...data, free_delivery: event.target.value})}
                                className="form-control">
                            <option value={0}>No</option>
                            <option value={1}>Yes</option>
                        </select>
                    </div>
                    <div className="col-md-6">
                        <label>Instant Delivery</label>
                        <select value={data.instant_delivery}
                                onChange={(event) => setData({...data, instant_delivery: event.target.value})}
                                className="form-control">
                            <option value={0}>No</option>
                            <option value={1}>Yes</option>
                        </select>
                    </div>
                </div>
                <div className="form-group">
                    <label>Image (It Should Be Less Then 1000 KB)</label>
                    <div className="custom-file">
                        <div className="custom-file">
                            <input type="file" className="custom-file-input" accept="image/*"
                                   onChange={(event) => setImage(event.target.files[0])}
                            />
                            <label className="custom-file-label" htmlFor="customFile">Choose file</label>
                        </div>
                    </div>
                </div>
                <div className="row form-group">
                    <div className="col-md-12">
                        <label>Description</label>
                        <textarea value={data.plan_description}
                                  onChange={(event) => setData({...data, plan_description: event.target.value})}
                                  className="form-control"/>
                    </div>

                </div>

                <br/>
                <button onClick={submit} className="btn btn-primary pull-center mr-1">
                    Submit
                </button>
                <Link to={routers.membershipList} className="btn btn-danger pull-center">
                    Close
                </Link>
            </div>
        </div>

    )
}