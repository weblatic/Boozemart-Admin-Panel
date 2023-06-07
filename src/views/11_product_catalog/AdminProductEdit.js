import React from "react";
import {useLocation} from "react-router";
import {Link} from "react-router-dom";

import {routers} from "../../configuration/configurationUI";
import CustomImage from "../../components/CustomImage";
import {sendRequest} from "../../api/sendRequest";
import {apis} from "../../configuration/configurationApi";

export default function AdminProductEdit(props) {
    const item = useLocation().state;
    const [data, setData] = React.useState({
        cat_id: item.cat_id,
        type: item.type,
        product_name: item.product_name,
        description: item.description,
        image: item.image,
        product_image: item.product_image,

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
    };
    const [image, setImage] = React.useState("");
    const [productImage, setProductImage] = React.useState("");
    const submit = () => {
        let body = {
            method: "update",
            data: data,
            where: ["product_id=" + item.product_id]
        };
        let formData = new FormData();
        formData.append("payload", JSON.stringify(body));
        formData.append("image", image);
        formData.append("product_image", productImage);
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
                <h4 className="card-title">Edit Product</h4>
            </div>
            <div className="card-body">
                <div className="row form-group">
                    <div className="col-md-6">
                        <label>Category</label>
                        <select value={data.cat_id}
                                onChange={(event) => setData({...data, cat_id: event.target.value})}
                                className="form-control">
                            {categories.map((val, index) => (
                                <option key={index} value={val.cat_id}>{val.title}</option>
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
                        <input type="text" value={data.product_name}
                               onChange={(event) => setData({...data, product_name: event.target.value})}
                               className="form-control"/>
                    </div>
                    <div className="col-md-6">
                        <label>Tags</label>
                        <input type="text" value={data.description}
                            //    onChange={(event) => setData({...data, description: event.target.value})}
                               className="form-control"/>
                    </div>
                </div>
                <div className="form-group">
                    <CustomImage src={data.image} className="height-100 width-100"/>
                </div>
                <div className="form-group">
                    <label>Main Product Image (It Should Be Less Then 1000 KB)</label>
                    <div className="custom-file">
                        <div className="custom-file">
                            <input type="file" className="custom-file-input" accept="image/*"
                                   onChange={(event) => setImage(event.target.files[0])}
                            />
                            <label className="custom-file-label" htmlFor="customFile">Choose file</label>
                        </div>

                    </div>
                </div>
                <div className="form-group">
                    <CustomImage src={data.product_image} className="height-100 width-100"/>
                </div>
                <div className="form-group">
                    <label>Product Images (It Should Be Less Then 1000 KB)</label>
                    <div className="custom-file">
                        <div className="custom-file">
                            <input type="file" className="custom-file-input" accept="image/*"
                                   onChange={(event) => setProductImage(event.target.files[0])}/>
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