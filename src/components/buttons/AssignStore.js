import React from "react";
import Modal from "@mui/material/Modal/Modal";
import {sendRequest} from "../../api/sendRequest";
import {apis} from "../../configuration/configurationApi";

export default function AssignStore(props) {


    const url = window.location.href;

    const [data, setData] = React.useState({
        modalState: false,
        stores: [],
        store_id: ""
    });

    React.useEffect(() => {
        let body = {
            method: "get",
        };
        let formData = new FormData();
        formData.append("payload", JSON.stringify(body));
        const res = sendRequest(apis.base + apis.nearByStore, formData, ((res) => callback(res)), ((err) => console.log(err)));
    }, []);

    const callback = (res) => {
        setData({...data, stores: res.data})
    };

    const assignStore = (id) => {
        setData({...data, modalState: true});
    };

    const closeModal = () => {
        setData({...data, modalState: false});
    };

    const submit = () => {
        let body = {
            method: "update",
            where: ["order_id=" + props.item.order_id],
            data: {
                store_id: data.store_id
            }
        };
        let formData = new FormData();
        formData.append("payload", JSON.stringify(body));
        const res = sendRequest(apis.base + apis.cancelledOrders, formData, ((res) => callbackSubmit(res)), ((err) => console.log(err)));
    };
    const callbackSubmit = (res) => {
        if (res.status === 200) {
            window.location.href = url
        }
    };


    return (
        <React.Fragment key={url + "_fragment_request"}>
                <span onClick={() => assignStore()} className="btn btn-primary mr-1">
                    <i className=""/>Assign Store</span>
            <Modal
                open={data.modalState}
                onClose={closeModal}
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4>Assign Store ({props.item["name"]})</h4>
                        </div>
                        <div className="modal-body text-center">
                            <select className="form-control"
                                    onChange={(event) => setData({...data, store_id: event.target.value})}>
                                {data.stores.map((store, index) => (
                                    <option key={index} value={store.id}>{store["store_name"]}</option>
                                ))}
                            </select>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-primary" onClick={submit}>Submit</button>
                            <button className="btn btn-danger" onClick={closeModal}>Close</button>
                        </div>
                    </div>
                </div>
            </Modal>
        </React.Fragment>
    )

}
