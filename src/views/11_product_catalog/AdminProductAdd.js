import React from "react";
import {useLocation} from "react-router";
import {example} from "../../data/examData";
import CustomTable from "../../components/CustomTable";
import {Link} from "react-router-dom";

import {buttonType, routers} from "../../configuration/configurationUI";
import {sendRequest} from "../../api/sendRequest";
import {apis} from "../../configuration/configurationApi";

export default function AdminProductAdd(props) {

    const [data, setData] = React.useState({
        cat_id: "",
        type: "Regular",
        product_name: "",
        product_image: "",
    });

    const [categories, setCategories] = React.useState([]);
    React.useEffect(() => {
        let body = {
            method: "get",
            where: ["level!=0"]
        };
        let formData = new FormData();
        formData.append("payload", JSON.stringify(body));
        const res = sendRequest(apis.base + apis.categoryListAll, formData, ((res) => callback(res)), ((err) => console.log(err)));
    }, []);
    const callback = (res) => {
        setCategories(res.data);
        setData({...data, cat_id: res.data[0].cat_id})
    };

    const [image, setImage] = React.useState("");
    const submit = () => {
        let body = {
            method: "add",
            data: data,
        };
        let formData = new FormData();
        formData.append("payload", JSON.stringify(body));
        formData.append("product_image", image);
        const res = sendRequest(apis.base + apis.productList, formData, ((res) => callbackSubmit(res)), ((err) => console.log(err)));
    };
    const callbackSubmit = (res) => {
        if (res.status === 200) {
            window.location.href = routers.productList
        }
    };


    return (
        <div className="card">
            <div className="card-header card-header-primary">
                <h4 className="card-title">Add Product</h4>
            </div>
            <div className="card-body">
                <div className="row form-group">
                    <div className="col-md-6">
                        <label>Category</label>
                        <select value={data.category}
                                onChange={(event) => setData({...data, category: event.target.value})}
                                className="form-control">
                            {categories.map((val, index) => (
                                <option key={index} value={val}>{val.title}</option>
                            ))}
                        </select>
                    </div>
                    <div className="col-md-6">
                        <label>Type</label>
                        <select value={data.type}
                                onChange={(event) => setData({...data, type: event.target.value})}
                                className="form-control">
                            <option value="Regular">Regular</option>
                            <option value="In Season">In Season</option>
                        </select>
                    </div>
                </div>
                <div className="row form-group">
                    <div className="col-md-6">
                        <label>Product Name</label>
                        <input type="text" value={data.name}
                               onChange={(event) => setData({...data, name: event.target.value})}
                               className="form-control"/>
                    </div>
                    <div className="col-md-6">
                        <label>Quantity</label>
                        <input type="text" value={data.quantity}
                               onChange={(event) => setData({...data, quantity: event.target.value})}
                               className="form-control"/>
                    </div>
                </div>
                <div className="row form-group">
                    <div className="col-md-6">
                        <label>Unit(G/KG/Ltrs/MI)</label>
                        <input type="text" value={data.unit}
                               onChange={(event) => setData({...data, unit: event.target.value})}
                               className="form-control"/>
                    </div>
                    <div className="col-md-6">
                        <label>EAN Code</label>
                        <input type="text" value={data.code}
                               onChange={(event) => setData({...data, code: event.target.value})}
                               className="form-control"/>
                    </div>
                </div>
                <div className="row form-group">
                    <div className="col-md-6">
                        <label>MRP</label>
                        <input type="number" value={data.mrp}
                               onChange={(event) => setData({...data, mrp: event.target.value})}
                               className="form-control"/>
                    </div>
                    <div className="col-md-6">
                        <label>Price</label>
                        <input type="number" value={data.price}
                               onChange={(event) => setData({...data, price: event.target.value})}
                               className="form-control"/>
                    </div>
                </div>
                <div className="row form-group">
                    <div className="col-md-6">
                        <label>Cost Price</label>
                        <input type="number" value={data.costPrice}
                               onChange={(event) => setData({...data, costPrice: event.target.value})}
                               className="form-control"/>
                    </div>
                    <div className="col-md-6">
                        <label>Admin Share</label>
                        <input type="number" value={data.adminShare}
                               onChange={(event) => setData({...data, adminShare: event.target.value})}
                               className="form-control"/>
                    </div>
                </div>
                <div className="row form-group">
                    <div className="col-md-6">
                        <label>Main Product Image (It Should Be Less Then 1000 KB)</label>
                        <div className="custom-file">
                            <div className="custom-file">
                                <input type="file" className="custom-file-input" accept="image/*"
                                       onChange={(event) => setImage(event.target.files[0])}/>
                                <label className="custom-file-label" htmlFor="customFile">Choose file</label>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-6">
                        <label>Tags</label>
                        <input type="text" value={data.tags}
                               onChange={(event) => setData({...data, tags: event.target.value})}
                               className="form-control"/>
                    </div>
                </div>
                <div className="form-group">

                    <label>Description</label>
                    <textarea value={data.description}
                              onChange={(event) => setData({...data, description: event.target.value})}
                              className="form-control"/>

                </div>
                <div className="form-group">
                    <label>Product Images (Each Should Be Less Then 1000 KB)</label>
                    <div className="custom-file">
                        <div className="custom-file">
                            <input type="file" className="custom-file-input" accept="image/*"
                                   onChange={(event) => setData({...data, imageSub: event.target.files[0]})}/>
                            <label className="custom-file-label" htmlFor="customFile">Choose file</label>
                        </div>

                    </div>
                </div>
                <br/>
                <button onClick={submit} className="btn btn-primary pull-center mr-1">
                    Submit
                </button>
                <Link to={routers.productList} className="btn btn-danger pull-center">
                    Close
                </Link>
            </div>
        </div>

    )
}