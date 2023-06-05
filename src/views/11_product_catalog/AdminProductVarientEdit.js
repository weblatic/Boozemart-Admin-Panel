import React from "react";
import {useLocation} from "react-router";
import {data, example} from "../../data/examData";
import {Link} from "react-router-dom";

export default function AdminProductVarientEdit(props) {
    const item = useLocation().state.item;
    const oldItem = useLocation().state.oldItem;
    console.log(item, oldItem)
    const categoryFromApi = () => {

    };
    const typeFromApi = () => {

    };
    const [data, setData] = React.useState({
        mrp: item.price,
        price: item.price,
        quantity: item.id,
        unit: item.category,
        code: item.description,
        description: item.description,

    });

    const url = window.location.href;
    const urlBack = url.slice(0, url.lastIndexOf("edit")) + oldItem.id;

    const submit = () => {
        console.log(data)
    };


    return (
        <div className="card">
            <div className="card-header card-header-primary">
                <h4 className="card-title">Update varient</h4>
            </div>
            <div className="card-body">
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
                        <label>Quantity</label>
                        <input type="number" value={data.quantity}
                               onChange={(event) => setData({...data, quantity: event.target.value})}
                               className="form-control"/>
                    </div>
                    <div className="col-md-6">
                        <label>Unit(G/KG/Ltrs/MI</label>
                        <input type="text" value={data.unit}
                               onChange={(event) => setData({...data, unit: event.target.value})}
                               className="form-control"/>
                    </div>
                </div>

                <div className="form-group">
                    <label>EAN Code</label>
                    <input type="text" value={data.code}
                           onChange={(event) => setData({...data, code: event.target.value})}
                           className="form-control"/>
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea value={data.description}
                              onChange={(event) => setData({...data, description: event.target.value})}
                              className="form-control"/>
                </div>
                <br/>
                <button onClick={submit} className="btn btn-primary pull-center mr-1">
                    Submit
                </button>
                <Link to={urlBack} state={oldItem} className="btn btn-danger pull-center">
                    Close
                </Link>
            </div>
        </div>

    )
}