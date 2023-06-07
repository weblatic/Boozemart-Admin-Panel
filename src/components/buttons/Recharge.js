import React from "react";
import Modal from "@mui/material/Modal/Modal";
import {sendRequest} from "../../api/sendRequest";
import {apis} from "../../configuration/configurationApi";

export default function Reject(props) {


    const url = window.location.href;
    const [data, setData] = React.useState({
        modalState: false,
        amount: 0
    });

    const recharge = (id) => {
        setData({...data, modalState: true});
    };

    const closeModal = () => {
        setData({...data, modalState: false});
    };

    const submit = () => {
        let body = {
            method: "update",
            data: {amount: Number(props.item.amount) + Number(data.amount)},
            where: ["wallet_recharge_history=" + props.item.wallet_recharge_history]
        };
        let formData = new FormData();
        formData.append("payload", JSON.stringify(body));
        const res = sendRequest(apis.base + apis.usersWalletRechargeHistory, formData, ((res) => callback(res)), ((err) => console.log(err)));
    };
    const callback = (res) => {
        if (res.status === 200) {
            window.location.href = url;
        }
    };


    return (
        <React.Fragment key={url + "_fragment_request"}>
                <span onClick={() => recharge()} className="btn btn-primary mr-1">
                    <i className=""/>Recharge</span>
            <Modal
                open={data.modalState}
                onClose={closeModal}
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4>Enter Amount</h4>
                        </div>
                        <div className="modal-body text-center">
                            <input className="form-control" type="number" value={data.amount}
                                   onChange={(event) => setData({...data, amount: event.target.value})}/>
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