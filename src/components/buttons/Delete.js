import React from "react";
import {sendRequest} from "../../api/sendRequest";
import {apis} from "../../configuration/configurationApi";
import Modal from "@mui/material/Modal/Modal";

export default function Delete(props) {


    const url = window.location.href;

    const [data, setData] = React.useState({
        modalState: false,
    });

    const confirm = () => {
        setData({modalState: true});
    };

    const closeModal = () => {
        setData({modalState: false});
    };


    const deleteItem = () => {
        setData({modalState: false});
        let body = {
            method: "delete",
            where: [props.primaryKey + "=" + props.item[props.primaryKey]]
        };
        let formData = new FormData();
        formData.append("payload", JSON.stringify(body));
        const res = sendRequest(apis.base + props.api, formData, ((res) => callback(res)), ((err) => console.log(err)));
    };

    const callback = (res) => {
        if (res.status === 200) {
            window.location.href = url;
        }
    };


    return (
        <React.Fragment key={url + "_fragment"}>
                <span onClick={() => confirm()} className="btn btn-danger mr-1"><i
                    className="fa fa-trash"/>
                </span>
            <Modal
                open={data.modalState}
                onClose={closeModal}
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4>Confirm delete</h4>
                        </div>
                        <div className="modal-body text-center">
                            Do you want to delete this, really?
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-primary" onClick={deleteItem}>Delete</button>
                            <button className="btn btn-danger" onClick={closeModal}>Close</button>
                        </div>
                    </div>
                </div>
            </Modal>
        </React.Fragment>
    )

}