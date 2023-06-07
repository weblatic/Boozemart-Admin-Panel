import React from "react";
import {useLocation} from "react-router";
import {Link} from "react-router-dom";

import {routers} from "../../configuration/configurationUI";
import {sendRequest} from "../../api/sendRequest";
import {apis} from "../../configuration/configurationApi";
import MultiSelect from "../../components/MultiSelect";

export default function DeliveryBoyEdit(props) {

    const item = useLocation().state;
    const [data, setData] = React.useState({
        boy_name: item.boy_name,
        boy_phone: item.boy_phone,
        id_name: item.id_name,
        id_no: item.id_no,
        id_photo: item.id_photo,
        password: item.password,
        boy_loc: item.boy_loc,
        boy_city: item.boy_city,
    });
    const [dataForThis, setDataForThis] = React.useState({
        storesAdded: [],
        storesAddedOld: [],
        anchorEl: null
    });

    const [ids, setIds] = React.useState([]);
    const [cities, setCities] = React.useState([]);
    const [stores, setStores] = React.useState([]);
    React.useEffect(() => {
        let body = {
            method: "get",
        };
        let body1 = {
            method: "get",
            where: ['ad_dboy_id=' + item.dboy_id]
        };
        let formData = new FormData();
        formData.append("payload", JSON.stringify(body));
        const res = sendRequest(apis.base + apis.idList, formData, ((res) => callback(res)), ((err) => console.log(err)));
        const res1 = sendRequest(apis.base + apis.cityList, formData, ((res) => callback1(res)), ((err) => console.log(err)));
        const res2 = sendRequest(apis.base + apis.adminStoreList, formData, ((res) => callback2(res)), ((err) => console.log(err)));
        let formData1 = new FormData();
        formData1.append("payload", JSON.stringify(body1));
        const res3 = sendRequest(apis.base + apis.adminDBoyStoreList, formData1, ((res) => callback3(res)), ((err) => console.log(err)));
    }, []);

    const callback = (res) => {
        setIds(res.data);
    };

    const callback1 = (res) => {
        setCities(res.data);
    };

    const callback2 = (res) => {
        setStores(res.data);
    };

    const callback3 = (res) => {
        setDataForThis({...dataForThis, storesAdded: res.data, storesAddedOld: res.data});
    };
    const [image, setImage] = React.useState("");
    const submit = () => {
        let body = {
            method: "update",
            data: data,
            where: ["dboy_id=" + item.dboy_id]
        };
        let formData = new FormData();
        formData.append("payload", JSON.stringify(body));
        formData.append("id_photo", image);
        const res = sendRequest(apis.base + apis.dBoyList, formData, ((res) => callbackSubmit(res)), ((err) => console.log(err)));
    };
    const callbackSubmit = (res) => {
        if (res.status === 200) {
            window.location.href = routers.dBoyList
        }
    };
    const selectData = (checked, eachData) => {
        if (checked) {
            let storesAdded = dataForThis.storesAdded;
            storesAdded.push(eachData);
            setDataForThis({...dataForThis, storesAdded: storesAdded});
        } else {
            setDataForThis({
                ...dataForThis,
                storesAdded: dataForThis.storesAdded.filter(item => JSON.stringify(item) !== JSON.stringify(eachData))
            });
        }
    };

    const selectAll = (checked) => {
        if (checked) {
            let storesAdded = dataForThis.storesAdded;
            for (let i = 0; i < stores.length; i++) {
                if (!contain(storesAdded, stores[i])) {
                    storesAdded.push(stores[i]);
                }
            }
            setDataForThis({...dataForThis, storesAdded: storesAdded});
        } else {
            setDataForThis({...dataForThis, storesAdded: []});
        }
    };

    const contain = (arr, val) => {
        for (let i = 0; i < arr.length; i++) {
            if (JSON.stringify(arr[i]) === JSON.stringify(val)) {
                return true;
            }
        }
        return false;
    };

    return (
        <div className="card">
            <div className="card-header card-header-primary">
                <h4 className="card-title">Edit Delivery Boy</h4>
            </div>
            <div className="card-body">
                <div className="row form-group">
                    <div className="col-md-6">
                        <label>Boy Name</label>
                        <input type="text" value={data.boy_name}
                               onChange={(event) => setData({...data, boy_name: event.target.value})}
                               className="form-control"/>
                    </div>
                    <div className="col-md-6">
                        <label>Boy Phone</label>
                        <input type="text" value={data.boy_phone}
                               onChange={(event) => setData({...data, boy_phone: event.target.value})}
                               className="form-control"/>
                    </div>
                </div>
                <div className="form-group">
                    <label>Select ID</label>
                    <select value={data.id_name}
                            onChange={(event) => setData({...data, id_name: event.target.value})}
                            className="form-control">
                        {ids.map((val, index) => (
                            <option key={index} value={val.name}>{val.name}</option>
                        ))}
                    </select>
                </div>
                <div className="row form-group">
                    <div className="col-md-6">
                        <label>ID Number</label>
                        <input type="number" value={data.id_no}
                               onChange={(event) => setData({...data, id_no: event.target.value})}
                               className="form-control"/>
                    </div>
                    <div className="col-md-6">
                        <label>ID Image (It Should Be Less Then 1000 KB)</label>
                        <div className="custom-file">
                            <input type="file" className="custom-file-input" accept="image/*"
                                   onChange={(event) => setImage(event.target.files[0])}/>
                            <label className="custom-file-label" htmlFor="customFile">Choose file</label>
                        </div>
                    </div>
                </div>
                <div className="row form-group">
                    <div className="col-md-6">
                        <label>Password</label>
                        <input type="text" value={data.password}
                               onChange={(event) => setData({...data, password: event.target.value})}
                               className="form-control"/>
                    </div>
                    <div className="col-md-6">
                        <label>Boy Address</label>
                        <input type="text" value={data.boy_loc}
                               onChange={(event) => setData({...data, boy_loc: event.target.value})}
                               className="form-control"/>
                    </div>
                </div>
                <div className="form-group">
                    <label>Select city</label>
                    <select value={data.boy_city}
                            onChange={(event) => setData({...data, boy_city: event.target.value})}
                            className="form-control">
                        {cities.map((val, index) => (
                            <option key={index} value={val.city_name}>{val.city_name}</option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <MultiSelect
                        title={`Select Store`}
                        data={stores}
                        dataSelected={dataForThis.storesAdded}
                        selectAll={(checkState) => selectAll(checkState)}
                        selectData={(checkState, item) => selectData(checkState, item)}
                        name={"store_name"}
                    />
                </div>
                <br/>
                <button onClick={submit} className="btn btn-primary pull-center mr-1">
                    Submit
                </button>
                <Link to={routers.dBoyList} className="btn btn-danger pull-center">
                    Close
                </Link>
            </div>
        </div>

    )
}