import React from "react";
import {useLocation} from "react-router";
import Modal from "@mui/material/Modal/Modal";

export default function Reject(props) {


    const url = window.location.href;
    const [data, setData] = React.useState({
        modalState: false,
        reason: ""
    });


    const reject = (id) => {
        setData({modalState: true});
    };

    const closeModal = () => {
        setData({modalState: false});
    };

    const submit = () => {
        console.log(props.item, data.reason)
    };


    return (
        <React.Fragment key={url + "_fragment_request"}>
                <span onClick={() => reject()} className="btn btn-danger mr-1">
                    <i className=""/>Reject</span>
            <Modal
                open={data.modalState}
                onClose={closeModal}
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4>Cancel Orders</h4>
                        </div>
                        <div className="modal-body text-center">
                            <div>Send Rejection Reason to User</div>
                            <textarea className="form-control" value={data.reason}
                                      onChange={(event) => setData({...data, reason: event.target.value})}/>
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