import React from "react";
import {useLocation} from "react-router";
import Modal from "@mui/material/Modal/Modal";
import {example} from "../../data/examData";

export default function AssignDelivery(props) {


    const url = window.location.href;

    const getAllDeliveries = () => {
        return example.products;
    };

    const [data, setData] = React.useState({
        modalState: false,
        delivery: getAllDeliveries[0],
    });

    const unlock = (id) => {
        setData({modalState: true});
    };

    const closeModal = () => {
        setData({modalState: false});
    };

    const submit = () => {
        console.log(props.item, data.delivery)
    };


    return (
        <React.Fragment key={url + "_fragment_request"}>
                <span onClick={() => unlock()} className="btn btn-primary mr-1">
                    <i className=""/>Assign Delivery</span>
            <Modal
                open={data.modalState}
                onClose={closeModal}
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4>Delivery Boy Assign ({props.item["name"]})</h4>
                        </div>
                        <div className="modal-body text-center">
                            <select className="form-control"
                                    onChange={(event) => setData({...data, delivery: event.target.value})}>
                                {getAllDeliveries().map((item, index) => (
                                    <option key={index} value={item}>{item["name"]}</option>
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
