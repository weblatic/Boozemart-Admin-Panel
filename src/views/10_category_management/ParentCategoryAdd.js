import React from "react";
import {useLocation} from "react-router";
import {example} from "../../data/examData";
import {Link} from "react-router-dom";

import {buttonType, routers} from "../../configuration/configurationUI";
import CustomImage from "../../components/CustomImage";
import {sendRequest} from "../../api/sendRequest";
import {apis} from "../../configuration/configurationApi";

export default function ParentCategoryAdd(props) {

    const [tax, setTax] = React.useState([]);
    const [data, setData] = React.useState({
        tx_id: "",
        tax_type: 1,
        title: "",
        image: "",
        tax_per: "",
        description: ""
    });

    React.useEffect(() => {
        let body = {
            method: "get",
        };
        let formData = new FormData();
        formData.append("payload", JSON.stringify(body));
        const res = sendRequest(apis.base + apis.taxList, formData, ((res) => callback(res)), ((err) => console.log(err)));
    }, []);
    const callback = (res) => {
        setTax(res.data);
        setData({...data, tx_id: res.data[0].tax_id})
    };
    const [image, setImage] = React.useState("");
    const submit = () => {
        let body = {
            method: "add",
            data: data,
        };
        let formData = new FormData();
        formData.append("payload", JSON.stringify(body));
        formData.append("image", image);
        const res = sendRequest(apis.base + apis.categoryList, formData, ((res) => callbackSubmit(res)), ((err) => console.log(err)));
    };
    const callbackSubmit = (res) => {
        if (res.status === 200) {
            window.location.href = routers.categoryList
        }
    };

    return (
        <div className="card">
            <div className="card-header card-header-primary">
                <h4 className="card-title">Add Category</h4>
            </div>
            <div className="card-body">
                <div className="form-group">
                    <CustomImage src={data.image}/>
                </div>
                <div className="row form-group">
                    <div className="col-md-6">
                        <label>Title</label>
                        <input type="text" value={data.title}
                               onChange={(event) => setData({...data, title: event.target.value})}
                               className="form-control"/>
                    </div>
                    <div className="col-md-6">
                        <label>Tax</label>
                        <select value={data.tax_type}
                                onChange={(event) => setData({...data, tax_type: event.target.value})}
                                className="form-control">
                            <option value={1}>Exclusive</option>
                            <option value={0}>Inclusive</option>

                        </select>
                    </div>
                </div>
                <div className="row form-group">
                    <div className="col-md-6">
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
                    <div className="col-md-6">
                        <label>Tax Name</label>
                        <select value={data.tx_id}
                                onChange={(event) => setData({...data, tx_id: event.target.value})}
                                className="form-control">
                            {tax.map((val, index) => (
                                <option key={index} value={val.tx_id}>{val.name}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="row form-group">
                    <div className="col-md-6">
                        <label>Description</label>
                        <textarea value={data.description}
                                  onChange={(event) => setData({...data, description: event.target.value})}
                                  className="form-control"/>
                    </div>
                    <div className="col-md-6">
                        <label>Tax Percentage</label>
                        <input type="number" value={data.tax_per}
                               onChange={(event) => setData({...data, tax_per: event.target.value})}
                               className="form-control"/>
                    </div>
                </div>
                <br/>
                <button onClick={submit} className="btn btn-primary pull-center mr-1">
                    Submit
                </button>
                <Link to={routers.categoryList} className="btn btn-danger pull-center">
                    Close
                </Link>
            </div>
        </div>

    )
}