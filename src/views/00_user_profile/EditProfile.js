import React from "react";
import {sendRequest} from "../../api/sendRequest";
import {apis} from "../../configuration/configurationApi";
import CustomImage from "../../components/CustomImage";


export default function EditProfile(props) {

    const [data, setData] = React.useState({
        admin_image: "",
        email: "",
        id: 0,
        name: "",
        password: "",
        remember_token: "",
        role_id: 0,
        role_name: "",
    });

    React.useEffect(() => {
        let body = {
            method: "get",
            email: JSON.parse(sessionStorage.getItem("user")).email
        };
        let formData = new FormData();
        formData.append("payload", JSON.stringify(body));
        const res = sendRequest(apis.base + apis.admin, formData, ((res) => callback(res)), ((err) => console.log(err)));
    }, []);

    const callback = (res) => {
        setData(res.data[0])
    };

    const [image, setImage] = React.useState("");
    const submit = () => {
        let body = {
            method: "update",
            where: ["id=" + data.id],
            data: data
        };
        let formData = new FormData();
        formData.append("payload", JSON.stringify(body));
        formData.append("admin_image", image);
        const res = sendRequest(apis.base + apis.admin, formData, ((res) => callbackSubmit(res)), ((err) => console.log(err)));
    };
    const url=window.location.href;
    const callbackSubmit = (res) => {
        if(res.status===200){
            window.location.href=url;
        }
    };

    return (
        <div className="card">
            <div className="card-header card-header-primary">
                <h4 className="card-title">Edit Profile</h4>
            </div>
            <div className="card-body">
                <div className="row form-group">
                    <div className="col-md-6">
                        <label>Admin Name</label>
                        <input type="text" value={data.name}
                               onChange={(event) => setData({...data, name: event.target.value})}
                               className="form-control"/>
                    </div>
                    <div className="col-md-6">
                        <label>Admin Email</label>
                        <input type="email" value={data.email}
                               onChange={(event) => setData({...data, email: event.target.value})}
                               className="form-control"/>
                    </div>
                </div>
                <div className="form-group">
                    <CustomImage src={data.admin_image} className="height-100 width-100"/>
                </div>
                <div className="form-group">
                    <div className="custom-file">
                        <div className="custom-file">
                            <input type="file" className="custom-file-input" accept="image/*"
                                   onChange={(event) => setImage(event.target.files[0])}/>
                            <label className="custom-file-label" htmlFor="customFile">Choose Admin Profile</label>
                        </div>
                    </div>
                </div>

                <br/>
                <button onClick={submit} className="btn btn-primary pull-center mr-1">
                    Update Profile
                </button>
            </div>
        </div>

    )
}