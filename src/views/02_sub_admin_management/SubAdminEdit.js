import React from "react";
import {useLocation} from "react-router";
import {Link} from "react-router-dom";
import {routers} from "../../configuration/configurationUI";
import {sendRequest} from "../../api/sendRequest";
import {apis} from "../../configuration/configurationApi";

export default function SubAdminEdit(props) {
    const item = useLocation().state;

    const [data, setData] = React.useState({
        name: item.name,
        email: item.email,
        admin_image: item.admin_image,
        role_id: item.role_id,
        password: item.password,

    });
    const [roles, setRoles] = React.useState([]);
    React.useEffect(() => {
        let body = {
            method: "get",
        };
        let formData = new FormData();
        formData.append("payload", JSON.stringify(body));
        const res = sendRequest(apis.base + apis.roles, formData, ((res) => callback(res)), ((err) => console.log(err)));
    }, []);

    const callback = (res) => {
        setRoles(res.data);
        setData({...data, role: res.data.role_id});
    };
    const [image, setImage] = React.useState("");
    const submit = () => {
        let body = {
            method: "update",
            data: data,
            where: ["id=" + item.id]
        };
        let formData = new FormData();
        formData.append("payload", JSON.stringify(body));
        formData.append("admin_image", image);
        const res = sendRequest(apis.base + apis.subAdminList, formData, ((res) => callbackSubmit(res)), ((err) => console.log(err)));
    };
    const callbackSubmit = (res) => {
        if (res.status === 200) {
            window.location.href = routers.subAdminList
        }
    };


    return (
        <div className="card">
            <div className="card-header card-header-primary">
                <h4 className="card-title">Edit Sub-Admin</h4>
            </div>
            <div className="card-body">
                <div className="row form-group">
                    <div className="col-md-6">
                        <label>Sub Admin Name</label>
                        <input type="text" value={data.name}
                               onChange={(event) => setData({...data, name: event.target.value})}
                               className="form-control"/>
                    </div>
                    <div className="col-md-6">
                        <label>Email</label>
                        <input type="email" value={data.email}
                               onChange={(event) => setData({...data, email: event.target.value})}
                               className="form-control"/>
                    </div>
                </div>
                <div className="row form-group">
                    <div className="col-md-6">
                        <label>Image</label>
                        <div className="custom-file">
                            <div className="custom-file">
                                <input type="file" className="custom-file-input" accept="image/*"
                                       onChange={(event) => setImage(event.target.files[0])}
                                />
                                <label className="custom-file-label" htmlFor="customFile">Choose file</label>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <label>Role Name</label>
                        <select value={data.role_id}
                                onChange={(event) => setData({...data, role_id: event.target.value})}
                                className="form-control">
                            {roles.map((val, index) => (
                                <option key={index} value={val.role_id}>{val.role_name}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="row form-group">
                    <div className="col-md-6">
                        <label>Password</label>
                        <input type="text" value={data.password}
                               onChange={(event) => setData({...data, password: event.target.value})}
                               className="form-control"/>
                    </div>
                </div>
                <br/>

                <br/>
                <button onClick={submit} className="btn btn-primary pull-center mr-1">
                    Submit
                </button>
                <Link to={routers.subAdminList} className="btn btn-danger pull-center">
                    Close
                </Link>
            </div>
        </div>

    )
}
